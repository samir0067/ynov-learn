import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.aboutBox}>
                <Text>Application de Samuel</Text>
                <Text>Développé pour le cours de DEV MOBILE</Text>
                <Text>(C) 2026 Samuel</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: COLORS.background,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 20,
    },
    aboutBox: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
    },
});
