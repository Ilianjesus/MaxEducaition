import React, { useEffect, useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = getAuth().currentUser;

  const name = user?.displayName || "Sin nombre";
  const email = user?.email || "Correo no disponible";
  const profilePicture = user?.photoURL || "https://via.placeholder.com/100";
  const [createdCourses, setCreatedCourses] = useState(0);

  useEffect(() => {
    const fetchCoursesCount = async () => {
      if (!user) return;
      try {
        const q = query(
          collection(db, "cursos"),
          where("creadorId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        setCreatedCourses(snapshot.size); // Número total de cursos
      } catch (error) {
        console.error("Error al cargar cursos:", error);
      }
    };

    fetchCoursesCount();
  }, [user]);

  const handleLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que quieres salir?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Salir", onPress: () => navigation.replace("Login") }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: profilePicture }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileConfig")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.counter}>Cursos Creados</Text>
          <Text style={styles.statNumber}>{createdCourses}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Recommendations")} style={styles.button}>
        <Text style={styles.buttonText}>Ir a Recomendaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CreateCourse")} style={styles.button}>
        <Text style={styles.buttonText}>Crear un Curso</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CursosCreados")} style={styles.button}>
        <Text style={styles.buttonText}>Ver Cursos Creados</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
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
    borderWidth: 2,
    borderColor: "#086db8",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#086db8",
    marginTop: 10,
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
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
