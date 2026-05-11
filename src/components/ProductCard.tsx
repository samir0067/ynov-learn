import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "./Button";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 2 - 12) / 2;

// --- ETAPE 1 : On met à jour la définition du produit ---
export type Product = {
  id: string;
  name: string;
  price: string;
  image?: string;      // On met un "?" car elle devient optionnelle
 // localImage?: any;    // On ajoute cette propriété pour les require()
  badge: string;
  badgeColor: string;
};

export default function ProductCard({ product }: { product: Product }) {
  // --- ETAPE 2 : On détermine quelle source utiliser ---
  // Si localImage existe, on l'utilise directement (c'est un require)
  // Sinon, on crée un objet { uri: ... } pour l'image web
  /*const imageSource = product.localImage 
    ? product.localImage 
    : { uri: product.image };*/

  return (
    <View style={styles.card}>
      
      {/* On utilise la source dynamique ici */}
      <Image source={{ uri: product.image }} style={styles.productImage} />

      <View style={[styles.badge, { backgroundColor: product.badgeColor }]}>
        <Text style={styles.badgeText}>{product.badge}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>

      <View style={styles.cardButton}>
        <Button title="Ajouter 🛒" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 150,
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
