import { Text, View, StyleSheet} from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
    navigation: any;
}


export default function HomeScreen({navigation}: Props) {
    return (
        <View>
            <Text>Accueil 🏠</Text>
            <Button label="Confirmer" onPress={() => undefined} />
            <Button label="Voir le détail" onPress={() => navigation.navigate("Detail")} color={COLORS.primary} />
            <Button label="Voir la démonstration" onPress={() => navigation.navigate("Demo")} color={COLORS.secondary} />
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
