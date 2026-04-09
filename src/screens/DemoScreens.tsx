import { Image, ScrollView, Text, View } from "react-native";

export default function DemoScreens() {
    return (
        <ScrollView>
            <Text>Demo Screens</Text>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Text> img</Text>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Text> img</Text>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Text> img</Text>
            <View>
                <View>
                    <Text>View imbriquée</Text>
                </View>
                <View>
                    <Text>View imbriquée</Text>
                </View>
                <View>
                    <Text>View imbriquée</Text>
                </View>
            </View>
            <Text>View</Text>
        </ScrollView>
    )
}


