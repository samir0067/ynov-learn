import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [resetCount, setResetCount] = useState(0);
  const [isIdle, setIsIdle] = useState(false);

  // Bonus : Détecteur d'inactivité (5s)
  useEffect(() => {
    if (name.length === 0) return;

    setIsIdle(false);
    const timer = setTimeout(() => setIsIdle(true), 5000);

    return () => clearTimeout(timer);
  }, [name]);

  const handleReset = () => {
    setName('');
    setResetCount(prev => prev + 1);
    setIsIdle(false);
  };

  // Logique pour le style du compteur
  const getCounterStyle = () => {
    if (name.length === 20) return { color: 'red', fontWeight: 'bold' as const };
    if (name.length >= 15) return { color: 'red' };
    return { color: COLORS.gray || '#7f8c8d' };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment tu t'appelles ?</Text>

      <TextInput
        style={styles.input}
        placeholder="Ton prénom ici..."
        value={name}
        onChangeText={setName}
        maxLength={20}
      />

      <View style={styles.row}>
        <Text style={getCounterStyle()}>{name.length} / 20 caractères</Text>
      </View>

      <Text style={styles.greeting}>
        {name.trim() ? `Bonjour ${name} 👋` : "Bonjour, qui es-tu ? 🤔"}
      </Text>

      {isIdle && name.length > 0 && (
        <Text style={styles.idleText}>T'es encore là ? 😴</Text>
      )}

      <TouchableOpacity
        style={[styles.button, !name && styles.buttonDisabled]}
        onPress={handleReset}
        disabled={!name}
      >
        <Text style={styles.buttonText}>Effacer 🗑️</Text>
      </TouchableOpacity>

      {resetCount > 0 && (
        <Text style={styles.resetCounter}>Réinitialisations : {resetCount}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3E50',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  row: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: '600',
    color: '#8E44AD',
  },
  button: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#BDC3C7',
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  idleText: {
    textAlign: 'center',
    color: '#95A5A6',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  resetCounter: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
    color: '#BDC3C7',
  },
});

export default FormScreen;