import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
  navigation: any;
  route: any;
};

export default function DetailScreen({ navigation, route }: Props) {
  // Valeurs par défaut si on arrive ici sans params
  const {
    name = "Détail",
    emoji = "📄",
    color = COLORS.gray,
  } = route.params ?? {};

console.log("Détail reçu =>",  route.params ?? "Aucun paramètre");

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.card}>
        <View style={[styles.emojiCircle, { backgroundColor: color }]}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Catégorie sélectionnée</Text>
        <View style={styles.buttonContainer}>
          <Button
            label="← Retour"
            onPress={() => navigation.goBack()}
            color={COLORS.secondary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  emojiCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  emoji: {
    fontSize: 72,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
