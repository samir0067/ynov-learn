import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

interface Article {
  id: number;
  title: string;
  body: string;
}

export default function ArticlesScreen({ navigation }: any) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      // Simulation d'un délai pour voir le loader (optionnel)
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Impossible de récupérer les articles.');
      
      const data = await response.json();
      setArticles(data.slice(0, 20)); // On prend les 20 premiers pour l'exemple
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.infoText}>Chargement des actualités...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorEmoji}>⚠️</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchArticles}>
          <Text style={styles.retryText}>Réessayer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ArticleDetail', { article: item })}
          >
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text style={styles.articleExcerpt} numberOfLines={2}>{item.body}</Text>
            <Text style={styles.more}>Lire la suite →</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  list: { padding: 16 },
  infoText: { marginTop: 12, color: COLORS.gray },
  errorEmoji: { fontSize: 50, marginBottom: 10 },
  errorText: { color: '#E74C3C', textAlign: 'center', marginBottom: 20 },
  retryButton: { backgroundColor: COLORS.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  retryText: { color: COLORS.white, fontWeight: 'bold' },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  articleExcerpt: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 20,
  },
  more: { color: COLORS.primary, marginTop: 10, fontWeight: '600' },
});