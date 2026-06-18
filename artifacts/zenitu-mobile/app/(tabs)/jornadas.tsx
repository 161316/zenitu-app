import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
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

export default function JornadasScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { getModuleProgress, isChallengeComplete } = useProgress();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  function isJourneyUnlocked(journeyId: string): boolean {
    const journey = JOURNEYS.find((j) => j.id === journeyId);
    if (!journey?.unlockAfterJourney) return true;
    const prevJourneyMods = MODULES.filter((m) => m.journeyId === journey.unlockAfterJourney);
    return prevJourneyMods.every((m) => getModuleProgress(m.id) === 1);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: topPad + 16, paddingBottom: bottomPad + 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.pageTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
          Jornadas
        </Text>
        <Text style={[styles.pageSubtitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
          Sua trilha completa do aprendizado
        </Text>

        {JOURNEYS.map((journey) => {
          const mods = MODULES.filter((m) => m.journeyId === journey.id);
          const doneMods = mods.filter((m) => getModuleProgress(m.id) === 1).length;
          const unlocked = isJourneyUnlocked(journey.id);
          const progressPct = mods.length > 0 ? doneMods / mods.length : 0;
          const gradColors = JOURNEY_GRADIENTS[journey.id] ?? ["#7C3AED", "#4C1D95"];

          return (
            <Pressable
              key={journey.id}
              onPress={() => unlocked && router.push(`/jornada/${journey.id}`)}
              style={({ pressed }) => [styles.cardWrapper, { opacity: pressed && unlocked ? 0.85 : 1 }]}
            >
              <LinearGradient
                colors={unlocked ? gradColors : ["#1A1535", "#0D0825"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.card, { borderColor: unlocked ? "#ffffff15" : colors.border }]}
              >
                {!unlocked && (
                  <View style={styles.lockOverlay}>
                    <View style={[styles.lockCircle, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
                      <Feather name="lock" size={20} color="rgba(255,255,255,0.5)" />
                    </View>
                  </View>
                )}

                <View style={styles.cardHeader}>
                  <View style={styles.tierBadge}>
                    <Text style={[styles.tierText, { color: unlocked ? "#fff" : "rgba(255,255,255,0.4)", fontFamily: "SpaceGrotesk_500Medium" }]}>
                      Tier {journey.tier} · {journey.tierLabel}
                    </Text>
                  </View>
                  <View style={styles.moduleCount}>
                    <Text style={[styles.moduleCountText, { color: unlocked ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)", fontFamily: "SpaceGrotesk_400Regular" }]}>
                      {doneMods}/{mods.length} módulos
                    </Text>
                  </View>
                </View>

                <Text style={[styles.journeyTitle, { color: unlocked ? "#fff" : "rgba(255,255,255,0.4)", fontFamily: "SpaceGrotesk_700Bold" }]}>
                  {journey.title}
                </Text>
                <Text style={[styles.journeySubtitle, { color: unlocked ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)", fontFamily: "SpaceGrotesk_400Regular" }]}>
                  {journey.subtitle}
                </Text>

                <View style={[styles.progressTrack, { backgroundColor: "rgba(0,0,0,0.3)" }]}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        backgroundColor: unlocked ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)",
                        width: `${Math.round(progressPct * 100)}%`,
                      },
                    ]}
                  />
                </View>

                {unlocked && (
                  <View style={styles.cardFooter}>
                    <Text style={[styles.startText, { color: "rgba(255,255,255,0.8)", fontFamily: "SpaceGrotesk_500Medium" }]}>
                      {progressPct === 0 ? "Começar" : progressPct === 1 ? "Concluída" : "Continuar"}
                    </Text>
                    <Feather name="chevron-right" size={16} color="rgba(255,255,255,0.8)" />
                  </View>
                )}

                {!unlocked && (
                  <Text style={[styles.unlockHint, { color: "rgba(255,255,255,0.35)", fontFamily: "SpaceGrotesk_400Regular" }]}>
                    Complete a jornada anterior para desbloquear
                  </Text>
                )}
              </LinearGradient>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pageTitle: { fontSize: 28, letterSpacing: -0.5, paddingHorizontal: 20, marginBottom: 4 },
  pageSubtitle: { fontSize: 14, paddingHorizontal: 20, marginBottom: 20 },
  cardWrapper: { marginHorizontal: 20, marginBottom: 16 },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    gap: 10,
    overflow: "hidden",
  },
  lockOverlay: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 2,
  },
  lockCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  tierBadge: {},
  tierText: { fontSize: 12 },
  moduleCount: {},
  moduleCountText: { fontSize: 13 },
  journeyTitle: { fontSize: 22, lineHeight: 28, letterSpacing: -0.3 },
  journeySubtitle: { fontSize: 14, lineHeight: 20 },
  progressTrack: { height: 4, borderRadius: 2, overflow: "hidden", marginTop: 4 },
  progressFill: { height: "100%", borderRadius: 2 },
  cardFooter: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 4, marginTop: 4 },
  startText: { fontSize: 14 },
  unlockHint: { fontSize: 12, marginTop: 4 },
});
