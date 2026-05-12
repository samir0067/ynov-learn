import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
  navigation: any;
  route: any;
};

// ------------------------------------------------------------
// Carte d'article (inline, voir doc pour la justification)
// ------------------------------------------------------------

function ArticleCard({ article, onPress }: { article: any; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>#{article.id}</Text>
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {article.title}
      </Text>
      <Text style={styles.cardPreview} numberOfLines={2}>
        {article.body}
      </Text>
      <Text style={styles.cardArrow}>Lire l'article →</Text>
    </TouchableOpacity>
  );
}

// ------------------------------------------------------------
// Écran principal
// ------------------------------------------------------------

export default function ArticlesListScreen({ navigation }: Props) {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchArticles() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Réponse réseau invalide");
      }
      const data = await response.json();
      setArticles(data);
    } catch (e) {
      setError("Impossible de charger les articles. Vérifie ta connexion.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Chargement des articles…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorEmoji}>📡</Text>
        <Text style={styles.errorTitle}>Oups, ça coince</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <View style={styles.errorButton}>
          <Button label="Réessayer" onPress={fetchArticles} />
        </View>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={articles}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ArticleCard
          article={item}
          onPress={() => navigation.navigate("ArticleDetail", { ...item })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    padding: 16,
  },
  centered: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  loadingText: {
    marginTop: 12,
    color: COLORS.gray,
    fontSize: 14,
  },
  errorEmoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: "center",
    marginBottom: 20,
  },
  errorButton: {
    width: "60%",
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 6,
    textTransform: "capitalize",
  },
  cardPreview: {
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: 10,
  },
  cardArrow: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
