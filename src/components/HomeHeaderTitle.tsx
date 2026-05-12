import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";


export default function HomeHeaderTitle() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Bonjour :D</Text>
            <Text style={styles.subtitle}>Bienvenue sur Ynov Learn !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // ---- Header ----
    header: {
        paddingVertical: 20,
        width: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.black,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 2,
    },
});
