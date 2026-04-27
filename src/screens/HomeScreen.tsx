import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/colors';

// ============================================================
// EXERCICE : REFAIRE LE HOMESCREEN À VOTRE FAÇON
// ============================================================
//
// 🎯 Objectif : Remplacer cette page par VOTRE dashboard perso.
//    Elle doit permettre de naviguer vers les écrans du projet
//    (DemoScreen, ProfileScreen, FlatListDemo, GridDemo, etc.)
//    mais avec VOTRE design.
//
// 📋 Critères obligatoires :
//   1. Au moins UN composant réutilisable avec des props
//   2. Une FlatList OU un ScrollView avec une grille
//   3. Des éléments cliquables qui naviguent vers les écrans
//   4. Du Flexbox pour organiser le layout
//   5. Du style soigné (ombres, arrondis, couleurs)
//   6. Au moins une Image
//
// 🌟 Bonus : header perso, catégories, emoji, badges, etc.
//
// 💡 Pour naviguer : navigation.navigate('NomDeLEcran')
//
// 🚀 C'est VOTRE app, soyez créatifs !
// ============================================================

const HomeScreen = ({ navigation }: any) => {
  // À vous de jouer !
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>
        Mon HomeScreen — Remplacez tout ça par votre code !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 18,
    color: COLORS.gray,
    textAlign: 'center',
    padding: 20,
  },
});

export default HomeScreen;