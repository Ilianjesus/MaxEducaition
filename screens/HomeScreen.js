import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import cursos from "../models/Cursos";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToCourse = (curso) => {
    navigation.navigate("Course", { curso });
  };

  const renderCourseItem = ({ item, isTop }) => (
    <TouchableOpacity onPress={() => goToCourse(item)} style={isTop ? styles.carouselBox : styles.courseBox}>
      <Image source={item.imagen} style={isTop ? styles.carouselImage : styles.courseImage} />
      <Text style={styles.courseText}>{item.titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList style={styles.container}
      ListHeaderComponent={
        <>
          <Text style={styles.welcomeText}>Bienvenido Ilian!</Text>
          <Text style={styles.title}>Top 10</Text>
          <FlatList
            data={cursos.slice(0, 10)}
            renderItem={({ item }) => renderCourseItem({ item, isTop: true })}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.subtitle}>Todos los cursos</Text>
        </>
      }
      data={cursos.slice(10)}
      renderItem={({ item }) => renderCourseItem({ item, isTop: false })}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#086db8",
  },
  welcomeText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 60,
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 10,
    color: "white",
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 10,
    color: "white",
  },
  carouselContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#086db8",
    paddingBottom: 10,
  },
  carouselBox: {
    width: 120,
    height: 140,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  carouselImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
    resizeMode: "contain",
  },
  courseGrid: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: "#086db8",
  },
  courseBox: {
    width: "48%",
    height: 180,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: "1%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  courseImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
    resizeMode: "contain",
  },
  courseText: {
    fontSize: 14,
    textAlign: "center",
    color: "#086db8",
    fontWeight: "bold",
  },
});
