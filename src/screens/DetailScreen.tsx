import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const localImage = require("../../assets/img-ocean.jpg")

export default function DemoScreen() {
  return (
    <ScrollView style={styles.screen}>

      {/* ============================================= */}
      {/* 1. IMAGE DISTANTE (depuis une URL)            */}
      {/* ============================================= */}
      <Text style={styles.sectionTitle}>📷 Image depuis Internet</Text>
      <Image
        source={{ uri: "https://picsum.photos/400/200" }}
        style={styles.imageLarge}
      />   

      {/* ============================================= */}
      {/* 1. IMAGE LOCALE (depuis le projet)            */}
      {/* ============================================= */}
      <Text style={styles.sectionTitle}>📷 Image locale (require)</Text>
      <Image
        source={localImage}
        style={styles.localImage}
      />

      {/* ============================================= */}
      {/* 3. LES DEUX CÔTE À CÔTE (row)                */}
      {/* ============================================= */}
      <Text style={styles.sectionTitle}>⚡ Locale vs Distante côte à côte</Text>
      <View style={styles.row}>
        {/* Image locale à gauche */}
        <View style={styles.imageCompare}>
          <Image source={localImage} style={styles.smallImage} />
          <Text style={styles.imageLabel}>Locale</Text>
          <Text style={styles.imageCode}>require("...")</Text>
        </View>

        {/* Image distante à droite */}
        <View style={styles.imageCompare}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.smallImage}
          />
          <Text style={styles.imageLabel}>Distante</Text>
          <Text style={styles.imageCode}>{"{ uri: '...' }"}</Text>
        </View>
      </View>

      {/* ============================================= */}
      {/* 2. IMAGE RONDE (astuce borderRadius)          */}
      {/* ============================================= */}
      <Text style={styles.sectionTitle}>🔵 Image ronde</Text>
      <View style={styles.center}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
      </View>

      {/* ============================================= */}
      {/* 3. FLEXBOX — flexDirection                    */}
      {/* ============================================= */}
      <Text style={styles.sectionTitle}>📐 Flexbox : éléments en ligne</Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: COLORS.primary }]}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: COLORS.secondary }]}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: COLORS.gray }]}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* ============================================= */}
      {/* 4. FLEXBOX — justifyContent & alignItems      */}
      {/* ============================================= */}
      <Text style={styles.sectionTitle}>🎯 Centrer avec Flexbox</Text>
      <View style={styles.centered}>
        <Text style={styles.centeredText}>Je suis centré !</Text>
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: 24,
    marginBottom: 12,
  },
  // Images
  localImage: {
    width: 200,
    height: 120,
    borderRadius: 16,
  },
  imageLarge: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  center: {
    alignItems: "center",
  },
  smallImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
 compareBox: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  compareTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 20,
  },
  compareText: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 20,
  },
  imageCompare: {
    alignItems: "center",
    flex: 1,
  },
  imageLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: 8,
  },
  imageCode: {
    fontSize: 11,
    color: COLORS.gray,
    marginTop: 2,
    fontStyle: "italic",
  },
  // Flexbox row
  row: {
    flexDirection: "row",
    justifyContent: "space-around", // espace égal autour de chaque élément
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  // Centrage complet
  centered: {
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: "center", // centre verticalement
    alignItems: "center",     // centre horizontalement
  },
  centeredText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});