import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";
 
const MAX_LENGTH = 20;
const IDLE_DELAY = 5000;
 
export default function FormScreen() {
    const [name, setName] = useState("");
    const [resetCount, setResetCount] = useState(0);
    const [isIdle, setIsIdle] = useState(false);
 
    useEffect(() => {
        setIsIdle(false);
        const timer = setTimeout(() => setIsIdle(true), IDLE_DELAY);
        return () => clearTimeout(timer);
    }, [name]);
 
    const handleReset = () => {
        setName("");
        setResetCount((c) => c + 1);
    };
 
    const charCount = name.length;
    const isNearLimit = charCount > 15;
    const isAtLimit = charCount === MAX_LENGTH;
    const isEmpty = charCount === 0;
 
    const counterColor = isNearLimit ? COLORS.secondary ?? "#e74c3c" : COLORS.black;
    const counterWeight = isAtLimit ? "700" : "400";
 
    return (
        <View style={styles.container}>
 
            <Text style={styles.title}>Comment tu t'appelles ?</Text>
 
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Ton prénom..."
                    placeholderTextColor={COLORS.black + "66"}
                    maxLength={MAX_LENGTH}
                    autoCorrect={false}
                />
            </View>
 
            <Text style={[styles.counter, { color: counterColor, fontWeight: counterWeight }]}>
                {charCount} / {MAX_LENGTH} caractères
            </Text>
 
            <View style={styles.greetingBox}>
                <Text style={styles.greeting}>
                    {isEmpty ? "Bonjour, qui es-tu ? 🤔" : `Bonjour ${name} 👋`}
                </Text>
            </View>
 
            <View style={[styles.resetWrapper, isEmpty && styles.resetDisabled]}>
                <Button
                    label="Effacer 🗑️"
                    onPress={handleReset}
                    color={isEmpty ? "#aaa" : COLORS.secondary ?? "#e74c3c"}
                />
            </View>

            {resetCount > 0 && (
                <Text style={styles.resetCount}>
                    🔄 Réinitialisations : {resetCount}
                </Text>
            )}
 
            {isIdle && !isEmpty && (
                <Text style={styles.idleMessage}>T'es encore là ? 😴</Text>
            )}
 
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 28,
        gap: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        color: COLORS.black,
        textAlign: "center",
        marginBottom: 8,
    },
    inputWrapper: {
        width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: COLORS.secondary ?? "#8E44AD",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.black,
        width: "100%",
    },
    counter: {
        alignSelf: "flex-end",
        fontSize: 12,
        marginTop: -8,
    },
    greetingBox: {
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingHorizontal: 24,
        paddingVertical: 18,
        width: "100%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    greeting: {
        fontSize: 20,
        fontWeight: "600",
        color: COLORS.black,
        textAlign: "center",
    },
    resetWrapper: {
        width: "100%",
        marginTop: 4,
    },
    resetDisabled: {
        opacity: 0.4,
    },
    resetCount: {
        fontSize: 13,
        color: COLORS.black,
        opacity: 0.5,
    },
    idleMessage: {
        fontSize: 14,
        color: COLORS.black,
        opacity: 0.6,
        fontStyle: "italic",
    },
});