import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import de tes écrans existants
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlatListDemoScreen from './src/screens/FlatListDemoScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import StateVsPropsScreen from './src/screens/StateVsPropsScreen';
import CounterScreen from './src/screens/CounterScreen';
import ChronoScreen from './src/screens/ChronoScreen';
import FormScreen from './src/screens/FormScreen';

// Nouveaux écrans pour l'exercice
import ArticlesScreen from './src/screens/ArticlesScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';

import { COLORS } from './src/constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * 1. Configuration du Bottom Tab Navigator
 * Cet élément regroupe les onglets accessibles en bas de l'écran.
 */
function MainTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ 
          title: "Accueil", 
          tabBarIcon: () => <Text>🏠</Text>,
          headerShown: false // On cache le header car HomeScreen a son propre design
        }} 
      />
      <Tab.Screen 
        name="ArticlesTab" 
        component={ArticlesScreen} 
        options={{ 
          title: "Articles", 
          tabBarIcon: () => <Text>📰</Text> 
        }} 
      />
    </Tab.Navigator>
  );
}

/**
 * 2. Navigation principale (Stack)
 * Le "Root" est l'ensemble des onglets. Les autres écrans sont "empilés" par-dessus.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        {/* L'écran principal contient maintenant la barre d'onglets */}
        <Stack.Screen 
          name="Root" 
          component={MainTabs} 
          options={{ headerShown: false }} 
        />

        {/* Écrans de l'exercice Articles */}
        <Stack.Screen 
          name="ArticleDetail" 
          component={ArticleDetailScreen} 
          options={{ title: "Détail de l'article" }} 
        />

        {/* Tes anciens écrans (accessibles via navigation.navigate) */}
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Détail" }} />
        <Stack.Screen name="Demo" component={DemoScreen} options={{ title: "Démo composants" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profils" }} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemoScreen} options={{ title: "Démo FlatList" }} />
        <Stack.Screen name="GridDemo" component={GridDemoScreen} options={{ title: "Démo Grid" }} />
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: "Catalogue" }} />
        <Stack.Screen name="StateVsProps" component={StateVsPropsScreen} options={{ title: "States vs Props" }} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} options={{ title: "Counter Screen" }} />
        <Stack.Screen name="ChronoScreen" component={ChronoScreen} options={{ title: "Chrono Screen" }} />
        <Stack.Screen name="Form" component={FormScreen} options={{ title: "Formulaire ✍️" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}