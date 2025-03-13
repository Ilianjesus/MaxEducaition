import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const CourseScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                }}
            >
                Mis Cursos
            </Text>

            {/* ScrollView que envuelve solo los rectángulos */}
            <ScrollView 
                style={styles.rectanglesContainer}
                contentContainerStyle={{ alignItems: "center" }}
            >
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    rectanglesContainer: {
        marginTop: 20,
        width: "100%",
    },
    rectangle: {
        width: "80%",
        height: 80, 
        backgroundColor: "#ddd", 
        marginBottom: 10,
        borderRadius: 10, 
    }
});

export default CourseScreen;
