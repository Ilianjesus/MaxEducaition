import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Course = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { curso } = route.params;
  const [lecciones, setLecciones] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const fetchLecciones = async () => {
      try {
        const leccionesRef = collection(db, "cursos", curso.id, "lecciones");
        const snapshot = await getDocs(leccionesRef);
        const leccionesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLecciones(leccionesData);
      } catch (error) {
        console.error("Error al obtener las lecciones:", error);
      }
    };

    fetchLecciones();
  }, [curso.id]);

  const goToLesson = (video, titulo) => {
    navigation.navigate("Lesson", { video, titulo });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{curso.titulo}</Text>

      <Image style={styles.imagecourse} source={{ uri: curso.imagen }} />

      <Text style={styles.subtitle}>Categoría</Text>
      <Text style={styles.text}>{curso.categoria}</Text>

      <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
        <Text style={styles.subtitle}>Descripción del curso</Text>
        <Text style={styles.dropdownIcon}>{showDescription ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {showDescription && <Text style={styles.text}>{curso.descripcion}</Text>}

      <Text style={styles.subtitle}>Lecciones</Text>

      {lecciones.length > 0 ? (
        lecciones.map((leccion) => (
          <TouchableOpacity
            key={leccion.id}
            style={styles.rectangle}
            onPress={() => goToLesson(leccion.video || "", leccion.titulo)}
          >
            <Text style={styles.lessonText}>{leccion.titulo}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.text}>Este curso aún no tiene lecciones.</Text>
      )}
    </ScrollView>
  );
};

export default Course;

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
