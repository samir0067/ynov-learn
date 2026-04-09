import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/colors";

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

      <Text style={styles.placeholder}>✏️ {product.name}</Text>

      {/* TODO 1 : Afficher l'image du produit
          → Composant : Image
          → source={{ uri: product.image }}
          → style={styles.productImage}
          (Supprimez le <Text> placeholder au-dessus quand ça marche) */}


      {/* TODO 2 : Afficher le badge en haut à droite de l'image
          → Une View avec 2 styles : styles.badge ET { backgroundColor: product.badgeColor }
            Astuce : style={[styles.badge, { backgroundColor: product.badgeColor }]}
          → Dedans un Text style={styles.badgeText} avec product.badge */}


      {/* TODO 3 : Afficher le nom et le prix du produit
          → Une View avec style={styles.cardInfo}
          → Dedans 2 Text :
             - product.name  → styles.productName (ajoutez numberOfLines={1})
             - product.price → styles.productPrice */}


      {/* TODO 4 : Ajouter le bouton "Ajouter 🛒"
          → Une View avec style={styles.cardButton}
          → Dedans : <Button label="Ajouter 🛒" onPress={() => {}} /> */}

    </View>
  );
}

export default function CatalogScreen() {
  return (
    <View style={styles.screen}>
      {/* TODO 5 : Remplacer ce Text par une FlatList
          → Supprimez le <Text> ci-dessous
          → Ajoutez une FlatList avec :
             - data={PRODUCTS}
             - keyExtractor={(item) => item.id}
             - renderItem={({ item }) => <ProductCard product={item} />}
             - numColumns={2}
             - columnWrapperStyle={styles.row}
             - ListHeaderComponent = le bloc header ci-dessous (copiez-le) :
               <View style={styles.headerContainer}>
                 <Text style={styles.headerTitle}>🛍️ Boutique Tech</Text>
                 <Text style={styles.headerSubtitle}>{PRODUCTS.length} produits disponibles</Text>
               </View>
      */}
      <Text style={styles.placeholder}>
        Remplacez-moi par une FlatList (TODO 5) !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  placeholder: {
    padding: 24,
    textAlign: "center",
    fontSize: 16,
    color: COLORS.gray,
    fontStyle: "italic",
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