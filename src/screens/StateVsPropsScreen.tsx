import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/colors';

// ============================================================
// ÉCRAN DE DÉMO PÉDAGOGIQUE — STATE vs PROPS
// ============================================================
//
//   - une donnée FIGÉE (props, passée par l'extérieur)
//   - une donnée VIVANTE (state, gardée en mémoire par le composant)
//
// ============================================================


const PROPS_COLOR = '#3498DB'; // bleu
const STATE_COLOR = '#FF6B35'; // orange-rouge

// ------------------------------------------------------------
// Le composant <Greeting /> reçoit un prop "name" depuis l'extérieur.
// Il l'affiche tel quel : il ne peut PAS le modifier lui-même.
// On le réutilise 3 fois plus bas avec des prénoms différents.
// ------------------------------------------------------------
type GreetingProps = {
  name: string;
  color: string;
};

function Greeting({ name, color }: GreetingProps) {
  // Première lettre du prénom, en majuscule, pour l'avatar
  const initial = name.charAt(0).toUpperCase();

  return (
    <View style={styles.greetingCard}>
      <View style={[styles.avatar, { backgroundColor: color }]}>
        <Text style={styles.avatarLetter}>{initial}</Text>
      </View>
      <Text style={styles.greetingName}>{name}</Text>
      <Text style={styles.greetingHello}>Bonjour 👋</Text>
    </View>
  );
}

// ------------------------------------------------------------
// Écran principal
// ------------------------------------------------------------

export default function StateVsPropsScreen() {
  // On garde en mémoire le nombre de likes 
  // (vous verrez ce mécanisme en phase 2).
  const [likes, setLikes] = useState(0);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* ===== Section 1 : Header pédagogique ===== */}
      <View style={styles.header}>
        <Text style={styles.title}>State vs Props</Text>
        <Text style={styles.subtitle}>Données figées ou vivantes ?</Text>
      </View>

      {/* ===== Section 2 : Bloc PROPS (figé) ===== */}
      <View style={[styles.banner, { backgroundColor: PROPS_COLOR }]}>
        <Text style={styles.bannerEmoji}>📦</Text>
        <Text style={styles.bannerLabel}>PROPS</Text>
      </View>
      <Text style={styles.sectionIntro}>
        Une donnée passée par l'extérieur. Le composant la reçoit et l'affiche,
        mais ne peut pas la changer.
      </Text>

      {/* 3 fois le MÊME composant <Greeting />, avec des props différents */}
      <View style={styles.greetingsRow}>
        <Greeting name="Sarah" color="#6C63FF" />
        <Greeting name="Thomas" color="#2ECC71" />
        <Greeting name="Léa" color="#E74C3C" />
      </View>

      {/* ===== Section 3 : Bloc STATE (vivant) ===== */}
      <View style={[styles.banner, { backgroundColor: STATE_COLOR }]}>
        <Text style={styles.bannerEmoji}>⚡</Text>
        <Text style={styles.bannerLabel}>STATE</Text>
      </View>
      <Text style={styles.sectionIntro}>
        Une donnée que le composant garde en mémoire et peut changer tout seul.
      </Text>

      {/* Compteur de likes : c'est le state qui rend ce bloc "vivant" */}
      <View style={styles.counterCard}>
        <Text style={styles.heart}>❤️</Text>
        <Text style={styles.counterValue}>{likes}</Text>

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.likeButton}
          onPress={() => setLikes(likes + 1)}
        >
          <Text style={styles.likeButtonText}>J'aime</Text>
        </TouchableOpacity>

        <Text style={styles.counterHint}>Cliquez plusieurs fois ↑</Text>
      </View>
    </ScrollView>
  );
}

// ------------------------------------------------------------
// Styles
// ------------------------------------------------------------

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ---- Header ----
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.gray,
    marginTop: 4,
  },

  // ---- Bannière de section (PROPS / STATE) ----
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  bannerEmoji: {
    fontSize: 26,
    marginRight: 12,
  },
  bannerLabel: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  sectionIntro: {
    fontSize: 13,
    color: COLORS.gray,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
    lineHeight: 18,
  },

  // ---- Bloc PROPS : 3 mini-cartes Greeting côte à côte ----
  greetingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  greetingCard: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarLetter: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  greetingName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  greetingHello: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  },

  // ---- Bloc STATE : compteur de likes ----
  counterCard: {
    marginHorizontal: 16,
    backgroundColor: COLORS.white,
    borderRadius: 22,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  heart: {
    fontSize: 56,
  },
  counterValue: {
    fontSize: 64,
    fontWeight: 'bold',
    color: COLORS.black,
    marginVertical: 8,
  },
  likeButton: {
    backgroundColor: STATE_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 30,
    marginTop: 8,
    shadowColor: STATE_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  likeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  counterHint: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 12,
  },
});