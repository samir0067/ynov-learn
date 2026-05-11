import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function CategoriePage() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Catégorie</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});