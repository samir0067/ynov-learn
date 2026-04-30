import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";

// type FormProps = {
//     value: string;
//     onChangeText: (text: string) => {
//         setSeconds(0);
//     };
// };

export default function FormScreen() {
    const [name, setName] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [resetCount, setResetCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <View style={style.container}>
            <Text style={style.title}>Comment tu t'appelles ?</Text>
            <TextInput
                value={name}
                style={style.input}
                onChangeText={(text) => {
                    setName(text);
                    setSeconds(0);
                }}
                maxLength={20}
                placeholder="Entrez votre prénom ici..."
            />
            <Text
                style={
                    name.length === 20
                        ? style.underInputMax20
                        : name.length >= 15
                            ? style.underInputOver15
                            : style.underInput
                }
            >
                {name.length}/20 caractères
            </Text>
            <Text style={style.text}>
                "
                {name
                    ? `Bonjour ${name} ! 👋`
                    : seconds >= 5
                        ? `T'es encore là ? 😴`
                        : "Bonjour, qui es-tu ? 🤔"}
                "
            </Text>
            <View style={style.controles}>
                <Button
                    label="Effacer"
                    color={name ? "tomato" : "lightgray"}
                    onPress={() => {
                        setName("");
                        setResetCount((prev) => prev + 1);
                    }}
                />
            </View>
            <Text>Nombre de resets : {resetCount}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 60,
        padding: 14,
        marginBottom: 12,
        backgroundColor: "white",
        fontStyle: "italic",
    },
    text: {
        fontSize: 18,
    },
    underInput: {
        fontSize: 14,
        color: "darkgray",
        marginBottom: 12,
    },
    underInputOver15: {
        color: "tomato",
    },
    underInputMax20: {
        color: "red",
        fontWeight: "bold",
    },
    controles: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
