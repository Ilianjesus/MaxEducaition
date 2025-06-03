import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const CourseScreen = () => {
    const navigation = useNavigation();
    const [randomCourses, setRandomCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const db = getFirestore();

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const cursosRef = collection(db, "cursos");
                const cursosSnap = await getDocs(cursosRef);
                const allCourses = cursosSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Seleccionar cursos aleatorios (por ejemplo, 5)
                const shuffled = allCourses.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 5);
                setRandomCourses(selected);
            } catch (error) {
                console.error("Error al cargar cursos:", error);
            }
            setLoading(false);
        };

        fetchCourses();
    }, []);

    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <Text style={styles.title}>Cursos Recomendados</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#086db8" />
            ) : (
                <ScrollView style={styles.rectanglesContainer} contentContainerStyle={{ alignItems: "center" }}>
                    {randomCourses.length > 0 ? (
                        randomCourses.map((curso) => (
                            <TouchableOpacity
                                key={curso.id}
                                style={styles.rectangle}
                                onPress={() => navigation.navigate("Course", { curso })}
                            >
                                <Text style={styles.courseTitle}>{curso.titulo}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.noCoursesText}>No hay cursos disponibles por el momento.</Text>
                    )}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "5%",
        marginBottom: 20,
    },
    rectanglesContainer: {
        width: "100%",
    },
    rectangle: {
        width: "90%",
        height: 80,
        backgroundColor: "#086db8",
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    courseTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    noCoursesText: {
        textAlign: "center",
        fontSize: 16,
        color: "#777",
    },
});

export default CourseScreen;
