import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import DemoScreen from "./src/screens/DemoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Accueil" }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ title: "Détail" }}
                />
                <Stack.Screen
                    name="Demo"
                    component={DemoScreen}
                    options={{ title: "Demo" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffa600",
        alignItems: "center",
        justifyContent: "center",
    },
});
