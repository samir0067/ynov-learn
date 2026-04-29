import { View, Text, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 2 - 12) / 2;

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
      {/* TODO 1 : Image du produit */}
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
      />

      {/* TODO 2 : Badge en haut à droite */}
      <View style={[styles.badge, { backgroundColor: product.badgeColor }]}>
        <Text style={styles.badgeText}>{product.badge}</Text>
      </View>

      {/* TODO 3 : Nom et prix */}
      <View style={styles.cardInfo}>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>

      {/* TODO 4 : Bouton Ajouter */}
      <View style={styles.cardButton}>
        <Button label="Ajouter 🛒" onPress={() => {}} />
      </View>
    </View>
  );
}

export default function CatalogScreen() {
  return (
    <View style={styles.screen}>
      {/* TODO 5 : FlatList en grille */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>🛍️ Boutique Tech</Text>
            <Text style={styles.headerSubtitle}>{PRODUCTS.length} produits disponibles</Text>
          </View>
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
  headerContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.black,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 4,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: "100%",
    height: CARD_WIDTH,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  cardInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.black,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 4,
  },
  cardButton: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
