import { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

// ------------------------------------------------------------
// Constantes
// ------------------------------------------------------------

const MAX_LENGTH = 20;
const WARNING_THRESHOLD = 18;
const IDLE_DELAY_MS = 5000;

type Props = {
    navigation: any;
};

export default function FormScreen({ navigation }: Props) {
    // ------------------------------------------------------------
    // State
    // ------------------------------------------------------------
    const [name, setName] = useState<string>("");
    const [resetCount, setResetCount] = useState<number>(0);
    const [isIdle, setIsIdle] = useState<boolean>(false);

    // ------------------------------------------------------------
    // Valeurs dérivées
    // ------------------------------------------------------------
    const trimmed = name.trim();
    const isEmpty = trimmed.length === 0;
    const isSamir = trimmed.toLowerCase() === "samir";
    const counterColor = name.length > WARNING_THRESHOLD ? COLORS.warning : COLORS.gray;

    // ------------------------------------------------------------
    // Effet : timer d'inactivité (réactif sur la valeur du champ)
    // ------------------------------------------------------------
    useEffect(() => {
        setIsIdle(false);
        if (isEmpty) return;
        const id = setTimeout(() => setIsIdle(true), IDLE_DELAY_MS);
        return () => clearTimeout(id);
    }, [name]);

    // ------------------------------------------------------------
    // Handlers
    // ------------------------------------------------------------
    const handleReset = () => {
        setName("");
        setResetCount((prev) => prev + 1);
    };

    // ------------------------------------------------------------
    // Rendu
    // ------------------------------------------------------------
    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.title}>Mon Formulaire 📝</Text>
                <Text style={styles.subtitle}>
                    TextInput contrôlé, état dérivé et useEffect
                </Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Prénom</Text>

                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Tape ton prénom..."
                        placeholderTextColor={COLORS.gray}
                        maxLength={MAX_LENGTH}
                        autoCorrect={false}
                    />

                    <Text style={[styles.counter, { color: counterColor }]}>
                        {name.length} / {MAX_LENGTH}
                    </Text>

                    <View style={styles.greetingBox}>
                        {isEmpty ? (
                            <Text style={styles.greetingPlaceholder}>
                                Le message de bienvenue apparaîtra ici
                            </Text>
                        ) : isSamir ? (
                            <Text style={styles.greetingSamir}>👋 Yo Samir !</Text>
                        ) : (
                            <Text style={styles.greeting}>Bonjour {trimmed} 👋</Text>
                        )}
                    </View>

                    <Button
                        label="Reset"
                        onPress={handleReset}
                        color={COLORS.secondary}
                        disabled={isEmpty}
                    />
                </View>

                {isIdle && (
                    <View style={styles.idleBanner}>
                        <Text style={styles.idleText}>💤 Tu es toujours là ?</Text>
                    </View>
                )}

                <Text style={styles.resets}>Resets : {resetCount}</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

// ------------------------------------------------------------
// Styles
// ------------------------------------------------------------
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.black,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 4,
        marginBottom: 20,
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 4,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.black,
        backgroundColor: COLORS.background,
    },
    counter: {
        textAlign: "right",
        fontSize: 12,
        marginTop: 6,
        fontWeight: "600",
    },
    greetingBox: {
        marginTop: 16,
        marginBottom: 8,
        minHeight: 32,
        justifyContent: "center",
    },
    greeting: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    greetingSamir : {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.secondary,
    },
    greetingPlaceholder: {
        fontSize: 14,
        fontStyle: "italic",
        color: COLORS.gray,
    },
    idleBanner: {
        marginTop: 20,
        padding: 14,
        borderRadius: 14,
        backgroundColor: COLORS.warning,
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
    },
    idleText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "bold",
    },
    resets: {
        marginTop: 24,
        textAlign: "center",
        fontSize: 13,
        color: COLORS.gray,
    },
});
