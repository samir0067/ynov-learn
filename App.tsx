import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen';
<<<<<<< HEAD
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoScreens from './src/screens/DemoScreens';
>>>>>>> 86ec067 (base mobil)

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name='Detail' component={DetailScreen} options={{ title: "Détail" }} />
      </Stack.Navigator>
=======
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{title: "Accueil" }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={ {title: "Détail" } } />
      <Stack.Screen name="Demo" component={DemoScreens} options={ {title: "Démonstration" } } />
    </Stack.Navigator>
>>>>>>> 86ec067 (base mobil)
    </NavigationContainer>
  );
}

