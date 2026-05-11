import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../constants/colors';

const ArticleDetailScreen = ({ route }: any) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.body}>{article.body}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { padding: 20, backgroundColor: COLORS.primary },
  title: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  content: { padding: 20 },
  body: { fontSize: 16, lineHeight: 24, color: '#333' }
});

export default ArticleDetailScreen;