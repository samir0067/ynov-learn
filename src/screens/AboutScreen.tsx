import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
      </View>
    </View>
  );
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
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
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
  emojiCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
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
});
