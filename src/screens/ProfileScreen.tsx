// src/screens/ProfileScreen.tsx
// 🎯 EXERCICE : Créer des fiches de profil style Instagram
// Remplissez les 6 TODO un par un. Testez après chaque TODO !

import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const PROFILES = [
  {
    id: 1,
    name: "Sarah Martin",
    title: "Designer UI/UX",
    bio: "Passionnée par le design mobile et les interfaces intuitives.",
    avatar: "https://i.pravatar.cc/150?img=47",
    cover: "https://picsum.photos/seed/sarah/400/150",
    stats: { posts: 142, followers: 2340, following: 891 },
  },
  {
    id: 2,
    name: "Thomas Dubois",
    title: "Développeur React Native",
    bio: "Je code des apps le jour, je joue à des jeux vidéo la nuit.",
    avatar: "https://i.pravatar.cc/150?img=68",
    cover: "https://picsum.photos/seed/thomas/400/150",
    stats: { posts: 89, followers: 1205, following: 432 },
  },
  {
    id: 3,
    name: "Léa Fontaine",
    title: "Cheffe de projet digital",
    bio: "Entre deux réunions, je rêve de plages et de sushi.",
    avatar: "https://i.pravatar.cc/150?img=45",
    cover: "https://picsum.photos/seed/lea/400/150",
    stats: { posts: 56, followers: 890, following: 267 },
  },
];

function ProfileCard({ profile }: { profile: (typeof PROFILES)[0] }) {
  return (
    <View style={styles.card}>

      {/* TODO 1 : Afficher l'image de couverture
          → Composant : Image
          → source : {{ uri: profile.cover }}
          → style : styles.cover */}


      {/* TODO 2 : Afficher l'avatar rond par-dessus la cover
          → D'abord une View avec style={styles.avatarContainer}
          → Dedans une Image :
             - source={{ uri: profile.avatar }}
             - style={styles.avatar} */}


      {/* TODO 3 : Afficher le nom, le titre et la bio
          → Une View avec style={styles.info}
          → Dedans 3 composants Text :
             - profile.name  avec style={styles.name}
             - profile.title avec style={styles.titleText}
             - profile.bio   avec style={styles.bio} */}


      {/* TODO 4 : Afficher les 3 statistiques EN LIGNE
          → Une View avec style={styles.statsRow}
          → Dedans 3 blocs identiques (View style={styles.stat}) :
             - Text style={styles.statNumber} → le chiffre
             - Text style={styles.statLabel}  → le mot
          → Valeurs : profile.stats.posts, .followers, .following
          → Labels : "Posts", "Followers", "Following" */}


      {/* TODO 5 : Ajouter le bouton "Suivre"
          → Une View avec style={styles.buttonContainer}
          → Dedans : <Button label="Suivre" onPress={() => {}} /> */}

    </View>
  );
}

export default function ProfileScreen() {
  return (
    // TODO 6 : Remplacez <View> par <ScrollView> pour pouvoir scroller !
    <View style={styles.screen}>
      {PROFILES.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
      <View style={{ height: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    overflow: "hidden",
  },
  cover: {
    width: "100%",
    height: 140,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -45,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  info: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.black,
  },
  titleText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "600",
    marginTop: 2,
  },
  bio: {
    fontSize: 13,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.background,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
});