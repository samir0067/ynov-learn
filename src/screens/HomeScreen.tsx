import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // L'alternative
import { COLORS } from '../constants/colors';

const MENU_ITEMS = [
  { id: '1', title: 'Catalogue', icon: '🛍️', screen: 'Catalog', color: COLORS.primary },
  { id: '2', title: 'Profils', icon: '👤', screen: 'Profile', color: COLORS.secondary },
  { id: '3', title: 'FlatList', icon: '📜', screen: 'FlatListDemo', color: '#4ECDC4' },
  { id: '4', title: 'Grille', icon: '🔲', screen: 'GridDemo', color: '#FFD93D' },
  { id: '5', title: 'Composants', icon: '🧪', screen: 'Demo', color: '#6BCB77' },
  { id: '6', title: 'Détails', icon: '📄', screen: 'Detail', color: COLORS.gray },
  { id: '7', title: 'statesvsprops', icon: '📄', screen: 'StateVsProps', color: '#F72585' },
  { id: '8', title: 'CounterScreen', icon: '📄', screen: 'CounterScreen', color: '#F78685' },
  { id: '9', title: 'ChronoScreen', icon: '⏰', screen: 'ChronoScreen', color: '#45B7D1' },
  { id: '10', title: 'Formulaire', icon: '✍️', screen: 'Form', color: '#8E44AD'}
];

const MenuCard = ({ item, onPress }: { item: any, onPress: () => void }) => (
  <TouchableOpacity 
    style={[styles.card, { borderTopColor: item.color }]} 
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.cardIcon}>{item.icon}</Text>
    <Text style={styles.cardTitle}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }: any) => {
  // On récupère les valeurs des bordures de sécurité
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container, 
      { 
        paddingTop: insets.top, // Évite l'encoche en haut
        paddingBottom: insets.bottom // Évite la barre de navigation en bas
      }
    ]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Bonjour,</Text>
          <Text style={styles.nameText}>Joe User 👋</Text>
        </View>
        <Image 
          source={require('../../assets/JOE.png')} 
          style={styles.avatar} 
        />
      </View>

      {/* Grille */}
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <MenuCard 
            item={item} 
            onPress={() => navigation.navigate(item.screen)} 
          />
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Exercice Dashboard • 2026</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  welcomeText: { fontSize: 16, color: COLORS.gray },
  nameText: { fontSize: 24, fontWeight: 'bold', color: COLORS.black },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  grid: { padding: 15 },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderTopWidth: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardIcon: { fontSize: 35, marginBottom: 10 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: COLORS.black },
  footer: { padding: 20, alignItems: 'center' },
  footerText: { color: COLORS.gray, fontSize: 12 }
});

export default HomeScreen;