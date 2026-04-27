import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { useState } from "react";

export default function CounterScreen() {

    const [count, setCount] = useState<number>(0);

    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}> Mon Compteur 🔢</Text>
            <Text style={styles.value}> {count} </Text>
            <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.secondary }]} onPress={() => setCount(count - 1)}>
                    <Text style={styles.buttonText}>-1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.gray }]} onPress={() => setCount(0)}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 24
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 16
    },
    value: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 32
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 16
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    }   
});