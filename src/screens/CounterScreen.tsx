import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colors";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { useNavigation } from "@react-navigation/native";

export default function CatalogScreen() {

    const  [count, setCount] = useState<number>(0);
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Mon compteur</Text>
            <Text style={styles.value}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>Incrémenter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText}>Décrémenter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => setCount(0)}>
                <Text style={styles.buttonText}>Réinitialiser</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    value: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        fontSize: 18,
        color: COLORS.primary,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        backgroundColor: COLORS.secondary,
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.primary,
    },
    button2: {
        fontSize: 18,
        color: COLORS.secondary,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 5,
        backgroundColor: COLORS.secondary,
    },
    button3: {
        fontSize: 18,
        color: COLORS.gray,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 5,
        backgroundColor: COLORS.gray,
    },
});