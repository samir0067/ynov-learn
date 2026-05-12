import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { COLORS } from "../constants/colors";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import Button from "../components/Button";

type SouvenirType = {
    id: string;
    photoUri: string;
    latitude: number;
    longitude: number;
    date: Date;
};

export default function SouvenirsScreen() {
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [location, setLocation] = useState<Location.LocationObject | null>(
        null,
    );
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [photoError, setPhotoError] = useState<string | null>(null);
    const [souvenirs, setSouvenirs] = useState<SouvenirType[]>([]);

    let text = "Waiting...";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    async function createSouvenir() {
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

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        if (!result.canceled) {
            setPhotoUri(result.assets[0].uri);
        }

        if (result.canceled) {
            setPhotoError("Photo non prise.");
            return;
        }

        const newSouvenir: SouvenirType = {
            id: Date.now().toString(),
            photoUri: result.assets[0].uri,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            date: new Date(),
        };

        setSouvenirs((prev) => [newSouvenir, ...prev]);
    }

    async function removeSouvenir( souvenirID ){
    }

    return (
        <View style={styles.container}>
            {photoError && <Text style={styles.error}>{photoError}</Text>}

            {photoUri && (
                <Image source={{ uri: photoUri }} style={styles.imagePreview} />
            )}
            <Button
                label="Créer un souvenirs"
                color="white"
                onPress={createSouvenir}
            />
            <FlatList
                data={souvenirs}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>
                        Aucun souvenir pour l'instant
                    </Text>
                }
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.souvenirItem}>
                        <Image
                            source={{ uri: item.photoUri }}
                            style={styles.imagePreview}
                        />
                        <View style={styles.souvenirInfo}>
                            <Text>Coordonnées : </Text>
                            <Text>
                                {item.latitude},{item.longitude}
                            </Text>
                            <Text>Dates : </Text>
                            <Text>{item.date.toLocaleDateString()}</Text>
                            <Button label="Supprimer" onPress={() => {}} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.black,
        padding: 16,
        paddingBottom: 8,
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
    emptyText: {
        color: COLORS.gray,
        fontSize: 16,
        textAlign: "center",
        marginTop: 40,
    },
    souvenirItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        // Ombre
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    souvenirInfo: {
        flexDirection: "column",
    },
});
