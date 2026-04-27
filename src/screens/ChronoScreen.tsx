import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function ChronoScreen() {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const id = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(id);
    }, [isRunning]);

    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}> Mon Chrono ⏱️</Text>
            <View>
                <Text style={styles.value}>{seconds}</Text>
                <View style={styles.circle}>
                    <Text style={styles.value}>{seconds}</Text>
                    <Text style={styles.unit}>secondes</Text>
                </View>
            </View>
            <Text style={styles.hint}>{isRunning ? "Le chrono tourne" : "En pause"}</Text>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: isRunning ? COLORS.secondary : COLORS.primary }]} 
                onPress={() => setIsRunning(!isRunning)}
            >
                <Text style={styles.buttonText}>
                    {isRunning ? '⏸️ Pause' : '▶️ Reprendre'}
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: COLORS.gray }]} 
                onPress={() => setSeconds(0)}
            >
                <Text style={styles.buttonText}>🔄 Reset</Text>
            </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 16,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 110,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: COLORS.primary,
        paddingHorizontal: 24,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
    },
    value: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    unit: {
        fontSize: 16,
        color: COLORS.gray,
        marginTop: 4,
    },
    hint: {
        marginTop: 24,
        fontSize: 14,
        color: COLORS.gray,
    },
    button: {
    marginTop: 24,
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});