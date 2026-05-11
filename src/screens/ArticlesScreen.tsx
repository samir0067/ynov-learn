import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  StyleSheet, ActivityIndicator, Image,
} from 'react-native';

type Article = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Props = { navigation: any };

export default function ArticlesScreen({ navigation }: Props) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((data: Article[]) => setArticles(data.slice(0, 20)))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Chargement des articles…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorEmoji}>😵</Text>
        <Text style={styles.errorTitle}>Une erreur est survenue</Text>
        <Text style={styles.errorMsg}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.getParent()?.navigate('ArticleDetail', { article: item })}
        >
          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeText}>#{item.id}</Text>
          </View>
          <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.cardBody} numberOfLines={2}>{item.body}</Text>
          <Text style={styles.cardHint}>Lire la suite →</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#F4F6FB', gap: 12, padding: 32,
  },
  loadingText: { color: '#888', fontSize: 14, marginTop: 8 },
  errorEmoji: { fontSize: 48 },
  errorTitle: { fontSize: 18, fontWeight: '700', color: '#222' },
  errorMsg: { fontSize: 13, color: '#e74c3c', textAlign: 'center' },
  list: { padding: 16, backgroundColor: '#F4F6FB', paddingBottom: 32 },
  separator: { height: 12 },
  card: {
    backgroundColor: '#fff', borderRadius: 16, padding: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07, shadowRadius: 8, elevation: 3,
  },
  cardBadge: {
    alignSelf: 'flex-start', backgroundColor: '#EEF0FF',
    borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, marginBottom: 8,
  },
  cardBadgeText: { color: '#6C63FF', fontSize: 11, fontWeight: '700' },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#1a1a2e', marginBottom: 6, textTransform: 'capitalize' },
  cardBody: { fontSize: 13, color: '#666', lineHeight: 19, marginBottom: 10 },
  cardHint: { fontSize: 12, color: '#6C63FF', fontWeight: '600' },
});