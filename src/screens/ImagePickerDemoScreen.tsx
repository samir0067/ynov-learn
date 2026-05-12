import { useState } from "react";
import { COLORS } from "../constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/Button";

export default function ImagePickerDemoScreen() {
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [photoError, setPhotoError] = useState<string | null>(null);

    async function pickImage() {
        setPhotoError(null);

        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            setPhotoError(
                "Permission refusée. Active la galerie dans les réglages.",
            );
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
            <View style={styles.buttonRow}>
                <Button label="Choisir une image" onPress={pickImage} />
                <Button label="Prendre une photo" onPress={takePhoto} />
            </View>

            {photoError && <Text style={styles.error}>{photoError}</Text>}

            {photoUri && (
                <Image source={{ uri: photoUri }} style={styles.imagePreview} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 20,
    },
    error: {
        color: COLORS.error,
        marginBottom: 20,
    },
    imagePreview: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});
