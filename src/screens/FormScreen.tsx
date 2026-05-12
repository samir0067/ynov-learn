import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../constants/colors';

export default function FormScreen() {
  // --- STATE ---
  const [name, setName] = useState('');
  // Bonus : Compteur de resets
  const [resetCount, setResetCount] = useState(0);

  // --- LOGIQUE ---
  const handleReset = () => {
    setName('');
    setResetCount(resetCount + 1);
  };

  const isFieldEmpty = name.length === 0;
  const charLimit = 20;

  
  const getCounterStyle = () => {
    if (name.length === charLimit) return [styles.charCount, styles.charMaxed];
    if (name.length >= 15) return [styles.charCount, styles.charWarning];
    return styles.charCount;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.content}
      >
        
        {/* ÉTAPE 1 : Bonjour en direct */}
        <View style={styles.header}>
          <Text style={styles.title}>Comment tu t'appelles ?</Text>
          <Text style={styles.greeting}>
            {isFieldEmpty ? "Bonjour, qui es-tu ? " : `Bonjour ${name} `}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ton prénom ici..."
            placeholderTextColor="#C7C7CC"
            value={name}
            onChangeText={setName} 
            maxLength={charLimit}   
            autoCorrect={false}
          />
          
          {/* ÉTAPE 3 : Compteur de caractères */}
          <Text style={getCounterStyle()}>
            {name.length} / {charLimit} caractères
          </Text>
        </View>

        {/* ÉTAPE 2 : Bouton Reset */}
        <TouchableOpacity 
          style={[styles.resetButton, isFieldEmpty && styles.buttonDisabled]} 
          onPress={handleReset}
          disabled={isFieldEmpty} // Désactive l'action si vide
          activeOpacity={0.7}
        >
          <Text style={[styles.resetText, isFieldEmpty && styles.textDisabled]}>
            Effacer 
          </Text>
        </TouchableOpacity>

        {/* AFFICHAGE DU BONUS (Nombre de resets) */}
        {resetCount > 0 && (
          <Text style={styles.bonusText}>
            Nombre de nettoyages : {resetCount}
          </Text>
        )}

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // Gris clair Apple
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 14,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#000',
    // Ombre douce iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  charCount: {
    marginTop: 8,
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'right',
    marginRight: 5,
  },
  charWarning: {
    color: '#FF9500', // Orange si > 15
  },
  charMaxed: {
    color: '#FF3B30', // Rouge si = 20
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  buttonDisabled: {
    borderColor: '#E5E5EA',
    opacity: 0.5,
  },
  resetText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  textDisabled: {
    color: '#AEAEB2',
  },
  bonusText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#C7C7CC',
    fontStyle: 'italic',
  }
});