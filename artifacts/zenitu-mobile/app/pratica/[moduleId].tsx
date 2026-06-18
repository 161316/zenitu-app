import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { PRACTICES } from "@/data/practices";
import { MODULES } from "@/data/modules";

export default function PraticaScreen() {
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const mod = MODULES.find((m) => m.id === moduleId);
  const modulePractices = PRACTICES.find((p) => p.moduleId === moduleId);
  const practices = modulePractices?.practices ?? [];
  const practice = practices[currentIdx];

  if (!mod || !practice || practices.length === 0) {
    return (
      <View style={[styles.emptyContainer, { backgroundColor: colors.background, paddingTop: topPad + 60 }]}>
        <Feather name="book-open" size={48} color={colors.mutedForeground} />
        <Text style={[styles.emptyText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_500Medium" }]}>
          Sem exercícios disponíveis
        </Text>
        <Pressable onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.primary }]}>
          <Text style={[styles.backBtnText, { fontFamily: "SpaceGrotesk_600SemiBold" }]}>Voltar</Text>
        </Pressable>
      </View>
    );
  }

  function handleSelect(option: string) {
    if (revealed) return;
    setSelected(option);
    setRevealed(true);
    if (option === practice.correct) {
      setScore((s) => s + 1);
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }

  function handleSubmitWritten() {
    if (!writtenAnswer.trim()) return;
    setRevealed(true);
    setScore((s) => s + 1);
    if (Platform.OS !== "web") Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }

  function handleNext() {
    if (currentIdx < practices.length - 1) {
      setCurrentIdx((n) => n + 1);
      setSelected(null);
      setWrittenAnswer("");
      setRevealed(false);
      setShowHint(false);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <View style={[styles.finishContainer, { backgroundColor: colors.background, paddingTop: topPad + 52 }]}>
        <View style={styles.finishContent}>
          <Ionicons name="checkmark-circle" size={72} color={colors.accent} />
          <Text style={[styles.finishTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
            Prática concluída!
          </Text>
          <Text style={[styles.finishSubtitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {score} de {practices.filter((p) => p.type !== "written").length} questões objetivas corretas
          </Text>
        </View>
        <View style={[styles.finishActions, { paddingBottom: bottomPad + 20 }]}>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [styles.doneBtn, { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={[styles.doneBtnText, { fontFamily: "SpaceGrotesk_700Bold" }]}>Voltar ao módulo</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const isWritten = practice.type === "written";
  const options = practice.options ?? [];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.header, { paddingTop: topPad + 52 }]}>
          <Text style={[styles.headerTitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            Prática · {mod.title}
          </Text>
          <View style={[styles.progressTrack, { backgroundColor: colors.muted }]}>
            <View style={[styles.progressFill, { backgroundColor: mod.color, width: `${((currentIdx + 1) / practices.length) * 100}%` }]} />
          </View>
          <Text style={[styles.counter, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {currentIdx + 1} / {practices.length}
          </Text>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, gap: 16 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.typeTag}>
            <Text style={[styles.typeTagText, { color: colors.primary, fontFamily: "SpaceGrotesk_500Medium", backgroundColor: `${colors.primary}15` }]}>
              {isWritten ? "Dissertativa" : practice.type === "truefalse" ? "Verdadeiro / Falso" : "Múltipla escolha"}
            </Text>
          </View>

          <Text style={[styles.questionText, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
            {practice.question}
          </Text>

          {isWritten ? (
            <>
              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: colors.card, borderColor: revealed ? colors.accent : colors.border, color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" },
                ]}
                placeholder="Escreva sua resposta aqui..."
                placeholderTextColor={colors.mutedForeground}
                multiline
                numberOfLines={5}
                value={writtenAnswer}
                onChangeText={setWrittenAnswer}
                editable={!revealed}
                textAlignVertical="top"
              />
              {!revealed && (
                <Pressable
                  onPress={handleSubmitWritten}
                  disabled={!writtenAnswer.trim()}
                  style={({ pressed }) => [
                    styles.submitBtn,
                    { backgroundColor: writtenAnswer.trim() ? colors.primary : colors.muted, opacity: pressed ? 0.85 : 1 },
                  ]}
                >
                  <Text style={[styles.submitBtnText, { color: writtenAnswer.trim() ? "#fff" : colors.mutedForeground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                    Enviar resposta
                  </Text>
                </Pressable>
              )}
            </>
          ) : (
            <View style={{ gap: 8 }}>
              {options.map((opt) => {
                const isCorrect = opt === practice.correct;
                const isSelected = opt === selected;
                let borderColor = colors.border;
                let bgColor = colors.muted;
                let textColor = colors.foreground;
                if (revealed) {
                  if (isCorrect) { borderColor = colors.accent; bgColor = `${colors.accent}15`; textColor = colors.accent; }
                  else if (isSelected) { borderColor = colors.destructive; bgColor = `${colors.destructive}15`; textColor = colors.destructive; }
                  else textColor = colors.mutedForeground;
                }
                return (
                  <Pressable
                    key={opt}
                    onPress={() => handleSelect(opt)}
                    disabled={revealed}
                    style={({ pressed }) => [styles.option, { borderColor, backgroundColor: bgColor, opacity: pressed && !revealed ? 0.75 : 1 }]}
                  >
                    <Text style={[styles.optionText, { color: textColor, fontFamily: "SpaceGrotesk_500Medium" }]}>{opt}</Text>
                  </Pressable>
                );
              })}
            </View>
          )}

          <Pressable
            onPress={() => setShowHint(!showHint)}
            style={[styles.hintToggle, { borderColor: colors.border }]}
          >
            <Feather name="zap" size={14} color="#F5A828" />
            <Text style={[styles.hintToggleText, { color: "#F5A828", fontFamily: "SpaceGrotesk_500Medium" }]}>
              {showHint ? "Esconder dica" : "Ver dica"}
            </Text>
          </Pressable>

          {showHint && (
            <View style={[styles.hint, { backgroundColor: "#F5A82810", borderColor: "#F5A82840" }]}>
              <Text style={[styles.hintText, { color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                {practice.hint}
              </Text>
            </View>
          )}

          {revealed && isWritten && (
            <View style={[styles.hint, { backgroundColor: `${colors.accent}10`, borderColor: `${colors.accent}30` }]}>
              <Text style={[styles.explanationLabel, { color: colors.accent, fontFamily: "SpaceGrotesk_600SemiBold" }]}>Resposta registrada!</Text>
              <Text style={[styles.hintText, { color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                Dica para reflexão: {practice.hint}
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
                {currentIdx < practices.length - 1 ? "Próxima" : "Finalizar"}
              </Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </Pressable>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingBottom: 12, gap: 8 },
  headerTitle: { fontSize: 13 },
  progressTrack: { height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  counter: { fontSize: 12, textAlign: "right" },
  typeTag: { alignSelf: "flex-start" },
  typeTagText: { fontSize: 12, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  questionText: { fontSize: 18, lineHeight: 26 },
  option: { borderWidth: 1.5, borderRadius: 12, padding: 14 },
  optionText: { fontSize: 15, lineHeight: 21 },
  textInput: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    minHeight: 120,
  },
  submitBtn: { borderRadius: 14, padding: 14, alignItems: "center" },
  submitBtnText: { fontSize: 15 },
  hintToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  hintToggleText: { fontSize: 13 },
  hint: { borderWidth: 1, borderRadius: 12, padding: 14 },
  hintText: { fontSize: 14, lineHeight: 20 },
  explanationLabel: { fontSize: 14 },
  nextBar: { padding: 20, paddingTop: 12 },
  nextBtn: { borderRadius: 14, padding: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  nextBtnText: { color: "#fff", fontSize: 16 },
  emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16 },
  emptyText: { fontSize: 16 },
  backBtn: { borderRadius: 12, paddingHorizontal: 24, paddingVertical: 12 },
  backBtnText: { color: "#fff", fontSize: 15 },
  finishContainer: { flex: 1 },
  finishContent: { flex: 1, alignItems: "center", justifyContent: "center", gap: 16, padding: 24 },
  finishTitle: { fontSize: 28, letterSpacing: -0.5 },
  finishSubtitle: { fontSize: 16, textAlign: "center" },
  finishActions: { padding: 20 },
  doneBtn: { borderRadius: 14, padding: 16, alignItems: "center" },
  doneBtnText: { color: "#fff", fontSize: 16 },
});
