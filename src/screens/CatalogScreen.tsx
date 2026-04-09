import { View, Text, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../constants/colors";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function CatalogScreen() {
  return (
    <View style={styles.screen}>
      {/* FlatList en grille de 2 colonnes pour afficher le catalogue */}
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
});
