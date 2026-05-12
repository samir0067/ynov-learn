import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { COLORS } from './src/constants/colors';

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
import ArticlesListScreen from './src/screens/ArticlesListScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import AboutScreen from './src/screens/AboutScreen';

// ------------------------------------------------------------
// Stack onglet Accueil
// ------------------------------------------------------------

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }} />
      <HomeStack.Screen name="Detail" component={DetailScreen} options={{ title: "Détail" }} />
      <HomeStack.Screen name="Demo" component={DemoScreen} options={{ title: "Démo composants" }} />
      <HomeStack.Screen name="FlatListDemo" component={FlatListDemoScreen} options={{ title: "Démo FlatList" }} />
      <HomeStack.Screen name="GridDemo" component={GridDemoScreen} options={{ title: "Démo Grid" }} />
      <HomeStack.Screen name="StateVsProps" component={StateVsPropsScreen} options={{ title: "State vs Props" }} />
      <HomeStack.Screen name="Counter" component={CounterScreen} options={{ title: "Counter" }} />
      <HomeStack.Screen name="Chrono" component={ChronoScreen} options={{ title: "Chrono" }} />
      <HomeStack.Screen name="Form" component={FormScreen} options={{ title: "Formulaire" }} />
    </HomeStack.Navigator>
  );
}

// ------------------------------------------------------------
// Stack onglet Catalogue
// ------------------------------------------------------------

const CatalogStack = createNativeStackNavigator();

function CatalogStackNavigator() {
  return (
    <CatalogStack.Navigator initialRouteName="Catalog">
      <CatalogStack.Screen name="Catalog" component={CatalogScreen} options={{ title: "Catalogue" }} />
      <CatalogStack.Screen name="Detail" component={DetailScreen} options={{ title: "Détail" }} />
    </CatalogStack.Navigator>
  );
}

// ------------------------------------------------------------
// Stack onglet Profils
// ------------------------------------------------------------

const ProfileStack = createNativeStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profils" }} />
    </ProfileStack.Navigator>
  );
}

// ------------------------------------------------------------
// Stack onglet Articles (créneau 6)
// ------------------------------------------------------------

const ArticlesStack = createNativeStackNavigator();

function ArticlesStackNavigator() {
  return (
    <ArticlesStack.Navigator initialRouteName="ArticlesList">
      <ArticlesStack.Screen
        name="ArticlesList"
        component={ArticlesListScreen}
        options={{ title: "Articles" }}
      />
      <ArticlesStack.Screen
        name="ArticleDetail"
        component={ArticleDetailScreen}
        options={{ title: "Détail" }}
      />
    </ArticlesStack.Navigator>
  );
}

// ------------------------------------------------------------
// Tab Navigator (racine) — 5 onglets
// ------------------------------------------------------------

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.gray,
        }}
      >
        <Tab.Screen
          name="AccueilTab"
          component={HomeStackNavigator}
          options={{
            title: "Accueil",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="CatalogueTab"
          component={CatalogStackNavigator}
          options={{
            title: "Catalogue",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🛒</Text>,
          }}
        />
        <Tab.Screen
          name="ProfilsTab"
          component={ProfileStackNavigator}
          options={{
            title: "Profils",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
          }}
        />
        <Tab.Screen
          name="ArticlesTab"
          component={ArticlesStackNavigator}
          options={{
            title: "Articles",
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📰</Text>,
          }}
        />
        <Tab.Screen
          name="AboutTab"
          component={AboutScreen}
          options={{
            title: "À propos",
            headerShown: true,
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>ℹ️</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
