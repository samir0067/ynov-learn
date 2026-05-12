import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";
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
            <View style={style.inputContainer}>
                <Text style={style.title}>Qui es-tu ?</Text>
                <TextInput
                    value={name}
                    style={style.input}
                    placeholderTextColor="gray"
                    onChangeText={(text) => {
                        setName(text);
                        setSeconds(0);
                    }}
                    maxLength={20}
                    placeholder="Je suis..."
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
                    {name.length}/20
                </Text>
                <View style={style.center}>
                    <Text style={style.greeting}>
                        {name.toLowerCase() == "ta mère"
                            ? "Salut maman ! 👋"
                            : name.toLowerCase() == "ton père"
                              ? "nooooooon 😱"
                              : name
                                ? `Bonjour ${name} ! 👋`
                                : seconds >= 8
                                  ? `T'es encore là ? 😴`
                                  : "Bonjour, qui es-tu ? 🤔"}
                    </Text>
                    <Button
                        label="Effacer"
                        color={name ? "tomato" : "lightgray"}
                        disabled={!name}
                        onPress={() => {
                            setName("");
                            setResetCount((prev) => prev + 1);
                        }}
                    />
                </View>
            </View>
            <Text style={style.resetCount}>Resets : {resetCount}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 16,
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 16,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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
        backgroundColor: "rgb(250, 250, 250)",
        fontStyle: "italic",
    },
    greeting: {
        fontSize: 18,
        marginBottom: 12,
        textAlign: "center",
    },
    underInput: {
        fontSize: 14,
        color: COLORS.black,
        marginBottom: 12,
        textAlign: "right",
    },
    underInputOver15: {
        color: "tomato",
        textAlign: "right",
    },
    underInputMax20: {
        color: "red",
        fontWeight: "bold",
        textAlign: "right",
    },
    center: {
        flexDirection: "column",
        justifyContent: "center",
    },
    resetCount: {
        marginTop: 100,
        fontSize: 16,
        color: COLORS.gray,
        textAlign: "center",
    },
});
