import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS } from '../constants/colors';

const MAX_LENGTH = 20;
const WARN_THRESHOLD = 15;

const FormScreen = () => {
  const [name, setName] = useState('');
  const [resetCount, setResetCount] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {  
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsIdle(false);
    timerRef.current = setTimeout(() => setIsIdle(true), 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [name]);

  const handleReset = () => {
    setName('');
    setResetCount(c => c + 1);
  };

  const charCount = name.length;
  const isOverWarning = charCount > WARN_THRESHOLD;
  const isAtMax = charCount === MAX_LENGTH;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {/* Étape 1 — Bonjour en direct */}
      <Text style={styles.title}>Comment tu t'appelles ?</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Ton prénom ici..."
          placeholderTextColor={COLORS.gray}
          value={name}
          onChangeText={setName}
          maxLength={MAX_LENGTH}
          autoCapitalize="words"
        />

        {/* Étape 3 — Compteur de caractères */}
        <Text
          style={[
            styles.charCount,
            isOverWarning && styles.charCountWarn,
            isAtMax && styles.charCountMax,
          ]}
        >
          {charCount} / {MAX_LENGTH} caractères
        </Text>
      </View>

      {/* Carte de salutation */}
      <View style={styles.greetingCard}>
        <Text style={styles.greeting}>
          {name.trim() ? `Bonjour ${name.trim()} 👋` : 'Bonjour, qui es-tu ? 🤔'}
        </Text>
        {/* Bonus — message après 5s sans taper */}
        {isIdle && name.length > 0 && (
          <Text style={styles.idleText}>T'es encore là ? 😴</Text>
        )}
      </View>

      {/* Étape 2 — Bouton Reset */}
      <TouchableOpacity
        style={[styles.resetBtn, name === '' && styles.resetBtnDisabled]}
        onPress={handleReset}
        disabled={name === ''}
        activeOpacity={0.8}
      >
        <Text style={styles.resetBtnText}>Effacer 🗑️</Text>
      </TouchableOpacity>

      {/* Bonus — compteur de resets */}
      {resetCount > 0 && (
        <Text style={styles.resetCountText}>
          Remis à zéro {resetCount} fois 🔄
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 48,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 20,
    marginTop: 8,
  },

  // Carte champ + compteur
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  input: {
    fontSize: 16,
    color: COLORS.black,
    borderWidth: 1.5,
    borderColor: '#8E44AD',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
  },
  charCount: {
    fontSize: 13,
    color: COLORS.gray,
    textAlign: 'right',
  },
  charCountWarn: {
    color: COLORS.secondary,
  },
  charCountMax: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  },

  // Carte de salutation
  greetingCard: {
    backgroundColor: '#8E44AD',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#8E44AD',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  idleText: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 12,
    opacity: 0.85,
  },

  // Bouton reset
  resetBtn: {
    backgroundColor: '#8E44AD',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#8E44AD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  resetBtnDisabled: {
    backgroundColor: COLORS.gray,
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.45,
  },
  resetBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  resetCountText: {
    textAlign: 'center',
    color: COLORS.gray,
    fontSize: 14,
    marginTop: 16,
  },
});

export default FormScreen;
