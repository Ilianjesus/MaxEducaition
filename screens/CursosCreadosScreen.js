import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CursosCreadosScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cursos Creados</Text>
      <Text style={styles.subtitle}>Aquí están los cursos que has creado:</Text>

      {/* Simulación de lista de cursos */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Curso de React Native</Text>
        <Text style={styles.courseDescription}>
          Aprende a crear aplicaciones móviles usando React Native.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CursoCreado")}
        >
          <Text style={styles.buttonText}>Ver Curso</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Curso de JavaScript Avanzado</Text>
        <Text style={styles.courseDescription}>
          Domina conceptos avanzados de JavaScript para crear aplicaciones
          dinámicas.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CursoCreado")}
        >
          <Text style={styles.buttonText}>Ver Curso</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Curso de UX/UI Design</Text>
        <Text style={styles.courseDescription}>
          Mejora tus habilidades para crear interfaces atractivas.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CursoCreado")}
        >
          <Text style={styles.buttonText}>Ver Curso</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CursosCreadosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#086db8",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#086db8",
    shadowColor: "#086db8",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#086db8",
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
