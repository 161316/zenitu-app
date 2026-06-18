import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColors } from "@/hooks/useColors";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress, getLevel } from "@/contexts/ProgressContext";
import { XPBar } from "@/components/XPBar";
import { ALL_BADGES } from "@/data/badges";
import { apiFetch } from "@/lib/api";
import {
  requestNotificationPermissions,
  rescheduleAllNotifications,
  syncPushTokenToServer,
} from "@/lib/notifications";

interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  badgeCount: number;
  streak: number;
  isCurrentUser: boolean;
}

export default function PerfilScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { user, logout } = useAuth();
  const { progress } = useProgress();
  const { level, title } = getLevel(progress.xp);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const fetchLeaderboard = useCallback(async () => {
    if (!user) return;
    setLeaderboardLoading(true);
    try {
      const res = await apiFetch("/progress/leaderboard");
      if (res.ok) {
        const data = await res.json();
        setLeaderboard(data as LeaderboardEntry[]);
      }
    } catch {
    } finally {
      setLeaderboardLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  useEffect(() => {
    AsyncStorage.getItem("zenitu-notifications").then((val) => {
      setNotificationsEnabled(val === "true");
    });
  }, []);

  useEffect(() => {
    if (!notificationsEnabled) return;
    rescheduleAllNotifications(true, progress.streak, progress.reviewSchedule).catch(() => {});
  }, [notificationsEnabled, progress.streak, progress.reviewSchedule]);

  async function toggleNotifications(value: boolean) {
    setNotificationsEnabled(value);
    await AsyncStorage.setItem("zenitu-notifications", String(value));
    if (value) {
      const granted = await requestNotificationPermissions();
      if (!granted) {
        setNotificationsEnabled(false);
        await AsyncStorage.setItem("zenitu-notifications", "false");
        syncPushTokenToServer(false).catch(() => {});
        return;
      }
    }
    await Promise.all([
      rescheduleAllNotifications(value, progress.streak, progress.reviewSchedule),
      syncPushTokenToServer(value),
    ]);
  }

  async function handleLogout() {
    if (Platform.OS === "web") {
      await logout();
    } else {
      Alert.alert("Sair", "Deseja sair da sua conta?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", style: "destructive", onPress: logout },
      ]);
    }
  }

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() ?? "?";

  const unlockedBadges = ALL_BADGES.filter((b) => progress.badges.includes(b.id));
  const lockedBadges = ALL_BADGES.filter((b) => !progress.badges.includes(b.id));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: topPad + 16, paddingBottom: bottomPad + 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.avatarSection}>
          <View style={[styles.avatar, { backgroundColor: "#A78BFA30", borderColor: "#A78BFA" }]}>
            <Text style={[styles.avatarText, { color: "#A78BFA", fontFamily: "SpaceGrotesk_700Bold" }]}>
              {initials}
            </Text>
          </View>
          <Text style={[styles.userName, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
            {user?.name}
          </Text>
          <Text style={[styles.userEmail, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
            {user?.email}
          </Text>

          <View style={[styles.levelBadge, { backgroundColor: "#A78BFA20", borderColor: "#A78BFA40" }]}>
            <Ionicons name="trophy" size={14} color="#A78BFA" />
            <Text style={[styles.levelText, { color: "#A78BFA", fontFamily: "SpaceGrotesk_600SemiBold" }]}>
              Nível {level} · {title}
            </Text>
          </View>
        </View>

        <View style={[styles.xpCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <XPBar xp={progress.xp} />
        </View>

        <View style={styles.statsRow}>
          {[
            { icon: "flame", color: "#F5A828", value: String(progress.streak), label: "Streak" },
            { icon: "book-open", color: "#A78BFA", value: String(progress.completedLessons.length), label: "Aulas" },
            { icon: "award", color: "#0ED9A0", value: String(unlockedBadges.length), label: "Badges" },
          ].map((stat) => (
            <View key={stat.label} style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Feather name={stat.icon as any} size={20} color={stat.color} />
              <Text style={[styles.statNum, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
                {stat.value}
              </Text>
              <Text style={[styles.statLabel, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {unlockedBadges.length > 0 && (
          <>
            <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
              Conquistas
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.badgesScroll}>
              {unlockedBadges.map((badge) => (
                <View key={badge.id} style={[styles.badgeCard, { backgroundColor: colors.card, borderColor: "#0ED9A040" }]}>
                  <Text style={styles.badgeEmoji}>{badge.emoji}</Text>
                  <Text style={[styles.badgeTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
                    {badge.title}
                  </Text>
                </View>
              ))}
              {lockedBadges.slice(0, 3).map((badge) => (
                <View key={badge.id} style={[styles.badgeCard, { backgroundColor: colors.muted, borderColor: colors.border, opacity: 0.5 }]}>
                  <Feather name="lock" size={20} color={colors.mutedForeground} />
                  <Text style={[styles.badgeTitle, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                    {badge.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </>
        )}

        {user && (
          <>
            <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
              Ranking
            </Text>
            <View style={[styles.rankingCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              {leaderboardLoading ? (
                <ActivityIndicator size="small" color={colors.primary} style={{ padding: 20 }} />
              ) : leaderboard.length === 0 ? (
                <Text style={[styles.rankingEmpty, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                  Nenhum aluno com XP ainda.
                </Text>
              ) : (
                leaderboard.map((entry, idx) => {
                  const medalLabel = entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : `#${entry.rank}`;
                  const isMe = entry.isCurrentUser;
                  return (
                    <View
                      key={entry.rank}
                      style={[
                        styles.rankingRow,
                        idx < leaderboard.length - 1 && { borderBottomWidth: 1, borderBottomColor: colors.border },
                        isMe && { backgroundColor: "#A78BFA12" },
                      ]}
                    >
                      <View style={[styles.rankBadge, {
                        backgroundColor: entry.rank === 1 ? "#FEF3C720" : entry.rank === 2 ? "#F1F5F920" : entry.rank === 3 ? "#FEF08A20" : colors.muted,
                      }]}>
                        <Text style={[styles.rankBadgeText, { fontFamily: "SpaceGrotesk_700Bold", color: colors.foreground }]}>
                          {medalLabel}
                        </Text>
                      </View>
                      <View style={styles.rankingInfo}>
                        <Text style={[styles.rankingName, { color: colors.foreground, fontFamily: isMe ? "SpaceGrotesk_700Bold" : "SpaceGrotesk_500Medium" }]}>
                          {entry.name}{isMe ? " (você)" : ""}
                        </Text>
                        <Text style={[styles.rankingSub, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                          {entry.badgeCount} badge{entry.badgeCount !== 1 ? "s" : ""} · {entry.streak}🔥
                        </Text>
                      </View>
                      <Text style={[styles.rankingXP, { color: "#A78BFA", fontFamily: "SpaceGrotesk_700Bold" }]}>
                        {entry.xp.toLocaleString("pt-BR")} XP
                      </Text>
                    </View>
                  );
                })
              )}
            </View>
          </>
        )}

        <Text style={[styles.sectionTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_700Bold" }]}>
          Configurações
        </Text>

        <View style={[styles.settingsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="notifications-outline" size={20} color={colors.primary} />
              <View style={styles.settingText}>
                <Text style={[styles.settingTitle, { color: colors.foreground, fontFamily: "SpaceGrotesk_500Medium" }]}>
                  Lembretes diários
                </Text>
                <Text style={[styles.settingDesc, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
                  Notificação às 20h para manter o streak
                </Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{ false: colors.muted, true: "#A78BFA60" }}
              thumbColor={notificationsEnabled ? colors.primary : colors.mutedForeground}
            />
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Pressable style={({ pressed }) => [styles.settingRow, { opacity: pressed ? 0.6 : 1 }]} onPress={handleLogout}>
            <View style={styles.settingLeft}>
              <Ionicons name="log-out-outline" size={20} color={colors.destructive} />
              <Text style={[styles.settingTitle, { color: colors.destructive, fontFamily: "SpaceGrotesk_500Medium" }]}>
                Sair da conta
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  avatarSection: { alignItems: "center", paddingHorizontal: 20, marginBottom: 20, gap: 8 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 28 },
  userName: { fontSize: 22, letterSpacing: -0.3 },
  userEmail: { fontSize: 14 },
  levelBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 4,
  },
  levelText: { fontSize: 14 },
  xpCard: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    gap: 6,
  },
  statNum: { fontSize: 22 },
  statLabel: { fontSize: 12 },
  sectionTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  badgesScroll: { paddingHorizontal: 20, gap: 10, paddingBottom: 4 },
  badgeCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    gap: 6,
    minWidth: 90,
    marginBottom: 16,
  },
  badgeEmoji: { fontSize: 24 },
  badgeTitle: { fontSize: 11, textAlign: "center" },
  settingsCard: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  settingLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  settingText: { flex: 1, gap: 2 },
  settingTitle: { fontSize: 15 },
  settingDesc: { fontSize: 12 },
  divider: { height: 1, marginHorizontal: 16 },
  rankingCard: {
    marginHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 24,
  },
  rankingEmpty: {
    textAlign: "center",
    padding: 20,
    fontSize: 13,
  },
  rankingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  rankBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  rankBadgeText: { fontSize: 14 },
  rankingInfo: { flex: 1, gap: 2 },
  rankingName: { fontSize: 14 },
  rankingSub: { fontSize: 11 },
  rankingXP: { fontSize: 13, textAlign: "right" },
});
