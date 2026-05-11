import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📰</Text>
      <Text style={styles.title}>app articles</Text>
      <Text style={styles.subtitle}>
        Données venant de ce site:{'\n'}
        <Text style={styles.link}>jsonplaceholder.typicode.com</Text>
      </Text>
      <View style={styles.card}>
        <Row label="Stack" value="React Native + Expo" />
        <Row label="Navigation" value="Bottom Tabs + Stack" />
        <Row label="API" value="JSONPlaceholder" />
        <Row label="Articles" value="20 posts chargés" />
      </View>
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F4F6FB',
    alignItems: 'center', justifyContent: 'center', padding: 32, gap: 12,
  },
  emoji: { fontSize: 56, marginBottom: 4 },
  title: { fontSize: 24, fontWeight: '800', color: '#1a1a2e' },
  subtitle: { fontSize: 13, color: '#888', textAlign: 'center', lineHeight: 20 },
  link: { color: '#6C63FF', fontWeight: '600' },
  card: {
    backgroundColor: '#fff', borderRadius: 16, padding: 20,
    width: '100%', marginTop: 8, gap: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07, shadowRadius: 8, elevation: 2,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  rowLabel: { fontSize: 13, color: '#888' },
  rowValue: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
});