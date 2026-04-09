import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détail 📄</Text>
            <Text>Application de Samuel</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 20,
    },
});
