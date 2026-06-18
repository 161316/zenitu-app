import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { XPBar } from "@/components/XPBar";
import { JOURNEYS } from "@/data/journeys";
import { MODULES } from "@/data/modules";
import { getLevel } from "@/contexts/ProgressContext";

const JOURNEY_GRADIENTS: Record<string, [string, string]> = {
  fundamentos: ["#7C3AED", "#4C1D95"],
  "gestao-estrategica": ["#2563EB", "#1E3A8A"],
  "lideranca-corporativa": ["#D97706", "#92400E"],
  "master-executivo": ["#E11D48", "#881337"],
};

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const { progress, getModuleProgress, isLessonComplete } = useProgress();
  const { level, title } = getLevel(progress.xp);
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const firstName = user?.name?.split(" ")[0] ?? "Explorador";

  const nextLesson = (() => {
    for (const mod of MODULES) {
      for (const lesson of mod.lessons) {
        if (!isLessonComplete(mod.id, lesson.id)) {
          return { module: mod, lesson };
        }
      }
    }
    return null;
  })();

  const completedModules = MODULES.filter((mod) =>
    mod.lessons.every((l) => isLessonComplete(mod.id, l.id))
  ).length;

  const journeyStats = JOURNEYS.map((j) => {
    const mods = MODULES.filter((m) => m.journeyId === j.id);
    const done = mods.filter((m) => getModuleProgress(m.id) === 1).length;
    return { ...j, total: mods.length, done };
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: topPad + 16, paddingBottom: bottomPad + 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <View style={styles.headerText}>
            <Text style={[styles.greeting, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              Bom dia,
            </Text>
            <Text style={[styles.name, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
              {firstName}
            </Text>
          </View>
          <View style={[styles.streakBadge, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Ionicons name="flame" size={16} color="#F5A828" />
            <Text style={[styles.streakText, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
              {progress.streak}
            </Text>
          </View>
        </View>

        <View style={[styles.xpCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.levelBadge}>
            <Text style={[styles.levelLabel, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              Nível {level} — {title}
            </Text>
            <Text style={[styles.xpText, { color: colors.primary, fontFamily: "SpaceGrotesk_700Bold" }]}>
              {progress.xp} XP
            </Text>
          </View>
          <XPBar xp={progress.xp} compact />
          <View style={[styles.statsRow]}>
            <View style={styles.stat}>
              <Text style={[styles.statNum, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
                {completedModules}
              </Text>
              <Text style={[styles.statLabel, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                módulos
              </Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.stat}>
              <Text style={[styles.statNum, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
                {progress.completedLessons.length}
              </Text>
              <Text style={[styles.statLabel, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                aulas
              </Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.stat}>
              <Text style={[styles.statNum, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
                {progress.badges.length}
              </Text>
              <Text style={[styles.statLabel, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                badges
              </Text>
            </View>
          </View>
        </View>

        {nextLesson && (
          <>
            <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
              Continuar aprendendo
            </Text>
            <Pressable
              onPress={() => router.push(`/aula/${nextLesson.module.id}/${nextLesson.lesson.id}`)}
              style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
            >
              <LinearGradient
                colors={JOURNEY_GRADIENTS[nextLesson.module.journeyId] ?? ["#7C3AED", "#4C1D95"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.continueCard, { borderColor: "#ffffff15" }]}
              >
                <Text style={[styles.continueModule, { color: "rgba(255,255,255,0.7)", fontFamily: "SpaceGrotesk_400Regular" }]}>
                  {nextLesson.module.title}
                </Text>
                <Text style={[styles.continueLessonTitle, { color: "#fff", fontFamily: "SpaceGrotesk_700Bold" }]}>
                  {nextLesson.lesson.title}
                </Text>
                <View style={styles.continueFooter}>
                  <View style={styles.xpBadge}>
                    <Ionicons name="star" size={12} color="#F5A828" />
                    <Text style={[styles.xpBadgeText, { color: "#fff", fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                      +{nextLesson.lesson.xpReward} XP
                    </Text>
                  </View>
                  <View style={styles.playBtn}>
                    <Feather name="play" size={14} color="#fff" />
                    <Text style={[styles.playText, { color: "#fff", fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                      Iniciar
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          </>
        )}

        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
          Suas jornadas
        </Text>

        {journeyStats.map((j) => (
          <Pressable
            key={j.id}
            onPress={() => router.push(`/jornada/${j.id}`)}
            style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
          >
            <View style={[styles.journeyRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={[styles.journeyDot, { backgroundColor: j.color }]} />
              <View style={{ flex: 1, gap: 6 }}>
                <View style={styles.journeyRowHeader}>
                  <Text style={[styles.journeyRowTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                    {j.title}
                  </Text>
                  <Text style={[styles.journeyProgress, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                    {j.done}/{j.total}
                  </Text>
                </View>
                <View style={[styles.miniTrack, { backgroundColor: colors.muted }]}>
                  <View
                    style={[
                      styles.miniFill,
                      {
                        backgroundColor: j.color,
                        width: j.total > 0 ? `${Math.round((j.done / j.total) * 100)}%` : "0%",
                      },
                    ]}
                  />
                </View>
              </View>
              <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  headerText: { gap: 2 },
  greeting: { fontSize: 14 },
  name: { fontSize: 26, letterSpacing: -0.5 },
  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  streakText: { fontSize: 15 },
  xpCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 12,
    marginBottom: 24,
  },
  levelBadge: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  levelLabel: { fontSize: 13 },
  xpText: { fontSize: 16 },
  statsRow: { flexDirection: "row", alignItems: "center" },
  stat: { flex: 1, alignItems: "center", gap: 2 },
  statNum: { fontSize: 20 },
  statLabel: { fontSize: 12 },
  statDivider: { width: 1, height: 32 },
  sectionTitle: { fontSize: 18, marginHorizontal: 20, marginBottom: 12 },
  continueCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    gap: 8,
    marginBottom: 24,
  },
  continueModule: { fontSize: 12 },
  continueLessonTitle: { fontSize: 20, lineHeight: 26 },
  continueFooter: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 4 },
  xpBadge: { flexDirection: "row", alignItems: "center", gap: 4 },
  xpBadgeText: { fontSize: 13 },
  playBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  playText: { fontSize: 14 },
  journeyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  journeyDot: { width: 10, height: 10, borderRadius: 5 },
  journeyRowHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  journeyRowTitle: { fontSize: 14, flex: 1, marginRight: 8 },
  journeyProgress: { fontSize: 12 },
  miniTrack: { height: 4, borderRadius: 2, overflow: "hidden" },
  miniFill: { height: "100%", borderRadius: 2 },
});
