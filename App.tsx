import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './src/screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import DemoScreen from './src/screens/DemoScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FlatListDemoScreen from './src/screens/FlatListDemoScreen';
import GridDemoScreen from './src/screens/GridDemoScreen';
import CatalogueScreen from './src/screens/Catalogue';
import StateVsPropsScreen from './src/screens/StateVsPropsScreen';
import CompteurScreen from './src/screens/CompteurScreen';
import ChronoScreen from './src/screens/ChronoScreen';
import FormScreen from './src/screens/FormScreen';
import DetailCategoryScreen from './src/screens/DetailCategoryScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';
import { COLORS } from './src/constants/colors';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarActiveTintColor: COLORS.primary,
      headerShown: true 
    }}>
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ title: "Accueil", tabBarIcon: () => <Text>🏠</Text>, headerShown: false }} 
      />
      <Tab.Screen 
        name="ArticlesTab" 
        component={ArticlesScreen} 
        options={{ title: "Articles", tabBarIcon: () => <Text>📰</Text> }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: "Détail"}} />
        <Stack.Screen name="Demo" component={DemoScreen} options={{title: "Démo"}} />
        <Stack.Screen name="Profiles" component={ProfileScreen} options={{title: "Profils"}} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemoScreen} options={{title: "Fruits"}} />
        <Stack.Screen name="GridDemo" component={GridDemoScreen} options={{title: "Grille"}} />
        <Stack.Screen name="Catalogue" component={CatalogueScreen} options={{title: "Catalogue Boutique"}} />
        <Stack.Screen name="StateVsProps" component={StateVsPropsScreen} options={{title: "State vs Props"}} />
        <Stack.Screen name="Compteur" component={CompteurScreen} options={{title: "Compteur"}} />
        <Stack.Screen name="Chrono" component={ChronoScreen} options={{title: "Chronomètre"}} />
        <Stack.Screen name="Form" component={FormScreen} options={{title: "Formulaire ✍️"}} />
        <Stack.Screen name="DetailCategory" component={DetailCategoryScreen} options={({ route }: any) => ({ title: route.params?.category?.name || "Détail Catégorie", animation: 'slide_from_bottom' })} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} options={{ title: "Détail Article" }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
