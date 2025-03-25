import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const CreateCourseScreen = () => {
  const [nivel, setNivel] = useState("");
  const [numero, setNumero] = useState("");
  const [imagen, setImage] = useState(null);

  // Función para validar que el nivel esté entre 1 y 10
  const handleNivelChange = (text) => {
    let num = text.replace(/[^0-9]/g, "");

    if (num !== "") {
      let parsedNum = parseInt(num, 10);
      if (parsedNum < 1) {
        num = "1";
      } else if (parsedNum > 10) {
        num = "10";
      }
    }
    setNivel(num);
  };

  // Función para validación de solo números
  const handleNummeroChange = (text) => {
    let num = text.replace(/[^0-9]/g, "");
    setNumero(num);
  };

  // Función para seleccionar una imagen
  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Se requieren permisos para acceder a la galería.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
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

        <Text style={styles.label}>Nombre del curso</Text>
        <TextInput style={styles.input} placeholder="Nombre del curso" />

        <Text style={styles.label}>Breve descripción del curso</Text>
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          multiline
        />

        <Text style={styles.label}>Categoría del curso</Text>
        <TextInput style={styles.input} placeholder="Categoría" />

        <Text style={styles.label}>Nivel del curso (1-10)</Text>
        <TextInput
          style={styles.input}
          placeholder="Nivel"
          keyboardType="numeric"
          value={nivel}
          onChangeText={handleNivelChange}
        />

        <Text style={styles.label}>Número de lecciones</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de lecciones"
          keyboardType="numeric"
          value={numero}
          onChangeText={handleNummeroChange}
        />

        <Text style={styles.label}>Imagen del curso</Text>
        {imagen && <Image source={{ uri: imagen }} style={styles.image} />}
        <TouchableOpacity style={styles.button} onPress={handleImagePick}>
          <Text style={styles.buttonText}>Seleccionar imagen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Curso creado con éxito!")}
        >
          <Text style={styles.buttonText}>Crear Curso</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateCourseScreen;

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
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#086db8",
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
