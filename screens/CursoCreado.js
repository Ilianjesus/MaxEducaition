import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const CursoCreado = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { curso } = route.params;

  const [titulo, setTitulo] = useState(curso.titulo || "");
  const [imagen, setImagen] = useState(curso.imagen || "");
  const [categoria, setCategoria] = useState(curso.categoria || "");
  const [descripcion, setDescripcion] = useState(curso.descripcion || "");
  const [lecciones, setLecciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newLeccionTitulo, setNewLeccionTitulo] = useState("");
  const [newLeccionVideo, setNewLeccionVideo] = useState("");

  const cursoRef = doc(db, "cursos", curso.id);
  const leccionesColRef = collection(cursoRef, "lecciones");

  // Cargar lecciones
  const fetchLecciones = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(leccionesColRef);
      const leccionesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLecciones(leccionesArray);
    } catch (error) {
      console.error("Error al obtener lecciones:", error);
      Alert.alert("Error", "No se pudieron cargar las lecciones.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLecciones();
  }, []);

  // Guardar cambios en el curso
  const guardarCurso = async () => {
    if (!titulo.trim() || !categoria.trim()) {
      Alert.alert("Error", "El título y la categoría son obligatorios.");
      return;
    }
    try {
      setSaving(true);
      await updateDoc(cursoRef, {
        titulo: titulo.trim(),
        imagen: imagen.trim(),
        categoria: categoria.trim(),
        descripcion: descripcion.trim(),
      });
      Alert.alert("Guardado", "Curso actualizado correctamente.");
    } catch (error) {
      console.error("Error al guardar curso:", error);
      Alert.alert("Error", "No se pudo guardar el curso.");
    } finally {
      setSaving(false);
    }
  };

  // Agregar nueva lección
  const agregarLeccion = async () => {
    if (!newLeccionTitulo.trim() || !newLeccionVideo.trim()) {
      Alert.alert("Error", "Título y video de la lección son obligatorios.");
      return;
    }
    try {
      setSaving(true);
      await addDoc(leccionesColRef, {
        titulo: newLeccionTitulo.trim(),
        video: newLeccionVideo.trim(),
      });
      setNewLeccionTitulo("");
      setNewLeccionVideo("");
      fetchLecciones();
      Alert.alert("Agregado", "Lección agregada correctamente.");
    } catch (error) {
      console.error("Error al agregar lección:", error);
      Alert.alert("Error", "No se pudo agregar la lección.");
    } finally {
      setSaving(false);
    }
  };

  // Eliminar lección
  const eliminarLeccion = (id) => {
    Alert.alert(
      "Eliminar lección",
      "¿Estás seguro de eliminar esta lección?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              setSaving(true);
              await deleteDoc(doc(leccionesColRef, id));
              fetchLecciones();
              Alert.alert("Eliminada", "Lección eliminada correctamente.");
            } catch (error) {
              console.error("Error al eliminar lección:", error);
              Alert.alert("Error", "No se pudo eliminar la lección.");
            } finally {
              setSaving(false);
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#086db8" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Editar Curso</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Título del curso"
      />

      <Text style={styles.label}>Imagen (URL)</Text>
      <TextInput
        style={styles.input}
        value={imagen}
        onChangeText={setImagen}
        placeholder="URL de la imagen"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Categoría</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Categoría del curso"
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Descripción del curso"
        multiline
      />

      <TouchableOpacity
        style={[styles.button, saving && { backgroundColor: "#666" }]}
        onPress={guardarCurso}
        disabled={saving}
      >
        <Text style={styles.buttonText}>{saving ? "Guardando..." : "Guardar Curso"}</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>Lecciones</Text>

      {lecciones.length === 0 ? (
        <Text style={{ textAlign: "center", marginVertical: 10 }}>
          No hay lecciones agregadas.
        </Text>
      ) : (
        lecciones.map((leccion) => (
          <View key={leccion.id} style={styles.leccionCard}>
            <Text style={styles.leccionTitulo}>{leccion.titulo}</Text>
            <Text style={styles.leccionVideo}>{leccion.video}</Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#b80808", marginTop: 5 }]}
              onPress={() => eliminarLeccion(leccion.id)}
            >
              <Text style={styles.buttonText}>Eliminar Lección</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      <View style={styles.newLeccionContainer}>
        <Text style={styles.subtitle}>Agregar Nueva Lección</Text>

        <TextInput
          style={styles.input}
          placeholder="Título de la lección"
          value={newLeccionTitulo}
          onChangeText={setNewLeccionTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="URL del video"
          value={newLeccionVideo}
          onChangeText={setNewLeccionVideo}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={[styles.button, saving && { backgroundColor: "#666" }]}
          onPress={agregarLeccion}
          disabled={saving}
        >
          <Text style={styles.buttonText}>{saving ? "Guardando..." : "Agregar Lección"}</Text>
        </TouchableOpacity>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#086db8",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#086db8",
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#086db8",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 20,
  },
  leccionCard: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#086db8",
  },
  leccionTitulo: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#086db8",
  },
  leccionVideo: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  newLeccionContainer: {
    marginTop: 10,
  },
});
