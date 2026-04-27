import { StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { COLORS } from "../constants/colors";

type ButtonProps = {
    label: string;
    onPress: () => void;
    color?: string;
    style?: StyleProp<ViewStyle>;
}

export default function Button({ label, onPress, color = COLORS.primary, style }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }, style]} onPress={onPress}>
            <Text style={styles.text}>{label}</Text> 
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
    }
})