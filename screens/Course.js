import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Course = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text 
            style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "5%"
            }}
            >Nombre del curso</Text>

            <Text 
            style={{
                fontSize: 20,
                marginTop: "20%",
                marginLeft: "5%",
            }}
            >Lecciones</Text>

            <TouchableOpacity
            onPress={() => navigation.navigate("Lesson")}
            style={styles.button}
            >
                <Text style={styles.buttonText}
                >Go to Lesson</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
    }
})

export default Course;