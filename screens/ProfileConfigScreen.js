import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { getAuth, updateProfile } from "firebase/auth";

const ProfileConfigScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Estado local para los inputs
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Al montar el componente, cargar datos actuales del usuario
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }
    if (photoURL && !isValidUrl(photoURL)) {
      Alert.alert("Error", "La URL de la foto no es válida");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL.trim() || null,
      });
      Alert.alert("Éxito", "Perfil actualizado correctamente");
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar el perfil");
      console.error(error);
    }
  };

  // Función simple para validar URL (no 100% perfecta)
  const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Configuración de Perfil</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Foto de perfil (URL)</Text>
        <TextInput
          style={styles.input}
          placeholder="https://ejemplo.com/mi-foto.jpg"
          value={photoURL}
          onChangeText={setPhotoURL}
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu nombre"
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileConfigScreen;

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
  section: {
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
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#086db8",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#086db8",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#086db8",
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
