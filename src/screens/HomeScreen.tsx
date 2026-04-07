import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
    navigation: any
}

export default function HomeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
<<<<<<< HEAD
            <Text style={styles.title}>Explosion</Text>
            <Text style={styles.subtitle}>Voyez l'éxplosion</Text>
            <Button label="BOOM" onPress={() => navigation.goBack()} color={COLORS.secondary} />
            <Button label="BOOOOM" onPress={() => navigation.goBack()} color={COLORS.secondary} />

=======
            <Text style={styles.title}>Bienvenue 🏠</Text>
            <Text style={styles.subtitle}>Ceci est l'écran d'accueil</Text>
            <Button label="Aller au détail" onPress={() => navigation.navigate("Detail")} />
            <Button 
                label="Voir la page démo" 
                color={COLORS.secondary}
                onPress={() => navigation.navigate("Demo")} 
            />
            <Button
                label="📱 Exercice : Profils" 
                onPress={() => navigation.navigate("Profile")} 
                color={COLORS.gray}
            />
>>>>>>> 26455d71d8ce5a17143eee1f59734e24dfbdf16d
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
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
        color: COLORS.gray,
        marginBottom: 32,
    }
})