import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    const goToCourse = () => {
        navigation.navigate("Course");
    };

    const courses = [
        { id: '1', title: 'Curso 1' },
        { id: '2', title: 'Curso 2' },
        { id: '3', title: 'Curso 3' },
        { id: '4', title: 'Curso 4' },
        { id: '5', title: 'Curso 5' },
        { id: '6', title: 'Curso 6' },
        { id: '7', title: 'Curso 7' },
        { id: '8', title: 'Curso 8' },
        { id: '9', title: 'Curso 9' },
        { id: '10', title: 'Curso 10' },
    ];

    const additionalBoxes = new Array(20).fill(null).map((_, index) => ({
        id: `${index + 1}`,
        title: `Cuadro ${index + 1}`
    }));

    return (
        <FlatList
            ListHeaderComponent={
                <>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    marginTop: 60,
                    color: 'white',
                }}>Bienvenid@!</Text>
                    <Text style={styles.title}>Top 10</Text>

                    <FlatList
                        data={courses}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={goToCourse}
                                style={styles.carouselBox}
                            >
                                <Text style={styles.buttonText}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.carouselContainer}
                    />

                    <Text style={styles.subtitle}>Todos los cursos</Text>
                </>
            }
            data={additionalBoxes}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={goToCourse}
                    style={styles.box}
                >
                    <Text style={styles.buttonText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={[styles.boxListContainer, { backgroundColor: '#086db8' }]}
            />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#086db8', // Fondo de la pantalla
    },
    title: {
        fontSize: 30,
        textAlign: 'left',
        marginBottom: 20,
        marginTop: 40,
        
        color: 'white', // Texto en blanco para contrastar con el fondo azul
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'left',
        marginVertical: 10,
        color: 'white', // Texto en blanco
    },
    carouselContainer: {
        marginBottom: 20,
    },
    carouselBox: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff', // Cuadros blancos
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000', // Sombra para mejor contraste
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Sombra en Android
    },
    boxContainer: {
        width: '100%',
        marginTop: 20,
    },
    boxListContainer: {
        marginBottom: 20,
    },
    box: {
        width: '48%',
        height: 150,
        backgroundColor: '#ffffff', // Cuadros blancos
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        fontSize: 15,
        textAlign: "center",
        color: "#086db8", // Texto azul para contraste
        fontWeight: 'bold',
    }
});


export default HomeScreen;
