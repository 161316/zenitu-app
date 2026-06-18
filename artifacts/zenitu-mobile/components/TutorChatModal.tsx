import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { apiFetch } from "@/lib/api";

interface Message {
  role: "user" | "tutor";
  text: string;
}

interface TutorChatModalProps {
  visible: boolean;
  onClose: () => void;
  contextQuestion: string;
  moduleTitle?: string;
  lessonTitle?: string;
  questionType?: "objective" | "written";
}

function parseSseChunks(raw: string): { content?: string; done?: boolean }[] {
  return raw
    .split("\n\n")
    .filter((block) => block.startsWith("data: "))
    .map((block) => {
      try {
        return JSON.parse(block.slice(6));
      } catch {
        return {};
      }
    });
}

export default function TutorChatModal({
  visible,
  onClose,
  contextQuestion,
  moduleTitle = "",
  lessonTitle = "",
  questionType = "written",
}: TutorChatModalProps) {
  const colors = useColors();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const abortRef = useRef<AbortController | null>(null);

  function scrollToBottom() {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 50);
  }

  async function sendMessage() {
    const trimmed = inputText.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);
    scrollToBottom();

    const tutorPlaceholder: Message = { role: "tutor", text: "" };
    setMessages((prev) => [...prev, tutorPlaceholder]);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await apiFetch("/correction", {
        method: "POST",
        body: JSON.stringify({
          question: contextQuestion.slice(0, 500),
          studentAnswer: trimmed.slice(0, 1000),
          moduleTitle,
          lessonTitle,
          questionType,
        }),
        signal: ctrl.signal,
      });

      if (!res.ok) {
        let errMsg = "Ocorreu um erro. Tente novamente.";
        try {
          const json = await res.json();
          if (json?.error) errMsg = json.error;
        } catch {}
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "tutor", text: errMsg };
          return copy;
        });
        setLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = parseSseChunks(buffer);
        const lastNewline = buffer.lastIndexOf("\n\n");
        if (lastNewline !== -1) buffer = buffer.slice(lastNewline + 2);

        let isDone = false;
        for (const ev of events) {
          if (ev.done) { isDone = true; break; }
          if (ev.content) {
            setMessages((prev) => {
              const copy = [...prev];
              copy[copy.length - 1] = {
                role: "tutor",
                text: copy[copy.length - 1].text + ev.content,
              };
              return copy;
            });
            scrollToBottom();
          }
        }
        if (isDone) break;
      }
    } catch (e: any) {
      if (e?.name === "AbortError") return;
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "tutor",
          text: "Não consegui conectar ao tutor. Verifique sua conexão.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  }

  function handleClose() {
    abortRef.current?.abort();
    setMessages([]);
    setInputText("");
    setLoading(false);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={handleClose} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={[styles.sheet, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <View style={[styles.handle, { backgroundColor: colors.border }]} />

          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <View style={styles.headerLeft}>
              <View style={[styles.iconBadge, { backgroundColor: `${colors.primary}20` }]}>
                <Ionicons name="sparkles" size={18} color={colors.primary} />
              </View>
              <Text style={[styles.headerTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
                Tutor IA
              </Text>
            </View>
            <Pressable onPress={handleClose} style={({ pressed }) => [styles.closeBtn, { opacity: pressed ? 0.6 : 1 }]}>
              <Ionicons name="close" size={22} color={colors.mutedForeground} />
            </Pressable>
          </View>

          <ScrollView
            ref={scrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={styles.messageList}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {messages.length === 0 && (
              <View style={styles.emptyState}>
                <Ionicons name="chatbubble-ellipses-outline" size={36} color={colors.mutedForeground} />
                <Text style={[styles.emptyText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                  Tem alguma dúvida? Pergunte ao tutor!
                </Text>
              </View>
            )}

            {messages.map((msg, i) => (
              <View
                key={i}
                style={[
                  styles.bubble,
                  msg.role === "user"
                    ? [styles.userBubble, { backgroundColor: colors.primary }]
                    : [styles.tutorBubble, { backgroundColor: colors.muted, borderColor: colors.border }],
                ]}
              >
                {msg.role === "tutor" && msg.text === "" && loading && (
                  <ActivityIndicator size="small" color={colors.mutedForeground} />
                )}
                {msg.text !== "" && (
                  <Text
                    style={[
                      styles.bubbleText,
                      {
                        color: msg.role === "user" ? "#fff" : colors.foreground,
                        fontFamily: "SpaceGrotesk_400Regular",
                      },
                    ]}
                  >
                    {msg.text}
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>

          <View style={[styles.inputRow, { borderTopColor: colors.border, backgroundColor: colors.card }]}>
            <TextInput
              style={[
                styles.input,
                {
                  color: colors.foreground,
                  backgroundColor: colors.muted,
                  borderColor: colors.border,
                  fontFamily: "SpaceGrotesk_400Regular",
                },
              ]}
              placeholder="Digite sua dúvida..."
              placeholderTextColor={colors.mutedForeground}
              value={inputText}
              onChangeText={setInputText}
              multiline
              maxLength={1000}
              editable={!loading}
              onSubmitEditing={sendMessage}
              returnKeyType="send"
              blurOnSubmit={false}
            />
            <Pressable
              onPress={sendMessage}
              disabled={!inputText.trim() || loading}
              style={({ pressed }) => [
                styles.sendBtn,
                {
                  backgroundColor: inputText.trim() && !loading ? colors.primary : colors.muted,
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Ionicons
                name="send"
                size={18}
                color={inputText.trim() && !loading ? "#fff" : colors.mutedForeground}
              />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  sheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderBottomWidth: 0,
    height: "75%",
    paddingBottom: Platform.OS === "ios" ? 0 : 16,
  },
  handle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 16 },
  closeBtn: { padding: 4 },
  messageList: {
    padding: 16,
    gap: 10,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 14,
    textAlign: "center",
    maxWidth: 220,
    lineHeight: 20,
  },
  bubble: {
    maxWidth: "82%",
    borderRadius: 16,
    padding: 12,
    minHeight: 36,
  },
  userBubble: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  tutorBubble: {
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
    borderWidth: 1,
  },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: Platform.OS === "ios" ? 30 : 16,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    maxHeight: 100,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
