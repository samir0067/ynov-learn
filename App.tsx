import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
<<<<<<< HEAD
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Détail" }} />
        <Stack.Screen name="Demo" component={DemoScreen} options={{ title: "Démonstration" }} />
=======
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name='Detail' component={DetailScreen} options={{ title: "Détail" }} />
        <Stack.Screen name='Demo' component={DemoScreen} options={{ title: "Démo composants" }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: "Profils" }} />
>>>>>>> 26455d71d8ce5a17143eee1f59734e24dfbdf16d
      </Stack.Navigator>
    </NavigationContainer>
  );
}