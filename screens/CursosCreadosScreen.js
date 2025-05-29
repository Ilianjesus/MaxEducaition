import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const CursosCreadosScreen = () => {
  const navigation = useNavigation();
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCursos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "cursos"));
      const currentUserUid = auth.currentUser.uid;

      const cursosArray = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((curso) => curso.creadorUid === currentUserUid); // Mostrar solo los cursos creados por el usuario

      setCursos(cursosArray);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    } finally {
      setLoading(false);
    }
  };

  const eliminarCurso = async (cursoId) => {
    try {
      await deleteDoc(doc(db, "cursos", cursoId));
      setCursos((prevCursos) => prevCursos.filter((curso) => curso.id !== cursoId));
      Alert.alert("Curso eliminado", "El curso ha sido eliminado correctamente.");
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
      Alert.alert("Error", "No se pudo eliminar el curso.");
    }
  };

  const confirmarEliminacion = (cursoId) => {
    Alert.alert(
      "Eliminar curso",
      "¿Estás seguro de que quieres eliminar este curso?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: () => eliminarCurso(cursoId) },
      ]
    );
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

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <TouchableOpacity
                style={[styles.button, { flex: 1, marginRight: 5 }]}
                onPress={() => navigation.navigate("CursoCreado", { curso })}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#b80808", flex: 1, marginLeft: 5 }]}
                onPress={() => confirmarEliminacion(curso.id)}
              >
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
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
