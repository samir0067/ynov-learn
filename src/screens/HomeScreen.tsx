import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const banner = require("../../assets/images/strasbourg.jpg");

type HomeScreenProps = {
    navigation: any;
};

const NAVIGATION_ITEMS = [
    {
        id: "1",
        label: "Voir la demo Images",
        screen: "Demo",
    },
    {
        id: "2",
        label: "Voir la demo Profil",
        screen: "Profile",
    },
    {
        id: "3",
        label: "Voir la demo Flatlist",
        screen: "FlatListDemo",
    },
    {
        id: "4",
        label: "Voir la demo Grid",
        screen: "GridDemo",
    },
    {
        id: "5",
        label: "Voir la demo Catalogue",
        screen: "Catalog",
    },
    {
        id: "6",
        label: "En savoir plus",
        screen: "Detail",
    },
];

function NavigationItem({
    label,
    onPress,
}: {
    label: string;
    onPress: () => void;
}) {
    return <Button label={label} onPress={onPress} />;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Image source={banner} style={styles.cover} />
            <View style={styles.info}>
                <Text style={styles.title}>Bienvenue ! 🏠</Text>
                <Text style={styles.subtitle}>Ceci est l'écran d'accueil</Text>
            </View>
            <FlatList
                style={styles.navigation}
                data={NAVIGATION_ITEMS}
                renderItem={({ item }) => (
                    <NavigationItem
                        label={item.label}
                        onPress={() => navigation.navigate(item.screen)}
                    />
                )}
            />
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
    navigation: {
        width: "80%",
    },
});
