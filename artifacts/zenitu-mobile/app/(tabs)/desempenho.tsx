import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useProgress } from "@/contexts/ProgressContext";
import { ALL_BADGES } from "@/data/badges";
import { MODULES } from "@/data/modules";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

interface ModuleStat {
  correct: number;
  total: number;
}

type ModuleStats = Record<string, ModuleStat>;

function AccuracyBar({ value, color }: { value: number; color: string }) {
  const colors = useColors();
  return (
    <View style={[barStyles.track, { backgroundColor: colors.muted }]}>
      <View
        style={[
          barStyles.fill,
          { width: `${value}%` as any, backgroundColor: color },
        ]}
      />
    </View>
  );
}

const barStyles = StyleSheet.create({
  track: { height: 8, borderRadius: 4, overflow: "hidden", flex: 1 },
  fill: { height: "100%", borderRadius: 4 },
});

function accuracyColor(pct: number): string {
  if (pct >= 80) return "#0ED9A0";
  if (pct >= 50) return "#F5A828";
  return "#EF4444";
}

export default function DesempenhoScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const { progress } = useProgress();

  const [moduleStats, setModuleStats] = useState<ModuleStats>({});
  const [loading, setLoading] = useState(true);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const fetchStats = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await apiFetch("/progress/module-stats");
      if (res.ok) {
        const data = await res.json();
        setModuleStats(data as ModuleStats);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const allEntries = Object.entries(moduleStats);
  const totalCorrect = allEntries.reduce((s, [, v]) => s + v.correct, 0);
  const totalAnswered = allEntries.reduce((s, [, v]) => s + v.total, 0);
  const totalWrong = totalAnswered - totalCorrect;
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const overallColor = accuracyColor(overallPct);

  const moduleRows = MODULES.filter((m) => moduleStats[m.id]).map((m) => {
    const stat = moduleStats[m.id]!;
    const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
    return { module: m, stat, pct };
  });

  const unlockedBadges = ALL_BADGES.filter((b) => progress.badges.includes(b.id));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: topPad + 16,
          paddingBottom: bottomPad + 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={[
            styles.pageTitle,
            { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" },
          ]}
        >
          Desempenho
        </Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={{ marginTop: 40 }}
          />
        ) : totalAnswered === 0 ? (
          <View style={[styles.emptyCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Feather name="bar-chart-2" size={36} color={colors.mutedForeground} />
            <Text
              style={[
                styles.emptyTitle,
                { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" },
              ]}
            >
              Nenhuma resposta ainda
            </Text>
            <Text
              style={[
                styles.emptyDesc,
                { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" },
              ]}
            >
              Complete aulas e desafios para ver sua taxa de acerto aqui.
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.summaryRow}>
              {[
                { label: "Taxa de acerto", value: `${overallPct}%`, color: overallColor },
                { label: "Corretas", value: String(totalCorrect), color: "#0ED9A0" },
                { label: "Erradas", value: String(totalWrong), color: "#EF4444" },
              ].map((item) => (
                <View
                  key={item.label}
                  style={[
                    styles.summaryCard,
                    { backgroundColor: colors.card, borderColor: colors.border },
                  ]}
                >
                  <Text
                    style={[
                      styles.summaryValue,
                      { color: item.color, fontFamily: "SpaceGrotesk_700Bold" },
                    ]}
                  >
                    {item.value}
                  </Text>
                  <Text
                    style={[
                      styles.summaryLabel,
                      { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" },
                    ]}
                  >
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>

            <View style={[styles.bigBarCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.bigBarHeader}>
                <Text
                  style={[
                    styles.bigBarLabel,
                    { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" },
                  ]}
                >
                  Acerto geral
                </Text>
                <Text
                  style={[
                    styles.bigBarPct,
                    { color: overallColor, fontFamily: "SpaceGrotesk_700Bold" },
                  ]}
                >
                  {overallPct}%
                </Text>
              </View>
              <View style={[bigBarStyles.track, { backgroundColor: colors.muted }]}>
                <View
                  style={[
                    bigBarStyles.fill,
                    { width: `${overallPct}%` as any, backgroundColor: overallColor },
                  ]}
                />
              </View>
              <Text
                style={[
                  styles.bigBarSub,
                  { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" },
                ]}
              >
                {totalCorrect} de {totalAnswered} respostas corretas
              </Text>
            </View>
          </>
        )}

        {!loading && moduleRows.length > 0 && (
          <>
            <Text
              style={[
                styles.sectionTitle,
                { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" },
              ]}
            >
              Por módulo
            </Text>
            <View
              style={[
                styles.moduleCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              {moduleRows.map((row, idx) => {
                const col = accuracyColor(row.pct);
                return (
                  <View
                    key={row.module.id}
                    style={[
                      styles.moduleRow,
                      idx < moduleRows.length - 1 && {
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                      },
                    ]}
                  >
                    <Text style={styles.moduleEmoji}>{row.module.emoji}</Text>
                    <View style={styles.moduleInfo}>
                      <View style={styles.moduleTopLine}>
                        <Text
                          style={[
                            styles.moduleName,
                            { color: colors.foreground, fontFamily: "SpaceGrotesk_500Medium" },
                          ]}
                          numberOfLines={1}
                        >
                          {row.module.title}
                        </Text>
                        <Text
                          style={[
                            styles.moduleScore,
                            { color: col, fontFamily: "SpaceGrotesk_700Bold" },
                          ]}
                        >
                          {row.stat.correct}/{row.stat.total}
                        </Text>
                      </View>
                      <View style={styles.moduleBarRow}>
                        <AccuracyBar value={row.pct} color={col} />
                        <Text
                          style={[
                            styles.modulePct,
                            { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" },
                          ]}
                        >
                          {row.pct}%
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}

        {!loading && unlockedBadges.length > 0 && (
          <>
            <Text
              style={[
                styles.sectionTitle,
                { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" },
              ]}
            >
              Conquistas desbloqueadas
            </Text>
            <View
              style={[
                styles.badgesGrid,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              {unlockedBadges.map((badge, idx) => (
                <View
                  key={badge.id}
                  style={[
                    styles.badgeItem,
                    idx % 2 === 0 && idx < unlockedBadges.length - 1
                      ? { borderRightWidth: 1, borderRightColor: colors.border }
                      : {},
                    idx < unlockedBadges.length - 2
                      ? { borderBottomWidth: 1, borderBottomColor: colors.border }
                      : {},
                  ]}
                >
                  <Text style={styles.badgeEmoji}>{badge.emoji}</Text>
                  <Text
                    style={[
                      styles.badgeTitle,
                      { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" },
                    ]}
                    numberOfLines={2}
                  >
                    {badge.title}
                  </Text>
                  <Text
                    style={[
                      styles.badgeDesc,
                      { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" },
                    ]}
                    numberOfLines={2}
                  >
                    {badge.description}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}

        {!loading && unlockedBadges.length === 0 && totalAnswered > 0 && (
          <>
            <Text
              style={[
                styles.sectionTitle,
                { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" },
              ]}
            >
              Conquistas
            </Text>
            <View
              style={[
                styles.emptyCard,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Text style={{ fontSize: 28 }}>🔒</Text>
              <Text
                style={[
                  styles.emptyDesc,
                  { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" },
                ]}
              >
                Complete módulos e acumule XP para desbloquear conquistas.
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const bigBarStyles = StyleSheet.create({
  track: { height: 14, borderRadius: 7, overflow: "hidden" },
  fill: { height: "100%", borderRadius: 7 },
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageTitle: {
    fontSize: 26,
    letterSpacing: -0.5,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 10,
    marginBottom: 16,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    gap: 4,
  },
  summaryValue: { fontSize: 20 },
  summaryLabel: { fontSize: 11, textAlign: "center" },
  bigBarCard: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 10,
    marginBottom: 24,
  },
  bigBarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigBarLabel: { fontSize: 15 },
  bigBarPct: { fontSize: 22 },
  bigBarSub: { fontSize: 12 },
  sectionTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  moduleCard: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 24,
  },
  moduleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  moduleEmoji: { fontSize: 22, width: 32, textAlign: "center" },
  moduleInfo: { flex: 1, gap: 6 },
  moduleTopLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  moduleName: { fontSize: 13, flex: 1 },
  moduleScore: { fontSize: 13 },
  moduleBarRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  modulePct: { fontSize: 11, width: 30, textAlign: "right" },
  badgesGrid: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  badgeItem: {
    width: "50%",
    padding: 16,
    alignItems: "center",
    gap: 4,
  },
  badgeEmoji: { fontSize: 28, marginBottom: 4 },
  badgeTitle: { fontSize: 13, textAlign: "center" },
  badgeDesc: { fontSize: 11, textAlign: "center" },
  emptyCard: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    padding: 32,
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
  },
  emptyTitle: { fontSize: 16 },
  emptyDesc: { fontSize: 13, textAlign: "center", lineHeight: 20 },
});
