import React, { useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, runOnJS } from "react-native-reanimated";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

export default function DetailCategoryScreen({ route, navigation }: any) {
  // On récupère la catégorie passée dans les paramètres de la route
  const { category } = route.params;
  const { width } = useWindowDimensions();

  // 1. Valeurs partagées gérées par Reanimated (Shared Values)
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const scale = useSharedValue(0.5);

  useEffect(() => {
    // 2. Déclenchement fluide des animations
    opacity.value = withTiming(1, { duration: 600 });
    translateY.value = withSpring(0, { damping: 12, stiffness: 90 });
    scale.value = withSpring(1, { damping: 10, stiffness: 100 });
  }, []);

  // 3. Liaison avec les styles animés (s'exécutent sur le thread UI)
  const emojiAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const infoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  // 4. Fonction pour gérer l'animation de sortie
  const handleGoBack = () => {
    // On relance les animations à l'envers (vers les valeurs de départ) plus rapidement
    scale.value = withTiming(0.5, { duration: 250 });
    translateY.value = withTiming(50, { duration: 250 });
    
    // Le 3ème argument de withTiming est un callback exécuté à la fin de l'animation
    opacity.value = withTiming(0, { duration: 250 }, (finished) => {
      if (finished) {
        // Pour appeler une fonction JS classique depuis le thread UI, il faut la passer à runOnJS
        runOnJS(navigation.goBack)();
      }
    });
  };

  return (
    <View style={[styles.screen, { backgroundColor: category.color }]}>
      {/* 5. Application des styles */}
      <Animated.View style={emojiAnimatedStyle}>
        <Text style={[styles.emoji, { fontSize: width * 0.3 }]}>{category.emoji}</Text>
      </Animated.View>
      
      <Animated.View style={[styles.infoContainer, infoAnimatedStyle]}>
        <Text style={styles.title}>{category.name}</Text>
        
        {category.description && (
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionText}>{category.description}</Text>
          </View>
        )}
        
        <View style={styles.buttonContainer}>
          <Button 
            label="← Retour" 
            onPress={handleGoBack} 
            color="#ffffff" 
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emoji: {
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 15,
  },
  infoContainer: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: COLORS.white,
    marginBottom: 20,
    letterSpacing: 1,
  },
  descriptionBox: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
    width: "100%",
  },
  descriptionText: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "600",
  },
  buttonContainer: {
    width: "80%",
  }
});