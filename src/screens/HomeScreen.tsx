import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { COLORS } from '../constants/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = (SCREEN_WIDTH - 16 * 2 - 12) / 2;

type Props = {
  navigation: any;
};

type Course = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  screen: string;
};

const COURSES: Course[] = [
  { id: '1',  title: 'Composants',   emoji: '🧩', color: '#6C63FF', screen: 'Demo' },
  { id: '2',  title: 'Profils',      emoji: '👤', color: '#FF6584', screen: 'Profile' },
  { id: '3',  title: 'FlatList',     emoji: '📜', color: '#FF8C00', screen: 'FlatListDemo' },
  { id: '4',  title: 'Grille',       emoji: '🔲', color: '#2ECC71', screen: 'GridDemo' },
  { id: '5',  title: 'Catalogue',    emoji: '🛍️', color: '#3498DB', screen: 'Catalog' },
  { id: '6',  title: 'Détail',       emoji: '📄', color: '#9B59B6', screen: 'Detail' },
  { id: '7',  title: 'State vs Props', emoji: '⚡', color: '#1ABC9C', screen: 'StateVsProps' },
  { id: '10', title: 'Formulaire',   emoji: '✍️', color: '#8E44AD', screen: 'Form' },
];

type Stat = {
  id: string;
  value: string;
  label: string;
  color: string;
  emoji: string;
};

const STATS: Stat[] = [
  { id: '1', value: '6',    label: 'Écrans',      color: '#6C63FF', emoji: '📱' },
  { id: '2', value: '12+',  label: 'Composants',  color: '#FF6584', emoji: '🧱' },
  { id: '3', value: '100%', label: 'Fun',          color: '#FF8C00', emoji: '🚀' },
];

type CourseCardProps = {
  course: Course;
  onPress: () => void;
};

function CourseCard({ course, onPress }: CourseCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.courseCard, { backgroundColor: course.color }]}
    >
      <Text style={styles.courseEmoji}>{course.emoji}</Text>
      <View>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseHint}>Ouvrir →</Text>
      </View>
    </TouchableOpacity>
  );
}

type StatCardProps = {
  stat: Stat;
};

function StatCard({ stat }: StatCardProps) {
  return (
    <View style={[styles.statCard, { borderLeftColor: stat.color }]}>
      <Text style={styles.statEmoji}>{stat.emoji}</Text>
      <View>
        <Text style={styles.statValue}>{stat.value}</Text>
        <Text style={styles.statLabel}>{stat.label}</Text>
      </View>
    </View>
  );
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Bonjour 👋</Text>
          <Text style={styles.helloSub}>Bienvenue sur Ynov Learn</Text>
        </View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/120?img=12' }}
          style={styles.avatar}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.hero}
        onPress={() => navigation.navigate('Catalog')}
      >
        <Image
          source={{ uri: 'https://picsum.photos/seed/ynovwow/800/400' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroBadge}>NOUVEAU</Text>
          <Text style={styles.heroTitle}>Découvre le catalogue 🛍️</Text>
          <Text style={styles.heroSubtitle}>Une grille produits prête à l'emploi</Text>
        </View>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.statsRow}
      >
        {STATS.map((s) => (
          <StatCard key={s.id} stat={s} />
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>📚 Mes cours</Text>
      <View style={styles.grid}>
        {COURSES.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onPress={() => navigation.navigate(course.screen)}
          />
        ))}
      </View>

      <Text style={styles.footer}>Fait avec ❤️ en Bachelor 2</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { paddingBottom: 32 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  hello: { fontSize: 28, fontWeight: 'bold', color: COLORS.black },
  helloSub: { fontSize: 14, color: COLORS.gray, marginTop: 2 },
  avatar: {
    width: 56, height: 56, borderRadius: 28,
    borderWidth: 2, borderColor: COLORS.primary,
  },
  hero: {
    marginHorizontal: 16, marginTop: 8, borderRadius: 24, overflow: 'hidden',
    shadowColor: COLORS.black, shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18, shadowRadius: 12, elevation: 6,
  },
  heroImage: { width: '100%', height: 180 },
  heroOverlay: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    padding: 16, backgroundColor: 'rgba(0,0,0,0.35)',
  },
  heroBadge: {
    alignSelf: 'flex-start', backgroundColor: COLORS.secondary,
    color: COLORS.white, fontSize: 10, fontWeight: 'bold',
    paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6,
    overflow: 'hidden', marginBottom: 8, letterSpacing: 1,
  },
  heroTitle: { color: COLORS.white, fontSize: 20, fontWeight: 'bold' },
  heroSubtitle: { color: COLORS.white, fontSize: 13, marginTop: 2, opacity: 0.9 },
  statsRow: { paddingHorizontal: 16, paddingVertical: 16, gap: 12 },
  statCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white,
    paddingVertical: 12, paddingHorizontal: 14, borderRadius: 16,
    borderLeftWidth: 4, minWidth: 150,
    shadowColor: COLORS.black, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 2,
  },
  statEmoji: { fontSize: 26, marginRight: 10 },
  statValue: { fontSize: 18, fontWeight: 'bold', color: COLORS.black },
  statLabel: { fontSize: 12, color: COLORS.gray },
  sectionTitle: {
    fontSize: 20, fontWeight: 'bold', color: COLORS.black,
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12,
  },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 16, justifyContent: 'space-between',
  },
  courseCard: {
    width: CARD_WIDTH, height: CARD_WIDTH * 0.95, borderRadius: 22,
    padding: 16, marginBottom: 12, justifyContent: 'space-between',
    shadowColor: COLORS.black, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18, shadowRadius: 10, elevation: 5,
  },
  courseEmoji: { fontSize: 42 },
  courseTitle: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  courseHint: { color: COLORS.white, fontSize: 12, opacity: 0.85, marginTop: 2 },
  footer: { textAlign: 'center', color: COLORS.gray, marginTop: 16, fontSize: 12 },
});

export default HomeScreen;