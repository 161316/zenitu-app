import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useProgress } from "@/contexts/ProgressContext";
import { MODULES } from "@/data/modules";

export default function ModuloDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { isLessonComplete, isChallengeComplete, getModuleProgress } = useProgress();

  const mod = MODULES.find((m) => m.id === id);
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  if (!mod) return null;

  const allLessonsDone = mod.lessons.every((l) => isLessonComplete(mod.id, l.id));
  const challengeDone = isChallengeComplete(mod.id);
  const prog = getModuleProgress(mod.id);
  const doneLessons = Math.round(prog * mod.lessons.length);

  const bgStart = mod.color;
  const bgEnd = `${mod.color}80`;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={[bgStart, bgEnd, colors.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[styles.hero, { paddingTop: topPad + 52 }]}
      >
        <Text style={[styles.heroBadge, { color: "rgba(255,255,255,0.7)", fontFamily: "SpaceGrotesk_400Regular" }]}>
          {mod.tierLabel}
        </Text>
        <Text style={[styles.heroTitle, { color: "#fff", fontFamily: "SpaceGrotesk_700Bold" }]}>
          {mod.title}
        </Text>
        <Text style={[styles.heroSubtitle, { color: "rgba(255,255,255,0.75)", fontFamily: "SpaceGrotesk_400Regular" }]}>
          {mod.subtitle}
        </Text>
        <View style={styles.progressRow}>
          <View style={[styles.heroProgressTrack, { backgroundColor: "rgba(0,0,0,0.3)" }]}>
            <View style={[styles.heroProgressFill, { backgroundColor: "rgba(255,255,255,0.9)", width: `${Math.round(prog * 100)}%` }]} />
          </View>
          <Text style={[styles.progressText, { color: "rgba(255,255,255,0.8)", fontFamily: "SpaceGrotesk_500Medium" }]}>
            {doneLessons}/{mod.lessons.length}
          </Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: insets.bottom + 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
          Aulas
        </Text>

        {mod.lessons.map((lesson, idx) => {
          const done = isLessonComplete(mod.id, lesson.id);
          return (
            <Pressable
              key={lesson.id}
              onPress={() => router.push(`/aula/${mod.id}/${lesson.id}`)}
              style={({ pressed }) => [
                styles.lessonRow,
                { backgroundColor: colors.card, borderColor: done ? `${mod.color}40` : colors.border, opacity: pressed ? 0.85 : 1 },
              ]}
            >
              <View style={[styles.lessonIcon, { backgroundColor: done ? `${mod.color}20` : colors.muted }]}>
                {done ? (
                  <Ionicons name="checkmark" size={16} color={mod.color} />
                ) : (
                  <Text style={[styles.lessonNum, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                    {idx + 1}
                  </Text>
                )}
              </View>
              <View style={styles.lessonInfo}>
                <Text style={[styles.lessonTitle, { color: done ? colors.mutedForeground : colors.foreground, fontFamily: "SpaceGrotesk_500Medium" }]}>
                  {lesson.title}
                </Text>
                <View style={styles.xpRow}>
                  <Ionicons name="star-outline" size={12} color="#F5A828" />
                  <Text style={[styles.xpText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                    +{lesson.xpReward} XP
                  </Text>
                </View>
              </View>
              <Feather name={done ? "check" : "chevron-right"} size={16} color={done ? colors.accent : colors.mutedForeground} />
            </Pressable>
          );
        })}

        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        <Pressable
          onPress={() => router.push(`/pratica/${mod.id}`)}
          style={({ pressed }) => [
            styles.actionBtn,
            { backgroundColor: colors.card, borderColor: "#A78BFA40", opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <View style={[styles.actionIcon, { backgroundColor: "#A78BFA20" }]}>
            <Ionicons name="book-outline" size={20} color="#A78BFA" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.actionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
              Praticar
            </Text>
            <Text style={[styles.actionDesc, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              Exercícios para fixar o conteúdo
            </Text>
          </View>
          <Feather name="chevron-right" size={16} color={colors.mutedForeground} />
        </Pressable>

        <Pressable
          onPress={() => allLessonsDone && router.push(`/desafio/${mod.id}`)}
          style={({ pressed }) => [
            styles.actionBtn,
            {
              backgroundColor: allLessonsDone ? colors.card : colors.muted,
              borderColor: challengeDone ? `${colors.accent}40` : allLessonsDone ? "#F5A82840" : colors.border,
              opacity: !allLessonsDone ? 0.6 : pressed ? 0.85 : 1,
            },
          ]}
        >
          <View style={[styles.actionIcon, { backgroundColor: challengeDone ? `${colors.accent}20` : "#F5A82820" }]}>
            {challengeDone ? (
              <Ionicons name="trophy" size={20} color={colors.accent} />
            ) : allLessonsDone ? (
              <Ionicons name="flash" size={20} color="#F5A828" />
            ) : (
              <Feather name="lock" size={20} color={colors.mutedForeground} />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.actionTitle, { color: allLessonsDone ? colors.foreground : colors.mutedForeground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
              Desafio Final
            </Text>
            <Text style={[styles.actionDesc, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              {challengeDone ? "Concluído!" : allLessonsDone ? "Pronto para o desafio?" : "Complete todas as aulas primeiro"}
            </Text>
          </View>
          {allLessonsDone && <Feather name="chevron-right" size={16} color={colors.mutedForeground} />}
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { paddingHorizontal: 20, paddingBottom: 28, gap: 6 },
  heroBadge: { fontSize: 12 },
  heroTitle: { fontSize: 26, letterSpacing: -0.5, lineHeight: 32 },
  heroSubtitle: { fontSize: 14 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 8 },
  heroProgressTrack: { flex: 1, height: 5, borderRadius: 3, overflow: "hidden" },
  heroProgressFill: { height: "100%", borderRadius: 3 },
  progressText: { fontSize: 13 },
  sectionTitle: { fontSize: 18, paddingHorizontal: 20, marginBottom: 12 },
  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    gap: 12,
  },
  lessonIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  lessonNum: { fontSize: 14 },
  lessonInfo: { flex: 1, gap: 3 },
  lessonTitle: { fontSize: 14, lineHeight: 19 },
  xpRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  xpText: { fontSize: 12 },
  divider: { height: 1, marginHorizontal: 20, marginVertical: 16 },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionTitle: { fontSize: 15 },
  actionDesc: { fontSize: 12, marginTop: 2 },
});
