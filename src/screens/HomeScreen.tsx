import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const banner = require("../../assets/images/strasbourg.jpg");
const avatar = require("../../assets/images/squirrelpfp.jpg");

type HomeScreenProps = {
    navigation: any;
};

const DEMO_ITEMS = [
    {
        id: "1",
        label: "Images",
        screen: "Images",
        color: "skyblue",
    },
    {
        id: "2",
        label: "Profil",
        screen: "Profile",
        color: "magenta",
    },
    {
        id: "3",
        label: "Flatlist",
        screen: "FlatListDemo",
        color: "tomato",
    },
    {
        id: "4",
        label: "Grid",
        screen: "GridDemo",
        color: "orange",
    },
    {
        id: "5",
        label: "Catalogue",
        screen: "Catalog",
        color: "lime",
    },
    {
        id: "6",
        label: "Compteur",
        screen: "Compteur",
        color: "yellow",
    },
    {
        id: "7",
        label: "Chrono",
        screen: "Chrono",
        color: "teal",
    },
    {
        id: "8",
        label: "Formulaire",
        screen: "Form",
        color: "#8E44AD",
    }
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
            {/* Header : salutation à gauche, avatar à droite - issu de la branche Samir */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Bonjour :D</Text>
                    <Text style={styles.subtitle}>
                        Bienvenue sur Ynov Learn !
                    </Text>
                </View>
                <Image
                    source={avatar}
                    style={styles.avatar}
                />
            </View>
            <Image source={banner} style={styles.cover} />

            {/* <View style={styles.center}>
                <Text style={styles.intro}></Text>
                                    <Text style={styles.subtitle}>
                        Ici vous allez pouvoir voir une sélection de démos qui
                        montrent ce qu'on est capables de faire !
                    </Text>
            </View> */}
            <View style={{ paddingHorizontal: 20, marginBottom: 12 }}>
                <Text style={styles.title}>Démos</Text>
                <View style={styles.demoNav}>
                    {DEMO_ITEMS.map((item) => (
                        <NavigationItem
                            key={item.id}
                            label={item.label}
                            style={styles.demoItem}
                            color={item.color}
                            onPress={() => navigation.navigate(item.screen)}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.center}>
                <Button
                    label="En savoir plus"
                    onPress={() => navigation.navigate("Detail")}
                />
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
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
