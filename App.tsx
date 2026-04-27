import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlatListDemoScreen from './src/screens/FlatListDemoScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogueScreen from './src/screens/Catalogue';
import StateVsPropsScreen from './src/screens/StateVsPropsScreen';
import CompteurScreen from './src/screens/CompteurScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Accueil"}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: "Détail"}} />
        <Stack.Screen name="Demo" component={DemoScreen} options={{title: "Démo"}} />
        <Stack.Screen name="Profiles" component={ProfileScreen} options={{title: "Profils"}} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemoScreen} options={{title: "Fruits"}} />
        <Stack.Screen name="GridDemo" component={GridDemoScreen} options={{title: "Grille"}} />
        <Stack.Screen name="Catalogue" component={CatalogueScreen} options={{title: "Catalogue Boutique"}} />
        <Stack.Screen name="StateVsProps" component={StateVsPropsScreen} options={{title: "State vs Props"}} />
        <Stack.Screen name="Compteur" component={CompteurScreen} options={{title: "Compteur"}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
