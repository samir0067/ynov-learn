import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function CounterScreen() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Mon Compteur 🔢</Text>
      <Text style={styles.value}>{count}</Text>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.secondary }]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.primary }]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.gray }]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
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
  value: {
    fontSize: 72,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
  },
});
