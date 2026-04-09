import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlatListDemoScreen from './src/screens/FlatListDemoScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Accueil" }} />
        <Stack.Screen name='Detail' component={DetailScreen} options={{ title: "Détail" }} />
        <Stack.Screen name='Demo' component={DemoScreen} options={{ title: "Démo composants" }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ title: "Profils" }} />
        <Stack.Screen name='FlatListDemo' component={FlatListDemoScreen} options={{ title: "Démo FlatList" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}