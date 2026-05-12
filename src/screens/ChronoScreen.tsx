import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

export default function ChronoScreen() {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);

    return (
        <View style={style.container}>
            <Text style={style.status}>{running ? "En cours..." : "Arrêté"}</Text>
            <View style={style.chronoContainer}>
                <View style={style.round}>
                    <Text style={style.seconds}>{seconds}</Text>
                    <Text style={style.secondsLabel}>secondes</Text>
                </View>
            </View>
            <View style={style.controles}>
                <Button
                    color={running ? "tomato" : "lime"}
                    label={running ? "Arrêter" : "Démarrer"}
                    onPress={() => setRunning(!running)}
                />
                <Button
                    color="lightgray"
                    label="Réinitialiser"
                    onPress={() => setSeconds(0)}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    status: {
        fontSize: 18,
        color: COLORS.gray,
        marginBottom: 24,
    },
    chronoContainer: {
        alignItems: "center",
        textAlign: "center",
    },
    round: {
        width: 200,
        height: 200,
        margin: 32,
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: COLORS.white,
        padding: 30,
        boxShadow: `0px 4px 12px ${COLORS.black}33`,
        justifyContent: "center",
    },
    seconds: {
        fontSize: 48,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    secondsLabel: {
        fontSize: 16,
        color: COLORS.gray,
        marginTop: 8,
    },
    controles: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
});
