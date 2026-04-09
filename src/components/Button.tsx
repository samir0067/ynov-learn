import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";

type ButtonProps = {
    label: string;
    onPress: () => void;
    color?: string;
}

export default function Button({ label, onPress, color = COLORS.primary}: ButtonProps) {
    return (
        <TouchableOpacity  style={[styles.button, {backgroundColor : color}]} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 12,
        borderWidth: 0,
        alignItems: "center",
        marginVertical: 8,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    text: {
        color: COLORS.black,
    }
})