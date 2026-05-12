import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route }: any) {
  const { name, emoji, color } = route.params ?? {};

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
  },
});
