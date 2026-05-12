import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { COLORS } from '../constants/colors';
import Button from '../components/Button';

interface Souvenir {
  id: number;
  photoUri: string;
  latitude: number;
  longitude: number;
  date: string;
}

const STORAGE_KEY = 'souvenirs:list';

export default function SouvenirsScreen() {
  const [souvenirs, setSouvenirs] = useState<Souvenir[]>([]);

  useEffect(() => {
    loadSouvenirs();
  }, []);

  const loadSouvenirs = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue !== null) {
        setSouvenirs(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error("Erreur de chargement", e);
    }
  };

  const saveSouvenirs = async (newList: Souvenir[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
      setSouvenirs(newList);
    } catch (e) {
      console.error("Erreur de sauvegarde", e);
    }
  };

  const addSouvenir = async () => {
    const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
    const locationPerm = await Location.requestForegroundPermissionsAsync();

    if (!cameraPerm.granted || !locationPerm.granted) {
      Alert.alert("Permissions requises", "L'accès à la caméra et à la position est nécessaire.");
      return;
    }

    const photo = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (photo.canceled) return;

    const location = await Location.getCurrentPositionAsync({});
    
    const newSouvenir: Souvenir = {
      id: Date.now(),
      photoUri: photo.assets[0].uri,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      date: new Date().toLocaleDateString(),
    };

    saveSouvenirs([newSouvenir, ...souvenirs]);
  };

  const deleteSouvenir = (id: number) => {
    const filtered = souvenirs.filter(s => s.id !== id);
    saveSouvenirs(filtered);
  };

  const clearAll = () => {
    saveSouvenirs([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button label="📸 Ajouter un souvenir" onPress={addSouvenir} />
        {souvenirs.length > 0 && (
          <Text style={styles.counter}>Tu as {souvenirs.length} souvenirs</Text>
        )}
      </View>

      <FlatList
        data={souvenirs}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>Aucun souvenir pour l'instant</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.photoUri }} style={styles.photo} />
            <View style={styles.info}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.coords}>
                Lat: {item.latitude.toFixed(4)} / Lon: {item.longitude.toFixed(4)}
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteSouvenir(item.id)} style={styles.deleteBtn}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      {souvenirs.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearAll}>
          <Text style={styles.clearText}>Tout effacer 🗑️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: 20, alignItems: 'center' },
  counter: { marginTop: 10, color: COLORS.gray, fontWeight: '600' },
  list: { padding: 16, paddingBottom: 100 },
  emptyText: { textAlign: 'center', marginTop: 50, color: COLORS.gray, fontSize: 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  photo: { width: 80, height: 80, borderRadius: 10 },
  info: { flex: 1, marginLeft: 15 },
  date: { fontSize: 16, fontWeight: 'bold', color: COLORS.black },
  coords: { fontSize: 12, color: COLORS.gray, marginTop: 4 },
  deleteBtn: { padding: 10 },
  deleteText: { fontSize: 18 },
  clearBtn: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 15,
  },
  clearText: { color: '#E74C3C', fontWeight: 'bold', fontSize: 16 },
});