import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Existing screens
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlatListDemoScreen from './src/screens/FlatLisDemoScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ChronoScreen from './src/screens/ChronoScreen';
import CounterScreen from './src/screens/CounterScreen';
import FormScreen from './src/screens/FormScreen';

// New Articles screens
import ArticlesListScreen from './src/screens/ArticlesListScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import { COLORS } from './src/constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: "Mon Dashboard", headerStyle: { backgroundColor: "#1A1A2E" }, headerTintColor: "#FFF" }} />
      <Stack.Screen name="Demo" component={DemoScreen} options={{ title: "Démo composants" }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profils" }} />
      <Stack.Screen name="FlatListDemo" component={FlatListDemoScreen} options={{ title: "Demo FlatList" }} />
      <Stack.Screen name="GridDemo" component={GridDemoScreen} options={{ title: "Demo Grille" }} />
      <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: "Boutique Tech" }} />
      <Stack.Screen name="Chrono" component={ChronoScreen} options={{ title: "Mon Chrono" }} />
      <Stack.Screen name="Counter" component={CounterScreen} options={{ title: "Mon Compteur" }} />
      <Stack.Screen name="Form" component={FormScreen} options={{ title: "Formulaire ✍️" }} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => {
          const params = route.params as any;
          return {
            title: params?.name ?? "Détail",
            headerStyle: { backgroundColor: params?.color ?? "#000" },
            headerTintColor: "#FFF",
          };
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack() {
  return (
    <Stack.Navigator initialRouteName="ArticlesList">
      <Stack.Screen 
        name="ArticlesList" 
        component={ArticlesListScreen} 
        options={{ title: "Actualités" }} 
      />
      <Stack.Screen 
        name="ArticleDetail" 
        component={ArticleDetailScreen} 
        options={({ route }) => {
          const params = route.params as any;
          return {
            title: params?.article?.title ?? "Article",
          };
        }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          }
        }}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack} 
          options={{ 
            title: "Accueil",
            tabBarIcon: () => <></>, // Optionally insert icons here if @expo/vector-icons is used, left blank for simplicity if no icons were asked.
          }} 
        />
        <Tab.Screen 
          name="ArticlesTab" 
          component={ArticlesStack} 
          options={{ 
            title: "Articles",
            tabBarIcon: () => <></>,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}