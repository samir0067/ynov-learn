import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../constants/colors";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.aboutBox}>
                <Image
                    source={{
                        uri: "https://themimolet.github.io/assets/images/mimo-pfp.png",
                    }}
                    style={styles.imageAvatar}
                />
                <Text>Application de Samuel, B2 Info</Text>
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
    imageAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
});