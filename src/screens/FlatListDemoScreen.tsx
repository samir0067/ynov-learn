import { Text, View, StyleSheet, FlatList } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type FlatListDemoScreenProps = {
    navigation: any;
};

type FruitType = {
    id: string;
    name: string;
    emoji: string;
    color: string;
};

const FRUITS = [
    { id: "1", name: "Fraise", emoji: "🍓", color: "#FF6B6B" },
    { id: "2", name: "Banane", emoji: "🍌", color: "#FFD93D" },
    { id: "3", name: "Pomme", emoji: "🍏", color: "#6BCB77" },
    { id: "4", name: "Raisin", emoji: "🍇", color: "#9B59B6" },
    { id: "5", name: "Orange", emoji: "🍊", color: "#FF8C00" },
    { id: "6", name: "Pastèque", emoji: "🍉", color: "#E74C3C" },
    { id: "7", name: "Citron", emoji: "🍋", color: "#F1C40F" },
    { id: "8", name: "Cerise", emoji: "🍒", color: "#C0392B" },
    { id: "9", name: "Pêche", emoji: "🍑", color: "#FFDAB9" },
    { id: "10", name: "Kiwi", emoji: "🥝", color: "#2ECC71" },
    { id: "11", name: "Mangue", emoji: "🥭", color: "#F39C12" },
    { id: "12", name: "Ananas", emoji: "🍍", color: "#F7DC6F" },
];

function FruitItem({ fruit }: { fruit: FruitType }) {
    return (
        <View style={[styles.fruitItem, { borderLeftColor: fruit.color }]}>
            <Text style={styles.fruitEmoji}>{fruit.emoji}</Text>
            <View>
                <Text style={styles.fruitName}>{fruit.name}</Text>
                <Text style={styles.fruitId}>ID: {fruit.id}</Text>
            </View>
        </View>
    );
}

export default function FlatListDemoScreen({
    navigation,
}: FlatListDemoScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍎 Liste de fruits (FlatList)</Text>
            <FlatList
                data={FRUITS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FruitItem fruit={item} />}
            />

            <View style={{ height: 40 }} />
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
        color: COLORS.black,
        marginBottom: 16,
    },
    fruitItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginBottom: 8,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        shadowRadius: 4,
        borderLeftWidth: 4,
    },
    fruitEmoji: {
        fontSize: 24,
        marginRight: 12,
    },
    fruitName: {
        fontSize: 18,
        color: COLORS.black,
    },
    fruitId: {
        fontSize: 12,
        color: COLORS.gray,
    },
});
