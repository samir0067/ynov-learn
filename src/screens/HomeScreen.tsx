import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const banner = require("../../assets/images/strasbourg.jpg");

type HomeScreenProps = {
    navigation: any;
};

const DEMO_ITEMS = [
    { id: "1", label: "Images", screen: "Images", color: "skyblue" },
    { id: "2", label: "Profil", screen: "Profile", color: "#e97bb4" },
    { id: "3", label: "Flatlist", screen: "FlatListDemo", color: "#f68280" },
    { id: "4", label: "Grid", screen: "GridDemo", color: "orange" },
    { id: "5", label: "Catalogue", screen: "Catalog", color: "#5eed67" },
    { id: "6", label: "Compteur", screen: "Compteur", color: "yellow" },
    { id: "7", label: "Chrono", screen: "Chrono", color: "cyan" },
    { id: "8", label: "Formulaire", screen: "Form", color: "#d087f0" },
    { id: "9", label: "Image Picker", screen: "ImagePickerDemo", color: "#2ECC71" },
];

function NavigationItem({
    label,
    onPress,
    color,
}: {
    label: string;
    onPress: () => void;
    color: string;
}) {
    return <Button label={label} color={color} onPress={onPress} />;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <ScrollView style={styles.container}>
            <Image source={banner} style={styles.cover} />

            <View style={{ paddingHorizontal: 20, marginBottom: 12 }}>
                <Text style={styles.title}>Démos</Text>
                <View style={styles.demoNav}>
                    {DEMO_ITEMS.map((item) => (
                        <NavigationItem
                            key={item.id}
                            label={item.label}
                            color={item.color}
                            onPress={() => navigation.navigate(item.screen)}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    // ---- Header ----
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.black,
    },
    intro: {
        fontSize: 16,
        color: COLORS.black,
        textAlign: "center",
    },
    cover: {
        width: "100%",
        height: 200,
        marginBottom: 20,
    },
    center: {
        alignItems: "center",
        paddingHorizontal: 32,
        marginBottom: 32,
    },
    demoNav: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        padding: 5,
        gap: 12,
    },
    demoItem: {
        flexBasis: "30%",
        flexGrow: 1,
        padding: 8,
        textAlign: "center",
    },
});
