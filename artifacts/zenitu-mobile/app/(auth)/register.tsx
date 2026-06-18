import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/contexts/AuthContext";

export default function RegisterScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister() {
    if (!name.trim() || !email.trim() || !password) return;
    if (password.length < 6) { setError("A senha deve ter pelo menos 6 caracteres"); return; }
    setError("");
    setLoading(true);
    const result = await register(name.trim(), email.trim().toLowerCase(), password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      router.replace("/(tabs)");
    }
  }

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  return (
    <LinearGradient colors={["#07031A", "#1A0B3B", "#07031A"]} style={styles.gradient}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView
          contentContainerStyle={[styles.scroll, { paddingTop: topPad + 24, paddingBottom: insets.bottom + 40 }]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={[styles.logoCircle, { backgroundColor: "#A78BFA20", borderColor: "#A78BFA50" }]}>
              <Ionicons name="rocket" size={32} color="#A78BFA" />
            </View>
            <Text style={[styles.title, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
              Criar conta
            </Text>
            <Text style={[styles.subtitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              Comece sua jornada no mundo dos negócios
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_500Medium" }]}>Nome</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.card, borderColor: colors.border, color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" }]}
              placeholder="Seu nome"
              placeholderTextColor={colors.mutedForeground}
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_500Medium" }]}>E-mail</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.card, borderColor: colors.border, color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" }]}
              placeholder="seu@email.com"
              placeholderTextColor={colors.mutedForeground}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
            />

            <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_500Medium" }]}>Senha</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.card, borderColor: colors.border, color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular" }]}
              placeholder="Mínimo 6 caracteres"
              placeholderTextColor={colors.mutedForeground}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {error ? (
              <Text style={[styles.errorText, { color: colors.destructive, fontFamily: "SpaceGrotesk_400Regular" }]}>
                {error}
              </Text>
            ) : null}

            <Pressable
              style={({ pressed }) => [styles.btn, { backgroundColor: colors.primary, opacity: pressed ? 0.8 : 1 }]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={[styles.btnText, { fontFamily: "SpaceGrotesk_700Bold" }]}>Criar conta</Text>
              )}
            </Pressable>

            <View style={styles.footer}>
              <Text style={[styles.footerText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                Já tem conta?{" "}
              </Text>
              <Link href="/(auth)/login">
                <Text style={[styles.footerLink, { color: colors.primary, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                  Entrar
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scroll: { flexGrow: 1, paddingHorizontal: 28 },
  header: { alignItems: "center", marginBottom: 36, gap: 10 },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  title: { fontSize: 28, letterSpacing: -0.5 },
  subtitle: { fontSize: 14, textAlign: "center" },
  form: { gap: 12 },
  label: { fontSize: 13, marginBottom: -4 },
  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
  },
  errorText: { fontSize: 14, textAlign: "center" },
  btn: {
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  btnText: { color: "#fff", fontSize: 16 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 8 },
  footerText: { fontSize: 14 },
  footerLink: { fontSize: 14 },
});
