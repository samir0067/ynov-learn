import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native"; 
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
  navigation: any 
}

export default function DetailScreen({navigation}: Props) {
  const route = useRoute();
  const { info }: any = route.params || {}; 

  return (
    <View style={styles.container}>
      {/* 1. Logo dynamique : On garde ton cercle. Si c'est un article API, on met un emoji journal 📰 */}
      <View style={[styles.circle, { backgroundColor: info?.color || COLORS.primary }]}>
        <Text style={styles.bigEmoji}>{info?.emoji || "📰"}</Text>
      </View>

      {/* 2. Titre dynamique : Affiche 'name' (Grille) OU 'title' (API) */}
      <Text style={styles.title}>
        {info?.name || info?.title || "Détail 📄"}
      </Text>

      {/* 3. Contenu dynamique : Affiche 'description' (Grille) OU 'body' (API) */}
      {/* ScrollView ajouté au cas où le texte de l'article est très long */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitle}>
          {info?.body || info?.description || "Vous êtes sur l'écran de détail"}
        </Text>
      </ScrollView>

      {/* Ton bouton original est conservé strictement à l'identique */}
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
    padding: 20,
    paddingTop: 60, // Petit espace en haut pour respirer
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bigEmoji: {
    fontSize: 60,
  },
  title: {
    fontSize: 24, // Légèrement réduit pour que les longs titres API rentrent
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'capitalize', // Pour faire joli avec les titres API
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 32,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 22, // Meilleure lisibilité pour les longs textes
  }
});