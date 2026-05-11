import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./src/screens/FeedScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ArticleScreen from "./src/screens/ArticleScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FeedStack() {
    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    title: "Fil d'actualité",
                }}
            />
            <Stack.Screen
                name="Article"
                component={ArticleScreen}
                options={{ title: "Article" }}
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
                component={FeedStack}
                options={{
                    title: "Fil d'actualité",
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    title: "À propos",
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
