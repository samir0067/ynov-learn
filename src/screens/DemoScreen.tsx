import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const imagePenguin = require("../../assets/images/fat-penguin.png");
const imageTheRock = require("../../assets/images/theRock.png");

export default function DemoScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ceci est une demo</Text>

            {/* Image depuis internet */}

            <Text style={styles.subtitle}>Image (Avatar) depuis Internet</Text>
            <View style={styles.flexCentering}>
                <Image
                    source={{
                        uri: "https://themimolet.github.io/assets/images/mimo-pfp.png",
                    }}
                    style={styles.imageAvatar}
                />
            </View>

            {/* Image large depuis internet */}

            <Text style={styles.subtitle}>Image (large) depuis Internet</Text>
            <View style={styles.flexCentering}>
                <Image
                    source={{
                        uri: "https://i.redd.it/qwalc7oaqftg1.jpeg",
                    }}
                    style={styles.imageLarge}
                />
            </View>

            {/* Image depuis assets */}

            <Text style={styles.subtitle}>Image locale (require)</Text>
            <View style={styles.flexCentering}>
                <Image source={imagePenguin} style={styles.imageCarree} />
            </View>

            {/* Image 2 depuis assets */}

            <Text style={styles.subtitle}>The Rock (require)</Text>
            <View style={styles.flexCentering}>
                <Image source={imageTheRock} style={styles.imageCarree} />
            </View>

            {/* Liste */}

            <Text style={styles.subtitle}>Mettre en ligne avec Flexbox</Text>

            <View style={styles.flexContainer}>
                <View style={styles.flexContent}>
                    <Text>1</Text>
                </View>
                <View style={styles.flexContent}>
                    <Text>2</Text>
                </View>
                <View style={styles.flexContent}>
                    <Text>3</Text>
                </View>
            </View>

            {/* Centrer avec Flexbox */}

            <Text style={styles.subtitle}>Centrer avec Flexbox</Text>
            <View style={styles.flexCentering}>
                <Text>Je suis centré</Text>
            </View>
            <View style={{ height: 40 }} />
        </ScrollView>
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
        fontSize: 20,
        color: COLORS.gray,
        marginTop: 10,
        marginBottom: 10,
    },
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
    },
    flexCentering: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    flexContent: {
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 10,
    },
    // Images
    imageAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageCarree: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    imageLarge: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
});
