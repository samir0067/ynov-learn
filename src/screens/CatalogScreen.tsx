import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

type productType = {
    id: string;
    name: string;
    price: string;
    image: string;
    badge: string;
    badgeColor: string;
};

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

function CatalogItem({ product }: { product: productType }) {
    return (
        <View style={styles.productCard}>
            <Image
                source={{ uri: product.image }}
                style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <Button
                label="Ajouter +"
                onPress={() => console.log("Produit ajouté au panier")}
            />
            <View
                style={[styles.badge, { backgroundColor: product.badgeColor }]}
            >
                <Text style={styles.badgeText}>{product.badge}</Text>
            </View>
        </View>
    );
}

export default function CatalogScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catalogue</Text>
            <Text style={styles.subtitle}>{PRODUCTS.length} produits disponibles</Text>
            <FlatList
                data={PRODUCTS}
                renderItem={({ item }) => <CatalogItem product={item} />}
                numColumns={2}
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
    productCard: {
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        borderRadius: 12,
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: 150,
        borderRadius: 12,
        marginBottom: 12,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: "#888",
        marginBottom: 8,
    },
    badge: {
        position: "absolute",
        top: 8,
        right: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
    },
    badgeText: {
        color: "#fff",
        fontSize: 12,
    },
});
