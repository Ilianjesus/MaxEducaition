import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  RefreshControl,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCoursesCount = async () => {
    if (!user) return;
    try {
      const q = query(
        collection(db, "cursos"),
        where("creadorId", "==", user.uid)
      );
      const snapshot = await getDocs(q);
      setCreatedCourses(snapshot.size);
    } catch (error) {
      console.error("Error al cargar cursos:", error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCoursesCount();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCoursesCount();
  }, [user]);

  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro de que quieres salir?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Salir", onPress: () => navigation.replace("Login") },
    ]);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#086db8"]}
        />
      }
    >
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={{ uri: profilePicture }} style={styles.avatar} />
        </TouchableOpacity>
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

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>

      {/* Modal para mostrar la imagen en grande */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <Pressable
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        >
          <Image source={{ uri: profilePicture }} style={styles.fullImage} />
        </Pressable>
      </Modal>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
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
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  counter: {
    fontSize: 14,
    color: "#086db8",
    marginBottom: 5,
    fontWeight: "bold",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#086db8",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: "#ff3b30",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
 