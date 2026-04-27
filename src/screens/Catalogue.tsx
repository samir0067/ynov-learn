import { View, Text, StyleSheet, FlatList, Image, Dimensions, Alert, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

// Calcul de la largeur des cartes pour une grille à 2 colonnes
const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 3) / 2;

const PRODUCTS = [
  {
    id: "1",
    name: "Casque Audio Pro",
    price: "89,99 €",
    image: "https://picsum.photos/seed/headphones/300/300",
    badge: "🔥 Populaire",
    badgeColor: "#FF6584",
  },
  {
    id: "2",
    name: "Montre Connectée",
    price: "199,99 €",
    image: "https://picsum.photos/seed/watch/300/300",
    badge: "⭐ Nouveau",
    badgeColor: "#6C63FF",
  },
  {
    id: "3",
    name: "Enceinte Bluetooth",
    price: "49,99 €",
    image: "https://picsum.photos/seed/speaker/300/300",
    badge: "💰 Promo",
    badgeColor: "#2ECC71",
  },
  {
    id: "4",
    name: "Clavier Mécanique",
    price: "129,99 €",
    image: "https://picsum.photos/seed/keyboard/300/300",
    badge: "🔥 Populaire",
    badgeColor: "#FF6584",
  },
  {
    id: "5",
    name: "Souris Gaming",
    price: "59,99 €",
    image: "https://picsum.photos/seed/mouse/300/300",
    badge: "⭐ Nouveau",
    badgeColor: "#6C63FF",
  },
  {
    id: "6",
    name: "Webcam 4K",
    price: "79,99 €",
    image: "https://picsum.photos/seed/webcam/300/300",
    badge: "💰 Promo",
    badgeColor: "#2ECC71",
  },
];

function ProductCard({ product }: { product: (typeof PRODUCTS)[0] }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.badge}>
          <Text style={[styles.badgeText, { color: product.badgeColor }]}>{product.badge}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{product.price}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => Alert.alert("Panier", `${product.name} a été ajouté au panier !`)} 
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function CatalogueScreen() {
  return (
    <View style={styles.screen}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2} // Affichage en grille de 2 colonnes
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8F9FA", // Fond minimaliste très clair
  },
  listContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.04,
    shadowRadius: 15,
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "#F5F5F7",
    borderRadius: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: CARD_WIDTH - 24,
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  info: {
    paddingTop: 12,
    paddingHorizontal: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#000",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 20,
  },
});