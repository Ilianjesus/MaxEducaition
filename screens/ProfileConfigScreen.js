import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileConfigScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Configuración de Perfil</Text>

      {/* Secciones del perfil */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Foto de perfil</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cambiar foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Nombre</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar nombre</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Correo</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Actualizar correo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Contraseña</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Cursos</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver mis cursos</Text>
        </TouchableOpacity>
      </View>
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
