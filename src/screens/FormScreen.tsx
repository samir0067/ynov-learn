import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard 
} from "react-native";
import { COLORS } from "../constants/colors";

export default function FormScreen() {
  const [name, setName] = useState("");

  // Calculs dynamiques pour le compteur
  const charCount = name.length;
  const isLimitReached = charCount === 20;
  const isWarning = charCount > 15;

  // Style dynamique du compteur
  const counterStyle = {
    color: isLimitReached || isWarning ? "red" : COLORS.gray,
    fontWeight: isLimitReached ? "bold" : "normal",
  };

  const handleReset = () => {
    setName("");
  };

  return (
    // KeyboardAvoidingView permet au clavier de ne pas cacher les éléments
    // TouchableWithoutFeedback permet de fermer le clavier en cliquant n'importe où
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <View style={styles.container}>
          
          <Text style={styles.label}>Comment tu t'appelles ?</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ton prénom ici..."
              placeholderTextColor={COLORS.gray}
              value={name}
              onChangeText={setName}
              maxLength={20}
            />
            {/* Étape 3 : Compteur de caractères */}
            <Text style={[styles.counter, counterStyle]}>
              {charCount} / 20
            </Text>
          </View>

          {/* Étape 1 : Bonjour en direct */}
          <View style={styles.greetingBox}>
            <Text style={styles.greetingText}>
              {name.trim().length > 0 
                ? `Bonjour ${name} 👋` 
                : "Bonjour, qui es-tu ? 🤔"}
            </Text>
          </View>

          {/* Étape 2 : Bouton Reset */}
          <TouchableOpacity 
            style={[
              styles.resetButton, 
              name.length === 0 && styles.disabledButton
            ]}
            onPress={handleReset}
            disabled={name.length === 0}
            activeOpacity={0.7}
          >
            <Text style={styles.resetButtonText}>Effacer 🗑️</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 12,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    // Ombre
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    fontSize: 18,
    color: COLORS.black,
    paddingVertical: 8,
  },
  counter: {
    textAlign: "right",
    fontSize: 12,
    marginTop: 4,
  },
  greetingBox: {
    marginVertical: 40,
    alignItems: "center",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },
  resetButton: {
    backgroundColor: COLORS.secondary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.4, // Grisé si vide
  },
  resetButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});