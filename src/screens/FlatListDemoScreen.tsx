import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../constants/colors";

// Nos données : une liste de fruits avec emoji et couleur
const FRUITS = [
  { id: "1", name: "Fraise", emoji: "🍓", color: "#FF6B6B" },
  { id: "2", name: "Banane", emoji: "🍌", color: "#FFD93D" },
  { id: "3", name: "Pomme", emoji: "🍏", color: "#6BCB77" },
  { id: "4", name: "Raisin", emoji: "🍇", color: "#9B59B6" },
  { id: "5", name: "Orange", emoji: "🍊", color: "#FF8C00" },
  { id: "6", name: "Pastèque", emoji: "🍉", color: "#E74C3C" },
  { id: "7", name: "Citron", emoji: "🍋", color: "#F1C40F" },
  { id: "8", name: "Cerise", emoji: "🍒", color: "#C0392B" },
  { id: "9", name: "Pêche", emoji: "🍑", color: "#FFDAB9" },
  { id: "10", name: "Kiwi", emoji: "🥝", color: "#2ECC71" },
  { id: "11", name: "Mangue", emoji: "🥭", color: "#F39C12" },
  { id: "12", name: "Ananas", emoji: "🍍", color: "#F7DC6F" },
];

// Le typage { fruit: (typeof FRUITS)[0] } :
// La prop fruit a la MÊME forme qu'un élément du tableau FRUITS.
function FruitItem({ fruit }: { fruit: (typeof FRUITS)[0] }) {
  return (
    <View style={[styles.fruitCard, { borderLeftColor: fruit.color }]}>
      <Text style={styles.emoji}>{fruit.emoji}</Text>
      <View>
        <Text style={styles.fruitName}>{fruit.name}</Text>
        <Text style={styles.fruitId}>ID: {fruit.id}</Text>
      </View>
    </View>
  );
}

export default function FlatListDemoScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Liste de fruits 🍉</Text>
      <FlatList
        data={FRUITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FruitItem fruit={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: 24,
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 40,
  },
  fruitCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 8, 
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  fruitName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
  },
  fruitId: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 4,
  },
});