import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Lesson = () => {
    return (
        <View style={styles.container}>
            <Text 
            style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "5%"
            }}
            >Nombre de la lección</Text>

            <View style={styles.rectanglesContainer}>
                <TouchableOpacity style={styles.rectangle} />
            </View>


        </View>
        
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: "100%",
        height: 250,
        backgroundColor: "black",
        borderRadius: 10,
        marginBottom: 10,
    },
    rectanglesContainer: {
        marginTop: 20,
        width: "100%",
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 0,
        backgroundColor: "#f8f8f8",
        marginTop: 10,
    },
});
export default Lesson;