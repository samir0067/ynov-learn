import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

type HomeScreenProps = {
    navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accueil 🏠</Text>
            <Text style={styles.subtitle}>Application de Samuel</Text>
            <Button
                label="Aller à Détail"
                onPress={() => navigation.navigate("Detail")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.gray,
        marginBottom: 32,
    },
});
