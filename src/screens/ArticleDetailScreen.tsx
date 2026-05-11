import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

type Article = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Props = { route: { params: { article: Article } } };

export default function ArticleDetailScreen({ route }: Props) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Article #{article.id}</Text>
      </View>
      <Text style={styles.title}>{article.title}</Text>
      <View style={styles.divider} />
      <Text style={styles.meta}>✍️ Auteur · Utilisateur {article.userId}</Text>
      <Text style={styles.body}>{article.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F6FB' },
  content: { padding: 24, paddingBottom: 48 },
  badge: {
    alignSelf: 'flex-start', backgroundColor: '#EEF0FF',
    borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, marginBottom: 14,
  },
  badgeText: { color: '#6C63FF', fontSize: 12, fontWeight: '700' },
  title: {
    fontSize: 22, fontWeight: '800', color: '#1a1a2e',
    textTransform: 'capitalize', lineHeight: 30, marginBottom: 16,
  },
  divider: { height: 1, backgroundColor: '#E0E4F0', marginBottom: 12 },
  meta: { fontSize: 13, color: '#999', marginBottom: 20 },
  body: { fontSize: 15, color: '#444', lineHeight: 24 },
});