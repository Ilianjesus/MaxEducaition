import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Asegúrate de tener este archivo configurado
import { RefreshControl } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);


  const goToCourse = (curso) => {
    navigation.navigate("Course", { curso });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCursos();
    setRefreshing(false);
  };
  

  const fetchCursos = async () => {
    try {
      const cursosRef = collection(db, "cursos");
      const snapshot = await getDocs(cursosRef);

      const cursosData = await Promise.all(snapshot.docs.map(async doc => {
        const curso = { id: doc.id, ...doc.data() };

        // Obtener lecciones
        const leccionesSnapshot = await getDocs(collection(db, `cursos/${doc.id}/lecciones`));
        curso.lecciones = leccionesSnapshot.docs.map(lec => ({
          id: lec.id,
          ...lec.data()
        }));

        return curso;
      }));

      setCursos(cursosData);
    } catch (error) {
      console.error("Error cargando cursos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, []);

  const renderCourseItem = ({ item, isTop }) => (
    <TouchableOpacity onPress={() => goToCourse(item)} style={isTop ? styles.carouselBox : styles.courseBox}>
      <Image source={{ uri: item.imagen }} style={isTop ? styles.carouselImage : styles.courseImage} />
      <Text style={styles.courseText}>{item.titulo}</Text>
    </TouchableOpacity>
  );

  const topCursos = cursos.slice(0, 10);
  const allCursos = cursos.slice(10);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando cursos...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#086db8"]}
        />
      }
      ListHeaderComponent={
        <>
          <Text style={styles.welcomeText}>Bienvenido!</Text>
          <Text style={styles.title}>Top 10</Text>
          <FlatList
            data={topCursos}
            renderItem={({ item }) => renderCourseItem({ item, isTop: true })}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.subtitle}>Todos los cursos</Text>
        </>
      }
      data={allCursos}
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

