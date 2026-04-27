import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";
import Model3D from "../components/Model3D";

type Props = {
  navigation: any 
}

export default function HomeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            {/* Arrière-plan 3D */}
            <Model3D />

            {/* Calque par-dessus la 3D pour l'interface */}
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Text style={styles.title}>Explorez.</Text>
                </View>

                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                >
                    <View style={styles.buttonGrid}>
                        <Button 
                            label="📄 Détail" 
                            color="#FFFFFF" 
                            style={styles.pillButton} 
                            onPress={() => navigation.navigate("Detail")} 
                        />
                        <Button 
                            label="⚡ Démo" 
                            color="#FFFFFF"
                            style={styles.pillButton}
                            onPress={() => navigation.navigate("Demo")} 
                        />
                        <Button 
                            label="👤 Profils" 
                            color="#FFFFFF" 
                            style={styles.pillButton} 
                            onPress={() => navigation.navigate("Profiles")} 
                        />
                        <Button 
                            label="🍉 Fruits" 
                            color="#FFFFFF"
                            style={styles.pillButton}
                            onPress={() => navigation.navigate("FlatListDemo")} 
                        />
                        <Button 
                            label="🔲 Grille" 
                            color="#FFFFFF"
                            style={styles.pillButton}
                            onPress={() => navigation.navigate("GridDemo")} 
                        />
                        <Button 
                            label="🛍️ Catalogue" 
                            color="#FFFFFF"
                            style={styles.pillButton}
                            onPress={() => navigation.navigate("Catalogue")} 
                        />
                        <Button 
                            label="🔄 State/Props" 
                            color="#FFFFFF"
                            style={styles.pillButton}
                            onPress={() => navigation.navigate("StateVsProps")} 
                        />
                        <Button 
                            label="🔢 Compteur" 
                            color="#FFFFFF"
                            style={styles.pillButton}
                            onPress={() => navigation.navigate("Compteur")} 
                        />
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
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 40,
    },
    title: {
        fontSize: 48,
        fontWeight: "900",
        color: "#FFFFFF",
        letterSpacing: -1.5,
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
        gap: 12,
    },
    pillButton: {
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 0,
        marginVertical: 0,
        // Ajout de l'effet "Glow" blanc
        shadowColor: "#FFFFFF",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 6, // Pour Android
    }
})