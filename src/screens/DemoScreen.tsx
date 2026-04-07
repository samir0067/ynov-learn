import { Image, Text, ScrollView} from "react-native";

export default function DemoScreen() {
    return(
    <ScrollView>
        <Text>BOOM1</Text>
        <Image source={{uri: "https://fr.freepik.com/photos-vecteurs-libre/explosion"}} />
    </ScrollView>
    )
}