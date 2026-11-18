import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  background: "#FFFFFF",
  surface: "#F8FAFC",
  text: "#1E293B",
  secondaryText: "#64748B",
  border: "#E2E8F0",
  rock: "#EF4444",
  paper: "#0D9488",
  scissors: "#D97706"
};

export default function RulesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Game Rules 📖</Text>
        <Text style={styles.subtitle}>KNOW YOUR MOVES</Text>
        <View style={styles.card}>
          <Text style={styles.ruleText}>
            ✊ <Text style={[styles.bold, { color: COLORS.rock }]}>Rock</Text> crushes Scissors
          </Text>
          <View style={styles.separator} />
          <Text style={styles.ruleText}>
            ✌️ <Text style={[styles.bold, { color: COLORS.scissors }]}>Scissors</Text> cuts Paper
          </Text>
          <View style={styles.separator} />
          <Text style={styles.ruleText}>
            ✋ <Text style={[styles.bold, { color: COLORS.paper }]}>Paper</Text> covers Rock
          </Text>
        </View>
        <Text style={styles.description}>
          Select one of the three weapons from the main play arena. The computer will randomly select its weapon, and the winner is decided based on the classic rules above.
          {"\n\n"}First to conquer the arena wins! 🏆
        </Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>QUICK TIP</Text>
          <Text style={styles.tipText}>Both players choosing the same weapon results in a draw. Try again and beat the computer!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  container: { flexGrow: 1, backgroundColor: COLORS.background, alignItems: "center", padding: 24, paddingTop: 30 },
  header: { fontSize: 32, fontWeight: "900", marginBottom: 5, marginTop: 10, color: COLORS.text, letterSpacing: 0.5 },
  subtitle: { fontSize: 12, color: COLORS.secondaryText, fontWeight: "800", letterSpacing: 2, marginBottom: 30 },
  card: { backgroundColor: COLORS.surface, padding: 22, borderRadius: 20, width: "100%", borderWidth: 1, borderColor: COLORS.border, marginBottom: 28 },
  ruleText: { fontSize: 20, marginVertical: 13, color: COLORS.text, fontWeight: "600" },
  bold: { fontWeight: "900" },
  separator: { height: 1, backgroundColor: COLORS.border },
  description: { fontSize: 16, lineHeight: 27, textAlign: "center", color: COLORS.secondaryText, paddingHorizontal: 6 },
  tipCard: { marginTop: 28, width: "100%", backgroundColor: "#FFF7ED", borderRadius: 16, padding: 18, borderWidth: 1, borderColor: "#FED7AA" },
  tipTitle: { fontSize: 12, fontWeight: "900", color: "#C2410C", letterSpacing: 1, marginBottom: 7 },
  tipText: { color: "#7C2D12", lineHeight: 22, fontSize: 14 }
});
