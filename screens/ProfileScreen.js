import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Contenedor del perfil */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="white" />
        </View>
        <Text style={styles.email}>Usuario@example.com</Text>
        <Button
          title="Editar Perfil"
          onPress={() => navigation.navigate("ProfileConfig")}
          color="#086db8"
        />
      </View>

      {/* Contadores de cursos */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.counter}>Cursos Completados</Text>
          <Text style={styles.statNumber}>0</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.counter}>Cursos en Progreso</Text>
          <Text style={styles.statNumber}>0</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.counter}>Cursos Creados</Text>
          <Text style={styles.statNumber}>0</Text>
        </View>
      </View>

      {/* Botones */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Recommendations")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ir a Recomendaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateCourse")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Crear un Curso</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CursosCreados")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ver Cursos Creados</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#086db8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#086db8",
    width: "30%",
    shadowColor: "#086db8",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  counter: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#086db8",
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
