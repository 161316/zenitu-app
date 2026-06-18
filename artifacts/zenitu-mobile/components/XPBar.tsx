import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";
import { getLevel } from "@/contexts/ProgressContext";

interface XPBarProps {
  xp: number;
  compact?: boolean;
}

export function XPBar({ xp, compact = false }: XPBarProps) {
  const colors = useColors();
  const { level, title, nextXP } = getLevel(xp);
  const prevXP = level === 1 ? 0 : [0, 100, 250, 500, 800, 1200, 1600][level - 1] ?? 0;
  const progress = Math.min((xp - prevXP) / (nextXP - prevXP), 1);

  return (
    <View style={compact ? styles.compact : styles.container}>
      <View style={styles.header}>
        <Text style={[styles.level, { color: colors.primary, fontFamily: "SpaceGrotesk_700Bold" }]}>
          Nível {level}
        </Text>
        <Text style={[styles.title, { color: colors.foreground, fontFamily: "SpaceGrotesk_600SemiBold" }]}>
          {title}
        </Text>
        <Text style={[styles.xp, { color: colors.mutedForeground, fontFamily: "SpaceGrotesk_400Regular" }]}>
          {xp} / {nextXP} XP
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: colors.muted }]}>
        <View
          style={[
            styles.fill,
            {
              backgroundColor: colors.primary,
              width: `${Math.round(progress * 100)}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  compact: { gap: 4 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  level: { fontSize: 13 },
  title: { fontSize: 14, flex: 1 },
  xp: { fontSize: 12 },
  track: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 3,
  },
});
