import { Text, View } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

export default function HomeScreen() {
    return (
        <View>
            <Text>Accueil 🏠</Text>
            <Button label="Confirmer" onPress={() => undefined} />
            <Button label="Annuler" color={COLORS.white} onPress={() => undefined} />
            <Button label="Envoyer" color={COLORS.secondary} onPress={() => undefined} />
            <Button label="Retour" color="#cebc1d" onPress={() => undefined} />
            <Button label="Suivant" color="#70cbe6" onPress={() => undefined} />
        </View>
    )
}