import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type DetailScreenProps = {
    onBack: () => void
}

export default function DetailScreen({onBack}: DetailScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détail 📄</Text>
            <Button label="← Retour" onPress={onBack} color={COLORS.secondary} />
        </View>  
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 20,
  },
});