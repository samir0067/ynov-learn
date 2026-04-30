import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { COLORS } from "../constants/colors";

// On récupère la largeur de l'écran pour calculer la taille des cartes
const SCREEN_WIDTH = Dimensions.get("window").width;
// 2 colonnes avec 16px de padding de chaque côté et 12px entre les cartes
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 2 - 12) / 2;

const CATEGORIES = [
    { id: "1", name: "Musique", emoji: "🎵", color: "#6C63FF" },
    { id: "2", name: "Sport", emoji: "⚽", color: "#FF6584" },
    { id: "3", name: "Cuisine", emoji: "🍳", color: "#FF8C00" },
    { id: "4", name: "Voyage", emoji: "✈️", color: "#2ECC71" },
    { id: "5", name: "Photo", emoji: "📷", color: "#3498DB" },
    { id: "6", name: "Cinéma", emoji: "🎬", color: "#E74C3C" },
    { id: "7", name: "Lecture", emoji: "📚", color: "#9B59B6" },
    { id: "8", name: "Gaming", emoji: "🎮", color: "#1ABC9C" },
    { id: "9", name: "Art", emoji: "🎨", color: "#F39C12" },
    { id: "10", name: "Nature", emoji: "🌿", color: "#27AE60" },
];

function CategoryCard({
    category,
    navigation,
}: {
    category: (typeof CATEGORIES)[0];
    navigation: any;
}) {
    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: category.color }]}
            onPress={() =>
                navigation.navigate({
                    name: "CategoryDetail",
                    screen: category.name + " " + category.emoji,
                    params: {
                        id: category.id,
                        name: category.name,
                        emoji: category.emoji,
                        color: category.color,
                    },
                })
            }
        >
            <Text style={styles.emoji}>{category.emoji}</Text>
            <Text style={styles.cardName}>{category.name}</Text>
        </TouchableOpacity>
    );
}

export default function GridDemoScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CategoryCard category={item} navigation={navigation} />
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.header}>
                            🔲 Grille de catégories
                        </Text>
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
