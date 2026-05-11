import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

const DANGER_COLOR = '#E74C3C';

export default function FormScreen() {
  // --- STATE ---
  // Étape 1: Stocker le prénom
  const [name, setName] = useState('');
  // Bonus: Compter les resets
  const [resetCount, setResetCount] = useState(0);
  // Bonus: Gérer le message d'inactivité
  const [isInactive, setIsInactive] = useState(false);

  // --- LOGIC ---
  // Étape 2: Le bouton reset est-il désactivé ?
  const isResetDisabled = name.length === 0;

  // Étape 3: Calculer la couleur du compteur
  const charCount = name.length;
  const charCountColor = charCount > 15 ? DANGER_COLOR : COLORS.gray;
  const isCharCountMax = charCount === 20;

  // Bonus: Détecter l'inactivité
  useEffect(() => {
    setIsInactive(false); // Reset on type
    
    // On ne lance le timer que si l'utilisateur a commencé à taper
    if (name.length > 0) {
        const timer = setTimeout(() => {
            setIsInactive(true);
        }, 5000); // 5 secondes

        // Nettoyage du timer si l'utilisateur re-tape ou si le composant est démonté
        return () => clearTimeout(timer);
    }
  }, [name]);

  // --- HANDLERS ---
  const handleReset = () => {
    if (!isResetDisabled) {
      setName('');
      setResetCount(prevCount => prevCount + 1);
    }
  };

  // --- RENDER ---
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* Étape 1: Titre */}
        <Text style={styles.title}>Comment tu t'appelles ?</Text>

        {/* Étape 1: Champ de saisie */}
        <TextInput
          style={styles.input}
          placeholder="Ton prénom..."
          placeholderTextColor={COLORS.gray}
          value={name}
          onChangeText={setName}
          maxLength={20} // Étape 3: Limite de caractères
        />

        {/* Étape 3: Compteur de caractères */}
        <Text style={[
            styles.charCounter, 
            { color: charCountColor },
            isCharCountMax && styles.charCounterMax
        ]}>
          {charCount} / 20 caractères
        </Text>

        {/* Étape 1: Message de bienvenue */}
        <Text style={styles.greeting}>
          {name ? `Bonjour ${name} 👋` : 'Bonjour, qui es-tu ? 🤔'}
        </Text>

        {/* Bonus: Message d'inactivité */}
        {isInactive && <Text style={styles.inactiveText}>T'es encore là ? 😴</Text>}

        {/* Étape 2: Bouton Reset */}
        <TouchableOpacity
          style={[styles.resetButton, isResetDisabled && styles.resetButtonDisabled]}
          onPress={handleReset}
          disabled={isResetDisabled}
          activeOpacity={0.7}
        >
          <Text style={styles.resetButtonText}>Effacer 🗑️</Text>
        </TouchableOpacity>

        {/* Bonus: Compteur de resets */}
        {resetCount > 0 && (
          <Text style={styles.resetCounter}>
            Champ effacé {resetCount} fois.
          </Text>
        )}
      </View>
    </View>
  );
}

// --- STYLES ---
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: '#EAECEF',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
    minHeight: 25, // Pour éviter que le layout saute
  },
  resetButton: {
    backgroundColor: DANGER_COLOR,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonDisabled: {
    opacity: 0.5,
    backgroundColor: COLORS.gray,
  },
  resetButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  charCounter: {
    fontSize: 12,
    textAlign: 'right',
    marginTop: 6,
    paddingHorizontal: 4,
  },
  charCounterMax: {
      fontWeight: 'bold',
  },
  inactiveText: {
      textAlign: 'center',
      color: '#F39C12', // Orange
      fontStyle: 'italic',
      marginTop: 8,
      marginBottom: 8,
  },
  resetCounter: {
      textAlign: 'center',
      color: COLORS.gray,
      fontSize: 12,
      marginTop: 16,
  }
});