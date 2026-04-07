import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
    navigation: any
}

export default function HomeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explosion</Text>
            <Text style={styles.subtitle}>Voyez l'éxplosion</Text>
            <Button label="BOOM" onPress={() => navigation.goBack()} color={COLORS.secondary} />
            <Button label="BOOOOM" onPress={() => navigation.goBack()} color={COLORS.secondary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
    },
    title:{
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