import { View, Text, FlatList, StyleSheet } from "react-native";
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
      <FlatList
        data={FRUITS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FruitItem fruit={item} />}
        ListHeaderComponent={
          <Text style={styles.header}>🍎 Liste de fruits (FlatList)</Text>
        }
        ListFooterComponent={<View style={{ height: 200 }} />}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.black,
    padding: 16,
    paddingBottom: 8,
  },
  fruitCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 5,
    // Ombre légère
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  emoji: {
    fontSize: 36,
    marginRight: 16,
  },
  fruitName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
  },
  fruitId: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  },
});