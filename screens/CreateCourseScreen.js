import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const CreateCourseScreen = () => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [lecciones, setLecciones] = useState([{ titulo: "", video: "" }]);

  const handleAddLeccion = () => {
    setLecciones([...lecciones, { titulo: "", video: "" }]);
  };

  const handleLeccionChange = (index, field, value) => {
    const nuevasLecciones = [...lecciones];
    nuevasLecciones[index][field] = value;
    setLecciones(nuevasLecciones);
  };

  const handleCreateCourse = async () => {
    const curso = {
      titulo,
      imagen,
      descripcion,
      categoria,
      creadoEn: Timestamp.now(),
    };

    try {
      // 1. Crear el curso (sin lecciones)
      const cursoRef = await addDoc(collection(db, "cursos"), curso);

      // 2. Agregar cada lección como un documento en la subcolección 'lecciones'
      const leccionesRef = collection(db, "cursos", cursoRef.id, "lecciones");
      await Promise.all(
        lecciones.map((leccion) =>
          addDoc(leccionesRef, {
            ...leccion,
            creadoEn: Timestamp.now(),
          })
        )
      );

      alert("¡Curso creado con éxito!");

      // Limpiar los campos
      setTitulo("");
      setImagen("");
      setDescripcion("");
      setCategoria("");
      setLecciones([{ titulo: "", video: "" }]);
    } catch (error) {
      console.error("Error al crear curso:", error);
      alert("Error al crear el curso.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={styles.title}>Crea un curso</Text>

        <Text style={styles.label}>Título del curso</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>Imagen del curso (URL)</Text>
        <TextInput
          style={styles.input}
          placeholder="https://..."
          value={imagen}
          onChangeText={setImagen}
        />

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />

        <Text style={styles.label}>Categoría</Text>
        <TextInput
          style={styles.input}
          placeholder="Categoría"
          value={categoria}
          onChangeText={setCategoria}
        />

        <Text style={styles.label}>Lecciones</Text>
        {lecciones.map((leccion, index) => (
          <View key={index} style={styles.lessonBlock}>
            <Text style={styles.subLabel}>Título de la lección {index + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="Título"
              value={leccion.titulo}
              onChangeText={(text) => handleLeccionChange(index, "titulo", text)}
            />
            <Text style={styles.subLabel}>Video (URL)</Text>
            <TextInput
              style={styles.input}
              placeholder="https://..."
              value={leccion.video}
              onChangeText={(text) => handleLeccionChange(index, "video", text)}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.buttonSecondary} onPress={handleAddLeccion}>
          <Text style={styles.buttonText}>+ Agregar Lección</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={handleCreateCourse}>
          <Text style={styles.buttonText}>Crear Curso</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateCourseScreen;

// (Estilos igual que antes — no modificados)


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
    textAlign: "center",
    marginBottom: 20,
    color: "#086db8",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: "#086db8",
  },
  subLabel: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    color: "#086db8",
  },
  input: {
    height: 45,
    borderColor: "#086db8",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  lessonBlock: {
    marginBottom: 15,
    backgroundColor: "#f2faff",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#086db8",
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
  buttonSecondary: {
    backgroundColor: "#f2faff",
    borderWidth: 1,
    borderColor: "#086db8",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#086db8",
    fontSize: 16,
    fontWeight: "bold",
  },
});
