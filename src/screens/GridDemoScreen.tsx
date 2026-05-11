import { View, Text, FlatList, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

const CATEGORIES = [
  { id: "1", name: "Musique", emoji: "🎵", color: "#6C63FF", description: "Découvrez les meilleurs morceaux, albums et artistes de l'année. Vibrez au rythme de la musique !" },
  { id: "2", name: "Sport", emoji: "⚽", color: "#FF6584", description: "Toute l'actualité sportive en direct. Résultats, analyses et résumés de vos sports préférés." },
  { id: "3", name: "Cuisine", emoji: "🍳", color: "#FF8C00", description: "Des recettes simples et rapides pour épater vos amis et votre famille. À vos fourneaux !" },
  { id: "4", name: "Voyage", emoji: "✈️", color: "#2ECC71", description: "Explorez le monde à travers nos guides, astuces de voyage et destinations de rêve." },
  { id: "5", name: "Photo", emoji: "📷", color: "#3498DB", description: "Apprenez les bases de la photographie et découvrez des clichés époustouflants." },
  { id: "6", name: "Cinéma", emoji: "🎬", color: "#E74C3C", description: "Critiques de films, sorties en salle et actualités du grand écran. Silence, ça tourne !" },
  { id: "7", name: "Lecture", emoji: "📚", color: "#9B59B6", description: "Plongez dans des univers fantastiques avec notre sélection de livres et de romans." },
  { id: "8", name: "Gaming", emoji: "🎮", color: "#1ABC9C", description: "Tests de jeux vidéo, astuces et actualités sur l'industrie du gaming. Ready, set, go!" },
  { id: "9", name: "Art", emoji: "🎨", color: "#F39C12", description: "Laissez libre cours à votre imagination et découvrez des œuvres d'art inspirantes." },
  { id: "10", name: "Nature", emoji: "🌿", color: "#27AE60", description: "Reconnectez-vous avec la nature et explorez la faune et la flore de notre belle planète." },
];

function CategoryCard({ category, onPress, cardWidth }: { category: (typeof CATEGORIES)[0]; onPress: () => void; cardWidth: number }) {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: category.color, width: cardWidth, height: cardWidth }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.emoji}>{category.emoji}</Text>
      <Text style={styles.cardName}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default function GridDemoScreen({ navigation }: { navigation: any }) {
  // On récupère la largeur dynamiquement (s'adapte à la rotation de l'écran)
  const { width } = useWindowDimensions();
  const cardWidth = (width - 16 * 2 - 12) / 2;

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryCard category={item} cardWidth={cardWidth} onPress={() => navigation.navigate("DetailCategory", { category: item })} />}
        // numColumns = nombre de colonnes → ça crée la GRILLE
        numColumns={2}
        // columnWrapperStyle = style de chaque LIGNE de la grille
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
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // Ombre
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