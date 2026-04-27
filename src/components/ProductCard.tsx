import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "./Button";

// Calcul de la largeur d'une carte : (largeur écran - marges extérieures - espace entre cartes) / 2
const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 2 - 12) / 2;

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  badge: string;
  badgeColor: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <View style={styles.card}>

      {/* Image du produit chargée depuis une URL distante */}
      <Image source={{ uri: product.image }} style={styles.productImage} />

      {/* Badge coloré positionné en absolu en haut à droite de l'image */}
      <View style={[styles.badge, { backgroundColor: product.badgeColor }]}>
        <Text style={styles.badgeText}>{product.badge}</Text>
      </View>

      {/* Infos produit : nom tronqué à 1 ligne + prix en couleur primaire */}
      <View style={styles.cardInfo}>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>

      {/* Bouton d'ajout au panier avec le composant Button réutilisable */}
      <View style={styles.cardButton}>
        <Button label="Ajouter 🛒" onPress={() => {}} />
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
