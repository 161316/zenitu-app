import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useProgress } from "@/contexts/ProgressContext";
import { JOURNEYS } from "@/data/journeys";
import { MODULES } from "@/data/modules";

const JOURNEY_GRADIENTS: Record<string, [string, string]> = {
  fundamentos: ["#7C3AED", "#4C1D95"],
  "gestao-estrategica": ["#2563EB", "#1E3A8A"],
  "lideranca-corporativa": ["#D97706", "#92400E"],
  "master-executivo": ["#E11D48", "#881337"],
};

export default function JornadaDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { getModuleProgress, isChallengeComplete } = useProgress();

  const journey = JOURNEYS.find((j) => j.id === id);
  const modules = MODULES.filter((m) => m.journeyId === id);
  const gradColors = JOURNEY_GRADIENTS[id ?? ""] ?? ["#7C3AED", "#4C1D95"];
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  if (!journey) return null;

  const doneMods = modules.filter((m) => getModuleProgress(m.id) === 1).length;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={gradColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.hero, { paddingTop: topPad + 52 }]}
      >
        <View style={styles.heroBadge}>
          <Text style={[styles.heroBadgeText, { color: "rgba(255,255,255,0.8)", fontFamily: "SpaceGrotesk_500Medium" }]}>
            {journey.tierLabel}
          </Text>
        </View>
        <Text style={[styles.heroTitle, { color: "#fff", fontFamily: "SpaceGrotesk_700Bold" }]}>
          {journey.title}
        </Text>
        <Text style={[styles.heroSubtitle, { color: "rgba(255,255,255,0.75)", fontFamily: "SpaceGrotesk_400Regular" }]}>
          {journey.subtitle}
        </Text>
        <View style={styles.heroStats}>
          <View style={styles.heroStat}>
            <Text style={[styles.heroStatNum, { color: "#fff", fontFamily: "SpaceGrotesk_700Bold" }]}>
              {doneMods}/{modules.length}
            </Text>
            <Text style={[styles.heroStatLabel, { color: "rgba(255,255,255,0.7)", fontFamily: "SpaceGrotesk_400Regular" }]}>
              módulos
            </Text>
          </View>
          <View style={[styles.heroStatDivider, { backgroundColor: "rgba(255,255,255,0.2)" }]} />
          <View style={styles.heroStat}>
            <Text style={[styles.heroStatNum, { color: "#fff", fontFamily: "SpaceGrotesk_700Bold" }]}>
              {modules.reduce((sum, m) => sum + m.lessons.length, 0)}
            </Text>
            <Text style={[styles.heroStatLabel, { color: "rgba(255,255,255,0.7)", fontFamily: "SpaceGrotesk_400Regular" }]}>
              aulas
            </Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: insets.bottom + 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
          Módulos
        </Text>

        {modules.map((mod, index) => {
          const prog = getModuleProgress(mod.id);
          const isComplete = prog === 1;
          const hasChallenge = isChallengeComplete(mod.id);
          const doneLessons = Math.round(prog * mod.lessons.length);

          return (
            <Pressable
              key={mod.id}
              onPress={() => router.push(`/modulo/${mod.id}`)}
              style={({ pressed }) => [styles.moduleCard, { opacity: pressed ? 0.85 : 1, backgroundColor: colors.card, borderColor: isComplete ? `${mod.color}40` : colors.border }]}
            >
              <View style={styles.moduleCardLeft}>
                <View style={[styles.moduleNum, { backgroundColor: isComplete ? `${mod.color}20` : colors.muted, borderColor: isComplete ? `${mod.color}60` : colors.border }]}>
                  <Text style={[styles.moduleNumText, { color: isComplete ? mod.color : colors.mutedForeground, fontFamily: "SpaceGrotesk_700Bold" }]}>
                    {index + 1}
                  </Text>
                </View>
                <View style={styles.moduleInfo}>
                  <Text style={[styles.moduleTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                    {mod.title}
                  </Text>
                  <View style={styles.moduleMetaRow}>
                    <Text style={[styles.moduleMeta, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                      {doneLessons}/{mod.lessons.length} aulas
                    </Text>
                    {hasChallenge && (
                      <View style={[styles.challengeBadge, { backgroundColor: `${colors.accent}20` }]}>
                        <Ionicons name="trophy" size={10} color={colors.accent} />
                        <Text style={[styles.challengeBadgeText, { color: colors.accent, fontFamily: "SpaceGrotesk_500Medium" }]}>
                          Desafio
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={[styles.modProgressTrack, { backgroundColor: colors.muted }]}>
                    <View style={[styles.modProgressFill, { backgroundColor: mod.color, width: `${Math.round(prog * 100)}%` }]} />
                  </View>
                </View>
              </View>
              <Feather name={isComplete ? "check-circle" : "chevron-right"} size={18} color={isComplete ? colors.accent : colors.mutedForeground} />
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { paddingHorizontal: 20, paddingBottom: 24, gap: 8 },
  heroBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 4,
  },
  heroBadgeText: { fontSize: 12 },
  heroTitle: { fontSize: 26, letterSpacing: -0.5, lineHeight: 32 },
  heroSubtitle: { fontSize: 14 },
  heroStats: { flexDirection: "row", alignItems: "center", gap: 20, marginTop: 8 },
  heroStat: { alignItems: "center", gap: 2 },
  heroStatNum: { fontSize: 20 },
  heroStatLabel: { fontSize: 12 },
  heroStatDivider: { width: 1, height: 28 },
  sectionTitle: { fontSize: 18, paddingHorizontal: 20, marginBottom: 12 },
  moduleCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
  },
  moduleCardLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  moduleNum: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  moduleNumText: { fontSize: 16 },
  moduleInfo: { flex: 1, gap: 4 },
  moduleTitle: { fontSize: 14, lineHeight: 20 },
  moduleMetaRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  moduleMeta: { fontSize: 12 },
  challengeBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  challengeBadgeText: { fontSize: 10 },
  modProgressTrack: { height: 3, borderRadius: 2, overflow: "hidden", marginTop: 2 },
  modProgressFill: { height: "100%", borderRadius: 2 },
});
