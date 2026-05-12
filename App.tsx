import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // AJOUT
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import ChronoScreen from './src/screens/ChronoScreen';
import CounterScreen from './src/screens/CounterScreen';
import FormScreen from './src/screens/FormScreen'; 
import ArticlesScreen from './src/screens/ArticlesScreen'; // AJOUT (le nouvel écran)

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // AJOUT

// On garde ta structure Stack intacte
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Accueil" }} />
      <Stack.Screen name='Detail' component={DetailScreen} options={{ title: "Détail" }} />
      <Stack.Screen name='Demo' component={DemoScreen} options={{ title: "Démo composants" }} />
      <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: "Profils" }} />
      <Stack.Screen name='GridDemo' component={GridDemoScreen} options={{ title: "Demo Grille" }} />
      <Stack.Screen name='Catalog' component={CatalogScreen} options={{ title: "Boutique Tech" }} />
      <Stack.Screen name='Chrono' component={ChronoScreen} options={{ title: "Mon Chrono" }} />
      <Stack.Screen name='Counter' component={CounterScreen} options={{ title: "Mon Compteur" }} />
      <Stack.Screen name='Form' component={FormScreen} options={{ title: "Formulaire ✍️" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* On utilise les Tabs comme menu principal qui englobe ton Stack */}
      <Tab.Navigator>
        {/* L'onglet 1 contient tout ton code d'avant (MyStack) */}
        <Tab.Screen 
          name="Main" 
          component={MyStack} 
          options={{ title: "Accueil", headerShown: false }} 
        />
        
        {/* L'onglet 2 est dédié au nouveau devoir API */}
        <Tab.Screen 
          name="Articles" 
          component={ArticlesScreen} 
          options={{ title: "Articles API" }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}