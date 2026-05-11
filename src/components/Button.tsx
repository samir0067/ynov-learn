import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../constants/colors';

// 1. On définit bien "title" ici
interface ButtonProps {
  title: string; 
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline'; // optionnel
  style?: ViewStyle; // pour ajouter des styles personnalisés de l'extérieur
}

// 2. On déstructure "title" dans les arguments du composant
const Button = ({ title, onPress, variant = 'primary', style }: ButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button, styles[variant], style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, variant === 'outline' ? styles.textOutline : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  textOutline: {
    color: COLORS.primary,
  }
});

export default Button;