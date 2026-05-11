import { View, StyleSheet, Image, Text, Linking } from "react-native";
import { useEffect } from "react";
import Button from "../components/Button";

export default function ArticleScreen({
    route,
    navigation,
}: {
    route: any;
    navigation: any;
}) {
    let params = route.params;

    useEffect(() => {
        navigation.setOptions({ title: params.title });
    }, [navigation, params.title]);

    return (
        <View style={[styles.container, { backgroundColor: params.color }]}>
            <View style={styles.contentBox}>
                <Text style={styles.title}>{params.title}</Text>
                <Text style={styles.source}>De {params.source}</Text>
                <Text style={styles.url} onPress={() => Linking.openURL(params.url)}>
                    Ouvrir l'article dans le navigateur
                </Text>
                <Text style={styles.keywords}>Mots-clés: {params.keywords.join(", ")}</Text>
                <Text style={styles.body}>{params.body}</Text>
                <Button
                    label="Retour"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentBox: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        gap: 16,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    body: {
        fontSize: 16,
        textAlign: "center",
    },
    author: {
        fontSize: 14,
        color: "gray",
    },
    source: {
        fontSize: 14,
        color: "gray",
    },
    url: {
        fontSize: 14,
        color: "blue",
        textDecorationLine: "underline",
    },
    keywords: {
        fontSize: 14,
        color: "gray",
    },
});
