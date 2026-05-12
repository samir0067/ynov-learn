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

      {/* TODO 1 */}
      <Image source={{ uri: profile.cover }} style={styles.cover} />

      {/* TODO 2 */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
      </View>

      {/* TODO 3 */}
      <View style={styles.info}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.titleText}>{profile.title}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      {/* TODO 4 */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{profile.stats.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{profile.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{profile.stats.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* TODO 5 */}
      <View style={styles.buttonContainer}>
        <Button label="Suivre" onPress={() => {}} />
      </View>

    </View>
  );
}

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.screen}>
      {PROFILES.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
      <View style={{ height: 40 }} />
    </ScrollView>
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
    placeholder: {
    padding: 24,
    textAlign: "center",
    fontSize: 16,
    color: COLORS.gray,
    fontStyle: "italic",
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