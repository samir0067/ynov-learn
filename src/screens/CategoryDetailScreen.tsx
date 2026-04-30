import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";

export default function CategoryDetailScreen({
    route,
    navigation,
}: {
    route: any;
    navigation: any;
}) {
    let params = route.params;
    navigation.setOptions({ title: params.name + " " + params.emoji });
    return (
        <View style={[styles.container, { backgroundColor: params.color }]}>
            <View style={styles.contentBox}>
                <Text style={styles.emoji}>{params.emoji}</Text>
                <Text style={styles.title}>Catégorie {params.name}</Text>
                <Button
                    label="Retour"
                    onPress={() => navigation.goBack()}
                    color={params.color}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentBox: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        gap: 16,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    emoji: {
        fontSize: 48,
        marginBottom: 16,
    },
});
