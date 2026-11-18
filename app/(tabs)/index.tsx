import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const COLORS = {
  background: "#FFFFFF",
  surface: "#F8FAFC",
  text: "#1E293B",
  secondaryText: "#64748B",
  border: "#E2E8F0",
  rock: "#EF4444",
  paper: "#0D9488",
  scissors: "#D97706",
  vs: "#6366F1",
  win: "#0D9488",
  draw: "#D97706",
  loss: "#EF4444"
};

const CHOICES = [
  { name: "Rock", emoji: "✊", color: COLORS.rock },
  { name: "Paper", emoji: "✋", color: COLORS.paper },
  { name: "Scissors", emoji: "✌️", color: COLORS.scissors }
] as const;

type Choice = (typeof CHOICES)[number];
type Score = { wins: number; draws: number; losses: number };

export default function PlayScreen() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState("Make your move!");
  const [resultColor, setResultColor] = useState(COLORS.text);
  const [score, setScore] = useState<Score>({ wins: 0, draws: 0, losses: 0 });

  const playGame = (choice: Choice) => {
    const compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    if (choice.name === compChoice.name) {
      setResult("It's a Draw! 🤝");
      setResultColor(COLORS.draw);
      setScore((prev) => ({ ...prev, draws: prev.draws + 1 }));
    } else if (
      (choice.name === "Rock" && compChoice.name === "Scissors") ||
      (choice.name === "Paper" && compChoice.name === "Rock") ||
      (choice.name === "Scissors" && compChoice.name === "Paper")
    ) {
      setResult("You Win! 🎉");
      setResultColor(COLORS.win);
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else {
      setResult("Computer Wins! 🤖");
      setResultColor(COLORS.loss);
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("Make your move!");
    setResultColor(COLORS.text);
    setScore({ wins: 0, draws: 0, losses: 0 });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>RPS Showdown</Text>
        <Text style={styles.subtitle}>ROCK · PAPER · SCISSORS</Text>

        <View style={styles.scoreboard}>
          <View style={styles.scoreColumn}>
            <Text style={styles.scoreLabel}>WINS</Text>
            <Text style={[styles.scoreValue, { color: COLORS.win }]}>{score.wins}</Text>
          </View>
          <View style={styles.scoreDivider} />
          <View style={styles.scoreColumn}>
            <Text style={styles.scoreLabel}>DRAWS</Text>
            <Text style={[styles.scoreValue, { color: COLORS.draw }]}>{score.draws}</Text>
          </View>
          <View style={styles.scoreDivider} />
          <View style={styles.scoreColumn}>
            <Text style={styles.scoreLabel}>LOSSES</Text>
            <Text style={[styles.scoreValue, { color: COLORS.loss }]}>{score.losses}</Text>
          </View>
        </View>

        <View style={styles.arena}>
          <View style={styles.playerSection}>
            <Text style={styles.playerTitle}>YOU</Text>
            <View style={[
              styles.emojiCircle,
              userChoice ? { borderColor: userChoice.color, backgroundColor: `${userChoice.color}15` } : null
            ]}>
              <Text style={styles.emojiText}>{userChoice ? userChoice.emoji : "?"}</Text>
            </View>
          </View>
          <View style={styles.vsBadge}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          <View style={styles.playerSection}>
            <Text style={styles.playerTitle}>COMPUTER</Text>
            <View style={[
              styles.emojiCircle,
              computerChoice ? { borderColor: computerChoice.color, backgroundColor: `${computerChoice.color}15` } : null
            ]}>
              <Text style={styles.emojiText}>{computerChoice ? computerChoice.emoji : "🤖"}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.resultContainer, { borderColor: `${resultColor}55` }]}>
          <Text style={[styles.resultText, { color: resultColor }]}>{result}</Text>
        </View>

        <Text style={styles.instruction}>CHOOSE YOUR WEAPON</Text>
        <View style={styles.buttonContainer}>
          {CHOICES.map((choice) => (
            <TouchableOpacity
              key={choice.name}
              style={[styles.choiceButton, { borderBottomColor: choice.color }]}
              activeOpacity={0.75}
              onPress={() => playGame(choice)}
              accessibilityRole="button"
              accessibilityLabel={`Choose ${choice.name}`}
            >
              <Text style={styles.buttonEmoji}>{choice.emoji}</Text>
              <Text style={styles.buttonText}>{choice.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.resetButton} onPress={resetGame} activeOpacity={0.8}>
          <Ionicons name="refresh" size={17} color={COLORS.secondaryText} />
          <Text style={styles.resetText}>Reset scoreboard</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Think fast. Play fair. Have fun!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 14,
    paddingHorizontal: 18,
    paddingBottom: 22
  },
  header: { fontSize: 32, fontWeight: "900", color: COLORS.text, letterSpacing: 0.3 },
  subtitle: { fontSize: 12, color: COLORS.secondaryText, fontWeight: "800", letterSpacing: 2, marginTop: 6, marginBottom: 24 },
  scoreboard: {
    flexDirection: "row", alignItems: "center", width: "100%",
    backgroundColor: COLORS.surface, paddingVertical: 17, borderRadius: 18,
    borderWidth: 1, borderColor: COLORS.border, marginBottom: 18
  },
  scoreColumn: { flex: 1, alignItems: "center", justifyContent: "center" },
  scoreLabel: { fontSize: 11, color: COLORS.secondaryText, fontWeight: "800", letterSpacing: 1, marginBottom: 5 },
  scoreValue: { fontSize: 27, fontWeight: "900" },
  scoreDivider: { width: 1, height: 38, backgroundColor: COLORS.border },
  arena: {
    flexDirection: "row", alignItems: "center", width: "100%",
    backgroundColor: COLORS.surface, paddingVertical: 26, paddingHorizontal: 12,
    borderRadius: 20, borderWidth: 1, borderColor: COLORS.border, marginBottom: 14
  },
  playerSection: { flex: 1, alignItems: "center", justifyContent: "center" },
  playerTitle: { fontSize: 12, fontWeight: "800", color: COLORS.text, marginBottom: 12, letterSpacing: 1 },
  emojiCircle: {
    width: 82, height: 82, borderRadius: 41, borderWidth: 2,
    borderColor: COLORS.border, alignItems: "center", justifyContent: "center",
    backgroundColor: COLORS.background
  },
  emojiText: { fontSize: 36 },
  vsBadge: { backgroundColor: COLORS.vs, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 12 },
  vsText: { fontSize: 14, fontWeight: "900", color: "#FFFFFF" },
  resultContainer: {
    width: "100%", paddingVertical: 16, paddingHorizontal: 12,
    borderRadius: 16, borderWidth: 1.5, backgroundColor: COLORS.background, marginBottom: 20
  },
  resultText: { fontSize: 21, fontWeight: "900", textAlign: "center" },
  instruction: { fontSize: 14, fontWeight: "800", color: COLORS.text, marginBottom: 12, letterSpacing: 1 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%", gap: 10 },
  choiceButton: {
    flex: 1, backgroundColor: COLORS.surface, paddingVertical: 17,
    borderRadius: 16, alignItems: "center", borderWidth: 1,
    borderColor: COLORS.border, borderBottomWidth: 4, elevation: 2
  },
  buttonEmoji: { fontSize: 31, marginBottom: 9 },
  buttonText: { fontSize: 13, fontWeight: "800", color: COLORS.text },
  resetButton: { flexDirection: "row", alignItems: "center", gap: 7, padding: 12, marginTop: 14 },
  resetText: { color: COLORS.secondaryText, fontWeight: "700", fontSize: 13 },
  footer: { color: "#94A3B8", fontSize: 12, marginTop: 2 }
});
