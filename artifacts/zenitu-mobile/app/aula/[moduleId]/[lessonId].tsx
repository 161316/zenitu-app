import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useProgress } from "@/contexts/ProgressContext";
import { useQuestionProgress, type QuestionResult } from "@/hooks/useQuestionProgress";
import { MODULES } from "@/data/modules";
import TutorChatModal from "@/components/TutorChatModal";

interface LessonHistoryPanelProps {
  results: QuestionResult[];
  totalParagraphs: number;
  color: string;
  onRetryUnread: () => void;
}

function LessonHistoryPanel({ results, totalParagraphs, color, onRetryUnread }: LessonHistoryPanelProps) {
  const byIndex = new Map(results.map((r) => [r.questionIndex, r.isCorrect]));
  const unreadCount = totalParagraphs - results.length;
  const readCount = results.length;

  return (
    <View style={[historyStyles.container, { backgroundColor: `${color}12`, borderColor: `${color}33` }]}>
      <Text style={[historyStyles.title, { color }]}>Histórico desta aula</Text>
      <Text style={historyStyles.subtitle}>
        {readCount} de {totalParagraphs} partes lidas
      </Text>
      <View style={historyStyles.grid}>
        {Array.from({ length: totalParagraphs }, (_, i) => {
          const answered = byIndex.has(i);
          return (
            <View
              key={i}
              style={[
                historyStyles.bubble,
                answered
                  ? { backgroundColor: "#4ade8088" }
                  : { backgroundColor: "transparent", borderWidth: 1.5, borderColor: "#9ca3af" },
              ]}
            >
              <Text
                style={[
                  historyStyles.bubbleText,
                  { color: answered ? "#15803d" : "#6b7280" },
                ]}
              >
                {answered ? "✓" : "?"}
              </Text>
            </View>
          );
        })}
      </View>
      {unreadCount > 0 && (
        <Pressable onPress={onRetryUnread} style={historyStyles.retryBtn}>
          <Ionicons name="refresh" size={14} color={color} />
          <Text style={[historyStyles.retryText, { color }]}>
            Refazer {unreadCount} não lida{unreadCount === 1 ? "" : "s"}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const historyStyles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1.5,
  },
  title: {
    fontSize: 11,
    fontFamily: "SpaceGrotesk_700Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#6b7280",
    fontFamily: "SpaceGrotesk_400Regular",
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  bubble: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleText: {
    fontSize: 12,
    fontFamily: "SpaceGrotesk_700Bold",
  },
  retryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },
  retryText: {
    fontSize: 12,
    fontFamily: "SpaceGrotesk_700Bold",
  },
});

export default function AulaScreen() {
  const { moduleId, lessonId } = useLocalSearchParams<{ moduleId: string; lessonId: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { completeLesson, isLessonComplete } = useProgress();
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [tutorVisible, setTutorVisible] = useState(false);

  const mod = MODULES.find((m) => m.id === moduleId);
  const lesson = mod?.lessons.find((l) => l.id === lessonId);
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const totalParagraphs = lesson?.content.length ?? 0;
  const { results, loading: qLoading, saveResult, getFirstUnreadIndex } = useQuestionProgress(
    moduleId ?? "",
    lessonId ?? "",
    totalParagraphs
  );

  if (!mod || !lesson) return null;

  const alreadyDone = isLessonComplete(mod.id, lesson.id);
  const isLastStep = step >= lesson.content.length - 1;

  async function handleNext() {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    await saveResult(step, true, "reading");
    if (!isLastStep) {
      setStep((s) => s + 1);
    } else {
      if (!alreadyDone) {
        await completeLesson(mod!.id, lesson!.id, lesson!.xpReward);
      }
      setCompleted(true);
    }
  }

  function handleRetryUnread() {
    const firstUnread = getFirstUnreadIndex();
    setStep(firstUnread);
  }

  if (completed) {
    return (
      <View style={[styles.completionContainer, { backgroundColor: colors.background, paddingTop: topPad + 52 }]}>
        <View style={styles.completionContent}>
          <View style={[styles.completionCircle, { backgroundColor: `${colors.accent}15`, borderColor: `${colors.accent}40` }]}>
            <Ionicons name="checkmark-circle" size={64} color={colors.accent} />
          </View>
          <Text style={[styles.completionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
            Aula concluída!
          </Text>
          {!alreadyDone && (
            <View style={styles.xpEarned}>
              <Ionicons name="star" size={20} color="#F5A828" />
              <Text style={[styles.xpEarnedText, { color: "#F5A828", fontFamily: "SpaceGrotesk_700Bold" }]}>
                +{lesson.xpReward} XP
              </Text>
            </View>
          )}
          <Text style={[styles.completionSubtitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {lesson.title}
          </Text>
        </View>

        <View style={[styles.completionActions, { paddingBottom: bottomPad + 20 }]}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [styles.btnPrimary, { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={[styles.btnPrimaryText, { fontFamily: "SpaceGrotesk_700Bold" }]}>
              Voltar ao módulo
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.topBar, { paddingTop: topPad + 52, paddingHorizontal: 20 }]}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarTrack, { backgroundColor: colors.muted }]}>
            <View
              style={[
                styles.progressBarFill,
                {
                  backgroundColor: mod.color,
                  width: `${Math.round(((step + 1) / lesson.content.length) * 100)}%`,
                },
              ]}
            />
          </View>
          <Text style={[styles.progressCounter, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {step + 1}/{lesson.content.length}
          </Text>
        </View>
        <Text style={[styles.lessonTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
          {lesson.title}
        </Text>
      </View>

      <ScrollView
        key={step}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, paddingTop: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {alreadyDone && !qLoading && results.length > 0 && (
          <LessonHistoryPanel
            results={results}
            totalParagraphs={totalParagraphs}
            color={mod.color}
            onRetryUnread={handleRetryUnread}
          />
        )}
        <Text style={[styles.paragraph, { color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" }]}>
          {lesson.content[step]}
        </Text>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: bottomPad + 16, paddingHorizontal: 20 }]}>
        <View style={styles.bottomActions}>
          <Pressable
            onPress={() => setTutorVisible(true)}
            style={({ pressed }) => [
              styles.tutorBtn,
              { backgroundColor: `${colors.primary}20`, borderColor: `${colors.primary}50`, opacity: pressed ? 0.75 : 1 },
            ]}
          >
            <Ionicons name="sparkles" size={18} color={colors.primary} />
            <Text style={[styles.tutorBtnText, { color: colors.primary, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
              Tutor IA
            </Text>
          </Pressable>
          <Pressable
            onPress={handleNext}
            style={({ pressed }) => [
              styles.nextBtn,
              { backgroundColor: isLastStep ? colors.accent : colors.primary, opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <Text style={[styles.nextBtnText, { fontFamily: "SpaceGrotesk_700Bold" }]}>
              {isLastStep ? "Concluir aula" : "Continuar"}
            </Text>
            <Ionicons name={isLastStep ? "checkmark" : "arrow-forward"} size={18} color="#fff" />
          </Pressable>
        </View>
      </View>

      <TutorChatModal
        visible={tutorVisible}
        onClose={() => setTutorVisible(false)}
        contextQuestion={lesson.content[step]}
        moduleTitle={mod.title}
        lessonTitle={lesson.title}
        questionType="written"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: { paddingBottom: 16, gap: 10 },
  progressBarContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
  progressBarTrack: { flex: 1, height: 5, borderRadius: 3, overflow: "hidden" },
  progressBarFill: { height: "100%", borderRadius: 3 },
  progressCounter: { fontSize: 13, minWidth: 32 },
  lessonTitle: { fontSize: 16 },
  paragraph: { fontSize: 17, lineHeight: 28, letterSpacing: 0.1 },
  bottomBar: { paddingTop: 16 },
  bottomActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tutorBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  tutorBtnText: { fontSize: 14 },
  nextBtn: {
    flex: 1,
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  nextBtnText: { color: "#fff", fontSize: 16 },
  completionContainer: { flex: 1 },
  completionContent: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16, padding: 24 },
  completionCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  completionTitle: { fontSize: 28, letterSpacing: -0.5 },
  xpEarned: { flexDirection: "row", alignItems: "center", gap: 8 },
  xpEarnedText: { fontSize: 22 },
  completionSubtitle: { fontSize: 15, textAlign: "center" },
  completionActions: { padding: 20 },
  btnPrimary: {
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },
  btnPrimaryText: { color: "#fff", fontSize: 16 },
});
