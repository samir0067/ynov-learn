import { useEffect, useState } from 'react';
import React, { use } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";


export default function ChronoScreen() {

    const [secondes, setSecondes] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setSecondes(prev => prev + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Mon chrono</Text>

            <View>
                
                <View style={styles.circle}>
                   <Text style={styles.value}>{secondes}</Text>
                   <Text style={styles.unit}>secondes</Text>
                </View>
            <Text style={styles.hint}>{isRunning ? "En cours" : "Arrêté"}</Text>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: isRunning ? COLORS.gray : COLORS.primary, borderColor: isRunning ? COLORS.gray : COLORS.primary } ]}
                onPress={() => setIsRunning(!isRunning)}
            >
                <Text style={styles.buttonText}>
                    {isRunning ? "Arrêter" : "Démarrer"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: COLORS.gray, borderColor: COLORS.gray } ]}
                onPress={() => setSecondes(0)}
            >
                <Text style={styles.buttonText}>Réinitialiser</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    value: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
        },
    button: {
        fontSize: 18,
        color: COLORS.primary,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        backgroundColor: COLORS.secondary,
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.primary,
 },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    unit: {
        fontSize: 18,
        color: COLORS.white,
    },
    hint: {
        fontSize: 16,
        color: COLORS.gray,
        marginTop: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 20,
        gap: 10,
    },
});