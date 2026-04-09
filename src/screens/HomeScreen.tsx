import { Text, View, StyleSheet} from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
    navigation: any;
}


export default function HomeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue 🏠</Text>
            <Text style={styles.subtitle}>Ceci est l'écran d'accueil</Text>
            <Button label="Aller au détail" onPress={() => navigation.navigate("Detail")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        color: COLORS.black,
    },
    subtitle: {        
        fontSize: 16,
        color: COLORS.gray,
        marginBottom: 32,
    },
});
