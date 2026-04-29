import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function ChronoScreen() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Mon Chrono</Text>
      <View style={styles.circle}>
        <Text style={styles.value}>{seconds}</Text>
        <Text style={styles.unit}>secondes</Text>
      </View>
      <Text style={styles.hint}>Démarrage automatique...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.black,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  value: {
    fontSize: 56,
    fontWeight: "bold",
    color: COLORS.white,
  },
  unit: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.85,
  },
  hint: {
    fontSize: 14,
    color: COLORS.gray,
  },
});