import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";


type ProfileScreenProps = {
    navigation: any;
};

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Profil 👤</Text>
            <Text style={styles.subtitle}>Page de profil de Samuel</Text>
            <Button
                label="← Retour"
                onPress={() => navigation.goBack()}
                color={COLORS.secondary}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.gray,
        marginBottom: 16,
    },
});