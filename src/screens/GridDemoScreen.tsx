import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 2 - 12) / 2;

// Ajout de la propriété "description" pour l'écran détail
const CATEGORIES = [
  { id: "1", name: "Musique", emoji: "🎵", color: "#6C63FF", description: "L'art de combiner les sons." },
  { id: "2", name: "Sport", emoji: "⚽", color: "#FF6584", description: "Activité physique et compétition." },
  { id: "3", name: "Cuisine", emoji: "🍳", color: "#FF8C00", description: "L'art de préparer des mets." },
  { id: "4", name: "Voyage", emoji: "✈️", color: "#2ECC71", description: "Découverte de nouveaux horizons." },
  { id: "5", name: "Photo", emoji: "📷", color: "#3498DB", description: "Capturer l'instant présent." },
  { id: "6", name: "Cinéma", emoji: "🎬", color: "#E74C3C", description: "Le septième art en mouvement." },
  { id: "7", name: "Lecture", emoji: "📚", color: "#9B59B6", description: "Voyager à travers les mots." },
  { id: "8", name: "Gaming", emoji: "🎮", color: "#1ABC9C", description: "Univers virtuels et interactifs." },
  { id: "9", name: "Art", emoji: "🎨", color: "#F39C12", description: "Expression de la créativité." },
  { id: "10", name: "Nature", emoji: "🌿", color: "#27AE60", description: "La beauté du monde sauvage." },
];

// On ajoute 'navigation' et 'onPress' aux props de la carte
function CategoryCard({ category, onPress }: { category: (typeof CATEGORIES)[0], onPress: () => void }) {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: category.color }]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.emoji}>{category.emoji}</Text>
      <Text style={styles.cardName}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default function GridDemoScreen({ navigation }: any) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard 
            category={item} 
            // On envoie l'objet 'item' vers l'écran Detail
            onPress={() => navigation.navigate("Detail", { info: item })} 
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <Text style={styles.header}>🔲 Grille de catégories</Text>
        }
        ListFooterComponent={<View style={{ height: 20 }} />}
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
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
});