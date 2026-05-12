import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';

export default function ArticlesScreen({ navigation }: any) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🌍 APPEL API
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setArticles(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // 1️⃣ GESTION DU LOADER (ActivityIndicator)
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Chargement des articles...</Text>
      </View>
    );
  }

  // 2️⃣ GESTION D'ERREUR PROPRE
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Oops ! Quelque chose a mal tourné. ❌</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchArticles}>
          <Text style={styles.retryText}>Réessayer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            // 3️⃣ ÉCRAN DE DÉTAIL AU CLIC (on passe l'objet article)
            onPress={() => navigation.navigate('Detail', { info: item, isFromAPI: true })}
          >
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text style={styles.articleSnippet} numberOfLines={2}>{item.body}</Text>
            <Text style={styles.readMore}>Lire la suite →</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  loadingText: { marginTop: 10, color: COLORS.gray },
  errorText: { fontSize: 16, color: 'red', textAlign: 'center', marginBottom: 20 },
  retryButton: { backgroundColor: COLORS.primary, padding: 12, borderRadius: 8 },
  retryText: { color: '#FFF', fontWeight: 'bold' },
  card: { backgroundColor: '#FFF', padding: 16, marginHorizontal: 16, marginTop: 12, borderRadius: 12, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 } },
  articleTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.black, textTransform: 'capitalize', marginBottom: 6 },
  articleSnippet: { fontSize: 14, color: COLORS.gray, lineHeight: 20 },
  readMore: { marginTop: 10, color: COLORS.primary, fontWeight: 'bold' }
});