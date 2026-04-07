import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
  navigation: any 
}

export default function DetailScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détail 📄</Text>
            <Text style={styles.subtitle}>Vous êtes sur l'écran de détail</Text>
            <Button 
              label="← Retour" 
              onPress={() => navigation.goBack()} 
              color={COLORS.secondary} 
            />
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
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.gray,
    marginBottom: 32,
  }
});