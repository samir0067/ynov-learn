import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

type ButtonProps = {
    label: string;
    onPress: () => void;
    color?: string;
    disabled?: boolean;
}

export default function Button({ label, onPress, color = COLORS.primary, disabled = false }: ButtonProps) {
    const backgroundColor = disabled ? COLORS.gray : color;

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.85}
        >
            <Text style={[styles.text, disabled && styles.textDisabled]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        borderWidth: 0.5,
        alignItems: "center",
        marginVertical: 8,
    },
    text: {
        color: COLORS.black,
    },
    disabled: {
        opacity: 0.5,
    },
    textDisabled: {
        color: COLORS.white,
    },
})
