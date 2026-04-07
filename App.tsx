import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name='Detail' component={DetailScreen} options={{ title: "Détail" }} />
        <Stack.Screen name='Demo' component={DemoScreen} options={{ title: "Démo composants" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}