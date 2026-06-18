import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Animated, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

export interface QuestionOption {
  label: string;
  value: string;
}

interface QuestionCardProps {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (correct: boolean) => void;
}

export function QuestionCard({
  question,
  options,
  correct,
  explanation,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  const colors = useColors();
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  function handleSelect(option: string) {
    if (revealed) return;
    setSelected(option);
    setRevealed(true);
    const isCorrect = option === correct;
    if (Platform.OS !== "web") {
      if (isCorrect) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    }
    setTimeout(() => onAnswer(isCorrect), 900);
  }

  function getOptionStyle(option: string) {
    if (!revealed) return { borderColor: colors.border, backgroundColor: colors.muted };
    if (option === correct) return { borderColor: colors.accent, backgroundColor: `${colors.accent}20` };
    if (option === selected && option !== correct) return { borderColor: colors.destructive, backgroundColor: `${colors.destructive}20` };
    return { borderColor: colors.border, backgroundColor: colors.muted };
  }

  function getOptionTextColor(option: string) {
    if (!revealed) return colors.foreground;
    if (option === correct) return colors.accent;
    if (option === selected && option !== correct) return colors.destructive;
    return colors.mutedForeground;
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressRow}>
        <Text style={[styles.counter, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
          {questionNumber} / {totalQuestions}
        </Text>
        <View style={[styles.progressTrack, { backgroundColor: colors.muted }]}>
          <View
            style={[
              styles.progressFill,
              {
                backgroundColor: colors.primary,
                width: `${Math.round((questionNumber / totalQuestions) * 100)}%`,
              },
            ]}
          />
        </View>
      </View>

      <Text style={[styles.question, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
        {question}
      </Text>

      <View style={styles.options}>
        {options.map((option) => (
          <Pressable
            key={option}
            onPress={() => handleSelect(option)}
            disabled={revealed}
            style={({ pressed }) => [
              styles.option,
              getOptionStyle(option),
              pressed && !revealed && { opacity: 0.75 },
            ]}
          >
            <Text
              style={[
                styles.optionText,
                { color: getOptionTextColor(option), fontFamily: "SpaceGrotesk_500Medium" },
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>

      {revealed && (
        <View style={[styles.explanation, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.explanationLabel, { color: colors.primary, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
            {selected === correct ? "Correto!" : "Resposta correta:"}
          </Text>
          {selected !== correct && (
            <Text style={[styles.correctAnswer, { color: colors.accent, fontFamily: "SpaceGrotesk_500Medium" }]}>
              {correct}
            </Text>
          )}
          <Text style={[styles.explanationText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {explanation}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 20 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  counter: { fontSize: 13, minWidth: 40 },
  progressTrack: { flex: 1, height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  question: { fontSize: 18, lineHeight: 26 },
  options: { gap: 10 },
  option: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
  },
  optionText: { fontSize: 15, lineHeight: 21 },
  explanation: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  explanationLabel: { fontSize: 14 },
  correctAnswer: { fontSize: 15 },
  explanationText: { fontSize: 14, lineHeight: 20 },
});
