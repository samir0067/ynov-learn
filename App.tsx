import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import ChronoScreen from './src/screens/ChronoScreen';
import CounterScreen from './src/screens/CounterScreen';
import FormScreen from './src/screens/FormScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name='Detail' component={DetailScreen} options={{ title: "Détail" }} />
        <Stack.Screen name='Demo' component={DemoScreen} options={{ title: "Démo composants" }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: "Profils" }} />
        <Stack.Screen name='GridDemo' component={GridDemoScreen} options={{ title: "Demo Grille" }} />
        <Stack.Screen name='Catalog' component={CatalogScreen} options={{ title: "Boutique Tech" }} />
        <Stack.Screen name='Chrono' component={ChronoScreen} options={{ title: "Mon Chrono" }} />
        <Stack.Screen name='Counter' component={CounterScreen} options={{ title: "Mon Compteur" }} />
        
        {/* 2️⃣ ENREGISTREMENT de la route pour le devoir */}
        <Stack.Screen 
          name='Form' 
          component={FormScreen} 
          options={{ title: "Formulaire ✍️" }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}