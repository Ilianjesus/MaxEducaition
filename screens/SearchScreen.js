import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import cursos from "../models/Cursos";

//SCREN 
const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const navigation = useNavigation();
  
    // Función para filtrar cursos en base al título ingresado
    const handleSearch = (query) => {
      setSearchQuery(query);
  
      if (query.trim() === "") {
        setFilteredCourses([]); // Si está vacío, limpia los resultados
        return;
      }
  
      // Filtra cursos cuyo título contenga la consulta (sin importar mayúsculas/minúsculas)
      const filtered = cursos.filter((curso) =>
        curso.titulo.toLowerCase().includes(query.toLowerCase())
      );
  
      setFilteredCourses(filtered);
    };
  
    // Función para ir a la pantalla del curso seleccionado
    const goToCourse = (curso) => {
      navigation.navigate("Course", { curso });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué curso quieres comenzar?</Text>
  
        {/* Barra de búsqueda */}
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
  
        {/* Lista de resultados */}
        <FlatList
          data={filteredCourses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.rectangle} onPress={() => goToCourse(item)}>
              <Image source={item.imagen} style={styles.courseImage} />
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