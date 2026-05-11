import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

export default function ChronoScreen() {
    // Stocke le temps en millisecondes
    const [time, setTime] = useState(0);
    // Savoir si le chrono est en train de tourner ou non
    const [isRunning, setIsRunning] = useState(false);

    // Se déclenche à chaque fois que `isRunning` change
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        
        if (isRunning) {
            // Ajoute 10ms au temps toutes les 10ms
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        
        // Nettoyage de l'intervalle quand on l'arrête ou quitte l'écran
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    // Calculs pour l'affichage au format MM:SS:ms
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chronomètre</Text>
            
            <Text style={styles.timer}>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")},
                {milliseconds.toString().padStart(2, "0")}
            </Text>

            <View style={styles.controls}>
                {!isRunning ? (
                    <Button label="Démarrer" color="lime" onPress={() => setIsRunning(true)} />
                ) : (
                    <Button label="Arrêter" color="tomato" onPress={() => setIsRunning(false)} />
                )}
                <Button label="Reset" color="lightgray" onPress={() => { setIsRunning(false); setTime(0); }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    timer: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 30,
        fontVariant: ["tabular-nums"], // Évite que les chiffres "sautent" à l'affichage
    },
    controls: {
        flexDirection: "row",
        gap: 12,
    },
});