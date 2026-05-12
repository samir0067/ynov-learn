import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FlatListDemoScreen from "./src/screens/FlatListDemoScreen";
import GridDemoScreen from "./src/screens/GridDemoScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import CompteurScreen from "./src/screens/CompteurScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import ChronoScreen from "./src/screens/ChronoScreen";
import FormScreen from "./src/screens/FormScreen";
import CategoryDetailScreen from "./src/screens/CategoryDetailScreen";
import HomeHeaderTitle from "./src/components/HomeHeaderTitle";
import ImagePickerDemoScreen from "./src/screens/ImagePickerDemoScreen";
import { COLORS } from "./src/constants/colors";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStacks() {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    title: "Bonjour :D",
                    headerTitle: () => <HomeHeaderTitle />,
                    headerRight: () => (
                        <Image
                            source={require("./assets/images/squirrelpfp.jpg")}
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: 15,
                                borderWidth: 2,
                                borderColor: COLORS.primary,
                            }}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Images"
                component={ImagesScreen}
                options={{ title: "Images" }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Profils" }}
            />
            <Stack.Screen
                name="FlatListDemo"
                component={FlatListDemoScreen}
                options={{ title: "Flatlist" }}
            />
            <Stack.Screen
                name="GridDemo"
                component={GridDemoScreen}
                options={{ title: "Grid" }}
            />
            <Stack.Screen
                name="Catalog"
                component={CatalogScreen}
                options={{ title: "Catalogue" }}
            />
            <Stack.Screen
                name="Compteur"
                component={CompteurScreen}
                options={{ title: "Compteur" }}
            />
            <Stack.Screen
                name="Chrono"
                component={ChronoScreen}
                options={{ title: "Chronomètre" }}
            />
            <Stack.Screen
                name="Form"
                component={FormScreen}
                options={{ title: "Formulaire" }}
            />
            <Stack.Screen
                name="ImagePickerDemo"
                component={ImagePickerDemoScreen}
                options={{ title: "Image Picker" }}
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
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            size={28}
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Grid"
                component={GridDemoScreen}
                options={{
                    title: "Grille",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            size={28}
                            name={focused ? "view-grid" : "view-grid-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    title: "À propos",
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                            size={28}
                            name={
                                focused ? "information" : "information-outline"
                            }
                            color={color}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
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
