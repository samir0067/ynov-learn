import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";
import Model3D from "../components/Model3D";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  navigation: any 
}

// On crée un tableau pour générer nos boutons dynamiquement et utiliser l'index pour le délai
const MENU_ITEMS = [
    { id: "1", label: "📄 Détail", route: "Detail" },
    { id: "2", label: "⚡ Démo", route: "Demo" },
    { id: "3", label: "👤 Profils", route: "Profiles" },
    { id: "4", label: "🍉 Fruits", route: "FlatListDemo" },
    { id: "5", label: "🔲 Grille", route: "GridDemo" },
    { id: "6", label: "🛍️ Catalogue", route: "Catalogue" },
    { id: "7", label: "🔄 State/Props", route: "StateVsProps" },
    { id: "8", label: "🔢 Compteur", route: "Compteur" },
    { id: "9", label: "⏱️ Chrono", route: "Chrono" },
    { id: "10", label: "✍️ Formulaire", route: "Form" },
];

export default function HomeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            {/* Arrière-plan 3D */}
            <Model3D />

            {/* Calque par-dessus la 3D pour l'interface */}
            <View style={styles.overlay}>
                <Animated.View style={styles.header} entering={FadeInDown.duration(800).springify()}>
                    <Text style={styles.title}>Explorez.</Text>
                </Animated.View>

                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                >
                    <View style={styles.buttonGrid}>
                        {MENU_ITEMS.map((item, index) => (
                            <Animated.View 
                                key={item.id} 
                                /* Déclenche une apparition glissée vers le haut, décalée de 100ms par élément */
                                entering={FadeInDown.delay(index * 100).springify().damping(14)}
                            >
                                <Button 
                                    label={item.label} 
                                    color="rgba(255, 255, 255, 0.12)" 
                                    style={styles.pillButton} 
                                    onPress={() => navigation.navigate(item.route as any)} 
                                />
                            </Animated.View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "#000000",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Effet sombre pour laisser ressortir la 3D et les particules
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 50,
        alignItems: "center",
    },
    title: {
        fontSize: 38,
        fontWeight: "300",
        textTransform: "uppercase",
        letterSpacing: 6,
        color: "#FFFFFF",
    },
    subtitle: {
        fontSize: 16,
        color: "#CCCCCC",
        fontWeight: "500",
        marginTop: 4,
    },
    scrollContainer: {
        paddingBottom: 40,
    },
    buttonGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "center",
    },
    pillButton: {
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
        marginVertical: 0,
        // Ombre douce pour la profondeur
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 0,
    }
})