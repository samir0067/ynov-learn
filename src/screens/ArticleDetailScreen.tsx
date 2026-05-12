import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS } from '../constants/colors';

type Props = {
  route: any;
};

export default function ArticleDetailScreen({ route }: Props) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: article.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{article.title}</Text>
        <View style={styles.divider} />
        <Text style={styles.body}>{article.body}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 250,
  },
  details: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    minHeight: 500,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 16,
    textTransform: 'capitalize',
    lineHeight: 32,
  },
  divider: {
    height: 3,
    backgroundColor: COLORS.primary,
    width: 60,
    marginBottom: 20,
    borderRadius: 2,
  },
  body: {
    fontSize: 16,
    color: COLORS.gray,
    lineHeight: 24,
  },
});
