import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button';


export default function AboutScreen() {
  

  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);

    async function pickImage() {
    setPhotoError(null);

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setPhotoError("Permission refusée. Active la galerie dans les réglages.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  }

  async function takePhoto() {
    setPhotoError(null);

    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      setPhotoError("Permission refusée pour la caméra.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
              <View>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.photo} resizeMode="cover" />
          ) : (
            <Text>📷</Text>
          )}
        </View>

        <Button label="📸 Choisir une photo" onPress={pickImage} />
        {photoError && <Text>{photoError}</Text>}
      <Text style={styles.emoji}>📰</Text>
      <Text style={styles.title}>app articles</Text>
      <Text style={styles.subtitle}>
        Données venant de ce site:{'\n'}
        <Text style={styles.link}>jsonplaceholder.typicode.com</Text>
      </Text>
      <View style={styles.photoButtonWrapper}>
            <Button label="📷 Caméra" onPress={takePhoto} />
          </View>
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
  photo: { width: 120, height: 120, borderRadius: 12, marginBottom: 16 },
  photoButtonWrapper: { marginTop: 16 },
});

