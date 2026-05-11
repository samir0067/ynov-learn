import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Linking
} from "react-native";
import { COLORS } from "../constants/colors";
import { useEffect, useState } from "react";

function FeedItem({
    navigation,
    article
}: {
    navigation: any;
    article: any;
})  {
    return (
        <TouchableOpacity
            style={[styles.articleCard]}
            onPress={() =>
                navigation.navigate({
                    name: "Article",
                    screen: article.title,
                    params: {
                        title: article.title,
                        date: article.date,
                        source: article.source,
                        url: article.url,
                        keywords: article.keywords,
                    },
                })
            }
        >
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleDate}>{article.date}</Text>
            <Text style={styles.articleSource}>{article.source}</Text>
        </TouchableOpacity>
    );
}

export default function FeedScreen({ navigation }: { navigation: any }) {

    const [feed, setFeed] = useState([]);

    useEffect(() => {
    fetch('https://juliayxhuang.github.io/florida-man-api/api/headlines.json')
        .then(response => response.json())
        .then(data => setFeed(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const renderItem = ({ item }: { item: any }) => <FeedItem navigation={navigation} article={item} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={feed}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.articleList}
            />
            <View style={{ height: 40 }} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    articleList: {
        paddingBottom: 20,
    },
    articleCard: {
        padding: 15,
        marginBottom: 8,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        shadowRadius: 4,
    },
    articleDate: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: 4,
    },
    articleTitle: {
        fontSize: 16,
        color: COLORS.black,
    },
    articleSource: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: 4,
    },
});