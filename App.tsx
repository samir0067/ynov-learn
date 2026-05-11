import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlatListDemoScreen from './src/screens/FlatListDemoScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import StateVsPropsScreen from './src/screens/StateVsPropsScreen';
import FormScreen from './src/screens/FormScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import AboutScreen from './src/screens/AboutScreen';

// ─── 1. Bottom Tab (Articles + À propos) ─────────────────────────────────────
const Tab = createBottomTabNavigator();

function ArticlesTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#E0E4F0',
          paddingBottom: 6,
          height: 60,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 2 },
      }}
    >
      <Tab.Screen
        name="ArticlesList"
        component={ArticlesScreen}
        options={{
          tabBarLabel: 'Articles',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📰</Text>,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'À propos',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

// ─── 2. Stack principal (tout le projet) ─────────────────────────────────────
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Écrans existants */}
        <Stack.Screen name="Home"         component={HomeScreen}        options={{ title: 'Accueil' }} />
        <Stack.Screen name="Detail"       component={DetailScreen}      options={{ title: 'Détail' }} />
        <Stack.Screen name="Demo"         component={DemoScreen}        options={{ title: 'Démo composants' }} />
        <Stack.Screen name="Profile"      component={ProfileScreen}     options={{ title: 'Profils' }} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemoScreen} options={{ title: 'Démo FlatList' }} />
        <Stack.Screen name="GridDemo"     component={GridDemoScreen}    options={{ title: 'Démo Grid' }} />
        <Stack.Screen name="Catalog"      component={CatalogScreen}     options={{ title: 'Catalogue' }} />
        <Stack.Screen name="StateVsProps" component={StateVsPropsScreen} options={{ title: 'State vs Props' }} />
        <Stack.Screen name="Form"         component={FormScreen}        options={{ title: 'Formulaire ✍️' }} />

        {/* Nouveaux écrans articles */}
        <Stack.Screen name="Articles"       component={ArticlesTabs}          options={{ title: 'Articles 📰', headerShown: false }} />
        <Stack.Screen name="ArticleDetail"  component={ArticleDetailScreen}   options={{ title: 'Détail article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}