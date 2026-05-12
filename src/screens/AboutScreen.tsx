import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const STORAGE_PHOTO_KEY = "aboutscreen:photoUri";
const STORAGE_POSITION_KEY = "aboutscreen:position";

export default function AboutScreen() {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);

  const [position, setPosition] = useState<any>(null);
  const [positionError, setPositionError] = useState<string | null>(null);
  const [positionLoading, setPositionLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadStored() {
      try {
        const storedPhoto = await AsyncStorage.getItem(STORAGE_PHOTO_KEY);
        if (storedPhoto !== null) {
          setPhotoUri(storedPhoto);
        }

        const storedPosition = await AsyncStorage.getItem(STORAGE_POSITION_KEY);
        if (storedPosition !== null) {
          const parsed = JSON.parse(storedPosition);
          setPosition(parsed);
        }
      } catch (e) {
        console.warn("AsyncStorage load failed", e);
      }
    }
    loadStored();
  }, []);

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
      await AsyncStorage.setItem(STORAGE_PHOTO_KEY, result.assets[0].uri);
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
      await AsyncStorage.setItem(STORAGE_PHOTO_KEY, result.assets[0].uri);
    }
  }

  async function getPosition() {
    setPositionError(null);

    const permission = await Location.requestForegroundPermissionsAsync();
    if (!permission.granted) {
      setPositionError("Permission refusée pour la localisation.");
      return;
    }

    setPositionLoading(true);
    try {
      const result = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      };
      setPosition(coords);
      await AsyncStorage.setItem(STORAGE_POSITION_KEY, JSON.stringify(coords));
    } catch (e) {
      setPositionError("Impossible de récupérer la position.");
    }
    setPositionLoading(false);
  }

  async function resetAll() {
    await AsyncStorage.removeItem(STORAGE_PHOTO_KEY);
    await AsyncStorage.removeItem(STORAGE_POSITION_KEY);
    setPhotoUri(null);
    setPosition(null);
    setPhotoError(null);
    setPositionError(null);
  }

  const content = (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.photoCircle}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.photo} resizeMode="cover" />
          ) : (
            <Text style={styles.photoPlaceholder}>📷</Text>
          )}
        </View>

        <View style={styles.photoButtonsRow}>
          <View style={styles.photoButtonWrapper}>
            <Button label="📸 Galerie" onPress={pickImage} />
          </View>
          <View style={styles.photoButtonWrapper}>
            <Button label="📷 Caméra" onPress={takePhoto} />
          </View>
        </View>
        {photoError && <Text style={styles.errorText}>{photoError}</Text>}

        <View style={styles.emojiCircle}>
          <Text style={styles.emoji}>📱</Text>
        </View>

        <Text style={styles.name}>Kenan</Text>
        <Text style={styles.group}>B2 Informatique — YNOV Strasbourg</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          Mini-app de consultation d'articles construite en cours de React Native.
          Données chargées depuis l'API publique JSONPlaceholder.
        </Text>

        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>⚛️ React Native</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎓 YNOV</Text>
          </View>
        </View>

        <View style={styles.positionCard}>
          <Text style={styles.positionTitle}>📍 Ma position</Text>

          {positionLoading ? (
            <ActivityIndicator color={COLORS.primary} style={styles.positionLoader} />
          ) : position ? (
            <View>
              <Text style={styles.positionLine}>
                Latitude : {position.latitude.toFixed(4)}
              </Text>
              <Text style={styles.positionLine}>
                Longitude : {position.longitude.toFixed(4)}
              </Text>
            </View>
          ) : (
            <Text style={styles.positionEmpty}>Aucune position détectée</Text>
          )}

          <Button label="📍 Obtenir ma position" onPress={getPosition} />
          {positionError && <Text style={styles.errorText}>{positionError}</Text>}
        </View>

        <View style={styles.resetWrapper}>
          <Button label="🗑️ Réinitialiser" onPress={resetAll} color={COLORS.secondary} />
        </View>
      </View>
    </ScrollView>
  );

  if (photoUri) {
    return (
      <ImageBackground
        source={{ uri: photoUri }}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>{content}</View>
      </ImageBackground>
    );
  }

  return <View style={styles.background}>{content}</View>;
}






// POUR AFFICHER DES IMAGES DEPUIS L'APPAREILs
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

//POUR LE STYLE DE PHOTO CIRCLE (afficher les images appareil)

        <View style={styles.photoCircle}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.photo} resizeMode="cover" />
          ) : (
            <Text style={styles.photoPlaceholder}>📷</Text>
          )}
        </View>

        <View style={styles.photoButtonsRow}>
          <View style={styles.photoButtonWrapper}>
            <Button label="📸 Galerie" onPress={pickImage} />
          </View>
          <View style={styles.photoButtonWrapper}>
            <Button label="📷 Caméra" onPress={takePhoto} />
          </View>
        </View>
        {photoError && <Text style={styles.errorText}>{photoError}</Text>}

 






const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(245, 245, 245, 0.85)",
  },
  scroll: {
    flex: 1,
  },
  container: {
    padding: 24,
    alignItems: "center",
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  photoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  photoPlaceholder: {
    fontSize: 40,
    color: COLORS.gray,
  },
  photoButtonsRow: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  photoButtonWrapper: {
    flex: 1,
  },
  emojiCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  emoji: {
    fontSize: 56,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 4,
  },
  group: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    width: "60%",
    backgroundColor: COLORS.black,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  tagsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  tag: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.black,
  },
  positionCard: {
    width: "100%",
    backgroundColor: COLORS.background,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  positionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 10,
  },
  positionEmpty: {
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: 8,
    fontStyle: "italic",
  },
  positionLine: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 4,
    textAlign: "center",
  },
  positionLoader: {
    marginVertical: 12,
  },
  errorText: {
    color: COLORS.secondary,
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  resetWrapper: {
    marginTop: 20,
    width: "100%",
  },
});
