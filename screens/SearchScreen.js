import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Asegúrate que tienes esta exportación de db configurada

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allCourses, setAllCourses] = useState([]); // Todos los cursos desde Firebase
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigation = useNavigation();

  // 🔥 Cargar los cursos desde Firebase
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const cursosSnapshot = await getDocs(collection(db, "cursos"));
        const cursosData = cursosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllCourses(cursosData);
      } catch (error) {
        console.error("Error al obtener cursos desde Firebase:", error);
      }
    };

    fetchCourses();
  }, []);

  // 🔍 Filtrar cursos
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredCourses([]);
      return;
    }

    const filtered = allCourses.filter((curso) =>
      curso.titulo.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCourses(filtered);
  };

  const goToCourse = (curso) => {
    navigation.navigate("Course", { curso });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué curso quieres comenzar?</Text>

      {/* 🔎 Input de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(searchQuery)}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* 📄 Lista de resultados */}
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.rectangle} onPress={() => goToCourse(item)}>
            <Image
              source={{ uri: item.imagen }} // Asegúrate que en Firebase usas URL de imagen
              style={styles.courseImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.courseTitle}>{item.titulo}</Text>
              <Text style={styles.courseCategory}>{item.categoria}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
    marginTop: 60,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#086db8",
    padding: 10,
    borderRadius: 5,
  },
  rectangle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: "#086db8",
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  courseImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 15,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  courseCategory: {
    fontSize: 14,
    color: "white",
  },
});

export default SearchScreen;
