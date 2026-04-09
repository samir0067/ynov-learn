import { Text, View, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const banner = require("../../assets/images/strasbourg.jpg");

type HomeScreenProps = {
    navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Image source={banner} style={styles.cover} />
            <View style={styles.info}>
                <Text style={styles.title}>Bienvenue ! 🏠</Text>
                <Text style={styles.subtitle}>
                    Ceci est l'écran d'accueil
                </Text>
            </View>
            <View style={styles.buttons}>
                <Button
                    label="Voir la demo Images"
                    onPress={() => navigation.navigate("Demo")}
                />
                <Button
                    label="Voir la demo Profil"
                    onPress={() => navigation.navigate("Profile")}
                />
                <Button
                    label="Voir la demo Flatlist"
                    onPress={() => navigation.navigate("FlatListDemo")}
                />
                <Button
                    label="En savoir plus"
                    onPress={() => navigation.navigate("Detail")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: COLORS.gray,
        marginBottom: 32,
    },
    cover: {
        width: "100%",
        height: 200,
        marginBottom: 20,
    },
    info: {
        alignItems: "center",
        paddingHorizontal: 32,
        marginBottom: 32,
    },
    buttons: {
        width: "80%",
    },
});
