import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const CursosCreadosScreen = () => {
  const navigation = useNavigation();
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "cursos"));
      const cursosArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(cursosArray);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#086db8" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cursos Creados</Text>
      <Text style={styles.subtitle}>Aquí están los cursos que has creado:</Text>

      {cursos.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Aún no has creado ningún curso.
        </Text>
      ) : (
        cursos.map((curso) => (
          <View key={curso.id} style={styles.courseCard}>
            {curso.imagen ? (
              <Image source={{ uri: curso.imagen }} style={styles.courseImage} />
            ) : (
              <View style={styles.noImage}>
                <Text style={{ color: "#999" }}>Sin imagen</Text>
              </View>
            )}
            <Text style={styles.courseTitle}>{curso.titulo}</Text>
            <Text style={styles.courseCategory}>{curso.categoria}</Text>
            <Text style={styles.courseDescription}>{curso.descripcion}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CursoCreado", { curso })}
            >
              <Text style={styles.buttonText}>Ver Curso</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  courseImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 10,
  },
  noImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#086db8",
    marginBottom: 5,
  },
  courseCategory: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
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
