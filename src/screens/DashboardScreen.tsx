import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  navigation: any;
};

type CardItem = {
  id: string;
  label: string;
  emoji: string;
  desc: string;
  route: string;
  color: string;
};

const CARDS: CardItem[] = [
  {
    id: "1",
    label: "Détail",
    emoji: "📄",
    desc: "Voir une page de détail",
    route: "Detail",
    color: COLORS.primary,
  },
  {
    id: "2",
    label: "Démo composants",
    emoji: "🧩",
    desc: "Tous les composants React Native",
    route: "Demo",
    color: COLORS.secondary,
  },
  {
    id: "3",
    label: "Profils",
    emoji: "👤",
    desc: "Cards style Instagram",
    route: "Profile",
    color: "#FF8C00",
  },
  {
    id: "4",
    label: "FlatList",
    emoji: "🍓",
    desc: "Listes dynamiques avec data",
    route: "FlatListDemo",
    color: "#E91E63",
  },
  {
    id: "5",
    label: "Grille",
    emoji: "🔲",
    desc: "Layout en grille 2 colonnes",
    route: "GridDemo",
    color: "#009688",
  },
  {
    id: "6",
    label: "Boutique Tech",
    emoji: "🛍️",
    desc: "Catalogue de produits tech",
    route: "Catalog",
    color: COLORS.secondary,
  },
];

// Composant réutilisable — une carte cliquable
function SectionCard({ item, onPress }: { item: CardItem; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.75}>
      <View style={[styles.cardAccent, { backgroundColor: item.color }]} />
      <Text style={styles.cardEmoji}>{item.emoji}</Text>
      <View style={styles.cardText}>
        <Text style={styles.cardLabel}>{item.label}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

// Composant réutilisable — une stat dans le header
function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// Header affiché au-dessus de la FlatList
function Header() {
  return (
    <View>
      {/* Profil */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>🎓</Text>
        </View>
        <Text style={styles.name}>Mon Dashboard</Text>
        <Text style={styles.role}>Étudiant Dev Mobile · Ynov 2025</Text>
      </View>

      {/* Stats — Flexbox row */}
      <View style={styles.statsRow}>
        <StatBox value="7" label="Écrans" />
        <View style={styles.statSeparator} />
        <StatBox value="6" label="Composants" />
        <View style={styles.statSeparator} />
        <StatBox value="100%" label="Motivation" />
      </View>

      <Text style={styles.sectionTitle}>📚 Mes sections</Text>
    </View>
  );
}

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={CARDS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SectionCard
            item={item}
            onPress={() => navigation.navigate(item.route)}
          />
        )}
        ListHeaderComponent={<Header />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // --- FlatList ---
  list: {
    paddingBottom: 32,
  },

  // --- Profil ---
  profileSection: {
    backgroundColor: "#1A1A2E",
    paddingTop: 60,
    paddingBottom: 28,
    alignItems: "center",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  avatarEmoji: {
    fontSize: 44,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  role: {
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
  },

  // --- Stats row (Flexbox) ---
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A2E",
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  },
  statSeparator: {
    width: 1,
    height: 32,
    backgroundColor: "#eee",
  },

  // --- Section title ---
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
    marginHorizontal: 16,
    marginBottom: 8,
  },

  // --- Card ---
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
  },
  cardAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
  },
  cardEmoji: {
    fontSize: 28,
    marginLeft: 8,
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.black,
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 13,
    color: COLORS.gray,
  },
  arrow: {
    fontSize: 24,
    color: COLORS.gray,
  },
});
