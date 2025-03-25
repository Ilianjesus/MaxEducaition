import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CursoCreado = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Título del curso */}
      <Text style={styles.title}>Curso de "Nombre del Curso"</Text>

      {/* Tarjeta de detalles */}
      <View style={styles.courseCard}>
        <Text style={styles.sectionTitle}>Número de Estudiantes:</Text>
        <Text style={styles.sectionContent}>150 estudiantes</Text>

        <Text style={styles.sectionTitle}>Descripción:</Text>
        <Text style={styles.sectionContent}>
          Aprende a desarrollar aplicaciones móviles usando React Native de
          manera profesional y práctica.
        </Text>

        <Text style={styles.sectionTitle}>Contenido del Curso:</Text>
        <Text style={styles.sectionContent}>
          - Introducción a React Native {"\n"}
          - Componentes y Props {"\n"}
          - Manejo de Estado {"\n"}
          - Navegación {"\n"}
          - Consumo de APIs {"\n"}
          - Publicación de Apps
        </Text>

        <Text style={styles.sectionTitle}>Nivel del Curso:</Text>
        <Text style={styles.sectionContent}>Intermedio (Nivel 6)</Text>
      </View>
    </ScrollView>
  );
};

export default CursoCreado;

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
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#086db8",
    shadowColor: "#086db8",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#086db8",
    marginTop: 10,
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    lineHeight: 20,
  },
});
