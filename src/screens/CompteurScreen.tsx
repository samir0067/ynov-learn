import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

export default function CompteurScreen() {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <View style={{ height: 40 }} />
            <Text style={style.title}>Mon Compteur</Text>
            <View style={{ height: 20 }} />
            <Text style={style.counter}>{counter}</Text>
            <View style={{ height: 20 }} />
            <View style={style.controles}>
                <Button
                    label="+1"
                    color="lime"
                    onPress={() => setCounter(counter + 1)}
                />
                <Button
                    label="-1"
                    color="tomato"
                    onPress={() => setCounter(counter - 1)}
                />
                <Button label="Reset" color="lightgray" onPress={() => setCounter(0)} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    counter: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.primary,
    },
    controles: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
});