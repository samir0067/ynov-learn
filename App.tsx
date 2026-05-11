import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FlatListDemoScreen from "./src/screens/FlatListDemoScreen";
import GridDemoScreen from "./src/screens/GridDemoScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import CompteurScreen from "./src/screens/CompteurScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import ChronoScreen from "./src/screens/ChronoScreen";
import FormScreen from "./src/screens/FormScreen";
import CategoryDetailScreen from "./src/screens/CategoryDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStacks() {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    title: "Accueil",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: "Détail" }}
            />
            <Stack.Screen
                name="Images"
                component={ImagesScreen}
                options={{ title: "Démo Images" }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Démo Profil" }}
            />
            <Stack.Screen
                name="FlatListDemo"
                component={FlatListDemoScreen}
                options={{ title: "Démo Flatlist" }}
            />
            <Stack.Screen
                name="GridDemo"
                component={GridDemoScreen}
                options={{ title: "Démo Grid" }}
            />
            <Stack.Screen
                name="Catalog"
                component={CatalogScreen}
                options={{ title: "Démo Catalogue" }}
            />
            <Stack.Screen
                name="Compteur"
                component={CompteurScreen}
                options={{ title: "Démo Compteur" }}
            />
            <Stack.Screen
                name="Chrono"
                component={ChronoScreen}
                options={{ title: "Démo Chrono" }}
            />
            <Stack.Screen
                name="Form"
                component={FormScreen}
                options={{ title: "Formulaire ✍️" }}
            />
            <Stack.Screen
                name="CategoryDetail"
                component={CategoryDetailScreen}
            />
        </Stack.Navigator>
    );
}

function NavTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                animation: "shift",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStacks}
                options={{
                    title: "Accueil",
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Grid"
                component={GridDemoScreen}
                options={{
                    title: "Grille",
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailScreen}
                options={{
                    title: "Détails",
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavTabs />
        </NavigationContainer>
    );
}
