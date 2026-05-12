import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
  navigation: any;
  route: any;
};

export default function ArticleDetailScreen({ navigation, route }: Props) {
  // Valeurs par défaut si on arrive ici sans params
  const {
    id = 0,
    title = "Article",
    body = "Contenu indisponible.",
  } = route.params ?? {};

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Article #{id}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.divider} />

        <Text style={styles.body}>{body}</Text>

        <View style={styles.buttonContainer}>
          <Button
            label="← Retour à la liste"
            onPress={() => navigation.goBack()}
            color={COLORS.secondary}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    marginBottom: 16,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 12,
    textTransform: "capitalize",
    lineHeight: 30,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.background,
    marginBottom: 16,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.black,
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
  },
});
