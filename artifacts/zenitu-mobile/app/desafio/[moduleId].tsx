import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useProgress } from "@/contexts/ProgressContext";
import { CHALLENGES } from "@/data/challenges";
import { MODULES } from "@/data/modules";

export default function DesafioScreen() {
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { completeChallenge, isChallengeComplete } = useProgress();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const mod = MODULES.find((m) => m.id === moduleId);
  const challenge = CHALLENGES.find((c) => c.moduleId === moduleId);
  const questions = challenge?.questions ?? [];
  const q = questions[currentQ];
  const XP_REWARD = 150;

  if (!mod || !q || questions.length === 0) return null;

  function handleSelect(option: string) {
    if (revealed) return;
    setSelected(option);
    setRevealed(true);
    const isCorrect = option === q.correct;
    if (Platform.OS !== "web") {
      if (isCorrect) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    if (isCorrect) setCorrectCount((c) => c + 1);
  }

  async function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((n) => n + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      if (!isChallengeComplete(moduleId ?? "")) {
        await completeChallenge(moduleId ?? "", XP_REWARD);
      }
      setFinished(true);
    }
  }

  const score = Math.round((correctCount / questions.length) * 100);

  if (finished) {
    return (
      <View style={[styles.finishContainer, { backgroundColor: colors.background, paddingTop: topPad + 52 }]}>
        <View style={styles.finishContent}>
          <View style={[styles.scoreCircle, { borderColor: score >= 60 ? colors.accent : colors.destructive, backgroundColor: score >= 60 ? `${colors.accent}10` : `${colors.destructive}10` }]}>
            <Text style={[styles.scoreNum, { color: score >= 60 ? colors.accent : colors.destructive, fontFamily: "SpaceGrotesk_700Bold" }]}>
              {score}%
            </Text>
          </View>
          <Text style={[styles.finishTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
            {score >= 80 ? "Excelente!" : score >= 60 ? "Bom trabalho!" : "Continue praticando!"}
          </Text>
          <Text style={[styles.finishSubtitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {correctCount}/{questions.length} respostas corretas
          </Text>
          {!isChallengeComplete(moduleId ?? "") && (
            <View style={styles.xpRow}>
              <Ionicons name="star" size={18} color="#F5A828" />
              <Text style={[styles.xpText, { color: "#F5A828", fontFamily: "SpaceGrotesk_700Bold" }]}>
                +{XP_REWARD} XP
              </Text>
            </View>
          )}
        </View>
        <View style={[styles.finishActions, { paddingBottom: bottomPad + 20 }]}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [styles.doneBtn, { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={[styles.doneBtnText, { fontFamily: "SpaceGrotesk_700Bold" }]}>
              Voltar ao módulo
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const options = q.options ?? [];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPad + 52 }]}>
        <Text style={[styles.headerTitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
          Desafio · {mod.title}
        </Text>
        <View style={[styles.progressTrack, { backgroundColor: colors.muted }]}>
          <View style={[styles.progressFill, { backgroundColor: mod.color, width: `${((currentQ + 1) / questions.length) * 100}%` }]} />
        </View>
        <Text style={[styles.questionCounter, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
          {currentQ + 1} / {questions.length}
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.questionText, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
          {q.question}
        </Text>

        <View style={{ gap: 10 }}>
          {options.map((opt) => {
            const isCorrect = opt === q.correct;
            const isSelected = opt === selected;
            let borderColor = colors.border;
            let bgColor = colors.muted;
            let textColor = colors.foreground;
            if (revealed) {
              if (isCorrect) { borderColor = colors.accent; bgColor = `${colors.accent}15`; textColor = colors.accent; }
              else if (isSelected) { borderColor = colors.destructive; bgColor = `${colors.destructive}15`; textColor = colors.destructive; }
              else { textColor = colors.mutedForeground; }
            }
            return (
              <Pressable
                key={opt}
                onPress={() => handleSelect(opt)}
                disabled={revealed}
                style={({ pressed }) => [
                  styles.option,
                  { borderColor, backgroundColor: bgColor, opacity: pressed && !revealed ? 0.75 : 1 },
                ]}
              >
                <Text style={[styles.optionText, { color: textColor, fontFamily: "SpaceGrotesk_500Medium" }]}>
                  {opt}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {revealed && (
          <View style={[styles.explanation, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.explanationLabel, { color: selected === q.correct ? colors.accent : colors.destructive, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
              {selected === q.correct ? "Correto!" : "Incorreto"}
            </Text>
            <Text style={[styles.explanationText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              {q.explanation}
            </Text>
          </View>
        )}
      </ScrollView>

      {revealed && (
        <View style={[styles.nextBar, { paddingBottom: bottomPad + 16 }]}>
          <Pressable
            onPress={handleNext}
            style={({ pressed }) => [styles.nextBtn, { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={[styles.nextBtnText, { fontFamily: "SpaceGrotesk_700Bold" }]}>
              {currentQ < questions.length - 1 ? "Próxima" : "Ver resultado"}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 16, gap: 8 },
  headerTitle: { fontSize: 13 },
  progressTrack: { height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  questionCounter: { fontSize: 12, textAlign: "right" },
  questionText: { fontSize: 19, lineHeight: 27 },
  option: { borderWidth: 1.5, borderRadius: 12, padding: 14 },
  optionText: { fontSize: 15, lineHeight: 21 },
  explanation: { borderWidth: 1, borderRadius: 12, padding: 16, gap: 6 },
  explanationLabel: { fontSize: 14 },
  explanationText: { fontSize: 14, lineHeight: 20 },
  nextBar: { padding: 20, paddingTop: 12 },
  nextBtn: { borderRadius: 14, padding: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  nextBtnText: { color: "#fff", fontSize: 16 },
  finishContainer: { flex: 1 },
  finishContent: { flex: 1, alignItems: "center", justifyContent: "center", gap: 14, padding: 24 },
  scoreCircle: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, alignItems: "center", justifyContent: "center" },
  scoreNum: { fontSize: 36 },
  finishTitle: { fontSize: 28, letterSpacing: -0.5 },
  finishSubtitle: { fontSize: 16 },
  xpRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  xpText: { fontSize: 20 },
  finishActions: { padding: 20 },
  doneBtn: { borderRadius: 14, padding: 16, alignItems: "center" },
  doneBtnText: { color: "#fff", fontSize: 16 },
});
