import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../constants/colors';
import Button from '../components/Button';

export default function ArticleDetailScreen({ route, navigation }: any) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.id}>Article #{article.id}</Text>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.body}>{article.body}</Text>
        
        <View style={styles.footer}>
          <Button label="Retour à la liste" onPress={() => navigation.goBack()} color={COLORS.primary} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.white },
  header: {
    padding: 24,
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  id: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.black,
    textTransform: 'capitalize',
  },
  content: { padding: 24 },
  body: { fontSize: 18, color: '#444', lineHeight: 28, marginBottom: 40 },
  footer: { marginTop: 20 },
});