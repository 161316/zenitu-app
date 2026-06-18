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
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  async function handleLogin() {
    if (!email.trim() || !password) return;
    setError("");
    setLoading(true);
    const result = await login(email.trim().toLowerCase(), password);
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
          contentContainerStyle={[styles.scroll, { paddingTop: topPad + 40, paddingBottom: insets.bottom + 40 }]}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoArea}>
            <View style={[styles.logoCircle, { backgroundColor: "#A78BFA20", borderColor: "#A78BFA50" }]}>
              <Ionicons name="rocket" size={40} color="#A78BFA" />
            </View>
            <Text style={[styles.appName, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
              Zenitu
            </Text>
            <Text style={[styles.tagline, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
              Aprenda negócios do jeito certo
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_500Medium" }]}>
              E-mail
            </Text>
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

            <Text style={[styles.label, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_500Medium" }]}>
              Senha
            </Text>
            <View>
              <TextInput
                style={[styles.input, { backgroundColor: colors.card, borderColor: colors.border, color: colors.foreground, fontFamily: "SpaceGrotesk_400Regular", paddingRight: 48 }]}
                placeholder="••••••••"
                placeholderTextColor={colors.mutedForeground}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
              />
              <Pressable style={styles.eyeBtn} onPress={() => setShowPass(!showPass)}>
                <Ionicons name={showPass ? "eye-off" : "eye"} size={20} color={colors.mutedForeground} />
              </Pressable>
            </View>

            {error ? (
              <Text style={[styles.errorText, { color: colors.destructive, fontFamily: "SpaceGrotesk_400Regular" }]}>
                {error}
              </Text>
            ) : null}

            <Pressable
              style={({ pressed }) => [styles.btn, { backgroundColor: colors.primary, opacity: pressed ? 0.8 : 1 }]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={[styles.btnText, { fontFamily: "SpaceGrotesk_700Bold" }]}>Entrar</Text>
              )}
            </Pressable>

            <View style={styles.footer}>
              <Text style={[styles.footerText, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                Não tem conta?{" "}
              </Text>
              <Link href="/(auth)/register">
                <Text style={[styles.footerLink, { color: colors.primary, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                  Criar conta
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
  logoArea: { alignItems: "center", marginBottom: 48, gap: 12 },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 24,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  appName: { fontSize: 36, letterSpacing: -1 },
  tagline: { fontSize: 15, textAlign: "center" },
  form: { gap: 12 },
  label: { fontSize: 13, marginBottom: -4 },
  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
  },
  eyeBtn: {
    position: "absolute",
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: "center",
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
