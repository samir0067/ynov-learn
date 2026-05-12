import { FlatList, View, Text, StyleSheet } from "react-native";

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

// Le composant qui affiche UN fruit (une ligne de la liste)
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
      {/* FlatList remplace ScrollView + .map() */}
      <FlatList
        // data = le tableau de données à afficher
        data={FRUITS}
        // keyExtractor = comment React identifie chaque élément
        keyExtractor={(item) => item.id}
        // renderItem = comment afficher chaque élément
        renderItem={({ item }) => <FruitItem fruit={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  fruitCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  emoji: {
    fontSize: 32,
    marginRight: 14,
  },
  fruitName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  fruitId: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
});