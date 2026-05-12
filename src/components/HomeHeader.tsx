import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

const avatar = require("../../assets/images/squirrelpfp.jpg");

export default function HomeHeader() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>Bonjour :D</Text>
                <Text style={styles.subtitle}>Bienvenue sur Ynov Learn !</Text>
            </View>
            <Image
                source={avatar}
                style={styles.avatar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    // ---- Header ----
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        width: "100%",
        backgroundColor: COLORS.white,
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
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
});
