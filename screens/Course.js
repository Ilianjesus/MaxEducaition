import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Course = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { curso } = route.params;
  const [showDescription, setShowDescription] = useState(false);

  // Función para navegar a la lección
  const goToLesson = (video, titulo) => {
    navigation.navigate("Lesson", { video, titulo });
};


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{curso.titulo}</Text>
      <Image style={styles.imagecourse} source={curso.imagen} />
      <Text style={styles.subtitle}>Categoría</Text>
      <Text style={styles.text}>{curso.categoria}</Text>

      <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
        <Text style={styles.subtitle}>Descripción del curso</Text>
        <Text style={styles.dropdownIcon}>{showDescription ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {showDescription && <Text style={styles.text}>{curso.descripcion}</Text>}

      <Text style={styles.subtitle}>Lecciones</Text>
      {curso.lecciones.map((leccion, index) => (
        <TouchableOpacity
        key={index}
        style={styles.rectangle}
        onPress={() => goToLesson(leccion.video ? leccion.video : leccion.titulo)} // Cambiar esto si 'video' no existe
        > 
    <Text style={styles.lessonText}>{leccion.titulo}</Text>
    </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#086db8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  imagecourse: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  dropdownIcon: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  rectangle: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  lessonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#086db8",
    fontWeight: "bold",
  },
});

export default Course;
