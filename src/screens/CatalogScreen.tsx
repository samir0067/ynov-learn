import { View, Text, FlatList, StyleSheet} from "react-native";
import { COLORS } from "../constants/colors";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function CatalogScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS}
                renderItem={({ item }) => <ProductCard product={item} />}
                numColumns={2}
                columnWrapperStyle={styles.row}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.title}>Catalogue</Text>
                        <Text style={styles.subtitle}>
                            {PRODUCTS.length} produits disponibles
                        </Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    subtitle: {
        marginBottom: 12,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 16,
    },
});
