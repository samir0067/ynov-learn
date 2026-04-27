import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import DemoScreen from "./src/screens/DemoScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FlatListDemoScreen from "./src/screens/FlatListDemoScreen";
import GridDemoScreen from "./src/screens/GridDemoScreen";
import CatalogScreen from "./src/screens/CatalogScreen";

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
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: "Profil" }}
                />
                <Stack.Screen
                    name="FlatListDemo"
                    component={FlatListDemoScreen}
                    options={{ title: "Demo Flatlist" }}
                />
                <Stack.Screen
                    name="GridDemo"
                    component={GridDemoScreen}
                    options={{ title: "Demo Grid" }}
                />
                <Stack.Screen
                    name="Catalog"
                    component={CatalogScreen}
                    options={{ title: "Demo Catalogue" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}