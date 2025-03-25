import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Video from "react-native-video"; // Importa el componente Video

const Lesson = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nombre de la lección</Text>

            <View style={styles.rectanglesContainer}>
                {playVideo ? (
                    <Video
                        source={{uri: "https://drive.google.com/file/d/14B0FVPC8kBtlnqgGgPihQ445K2uiLR_z/view?usp=sharing"}} // Ruta del video
                        style={styles.video}
                        controls
                        resizeMode="contain"
                    />
                ) : (
                    <TouchableOpacity
                        style={styles.rectangle}
                        onPress={() => setPlayVideo(true)} // Activa el video al presionar
                    />
                )}
            </View>
        </View>
    );
};

export default Lesson;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "5%",
    },
    rectangle: {
        width: "100%",
        height: 250,
        backgroundColor: "black",
        borderRadius: 10,
        marginBottom: 10,
    },
    video: {
        width: "100%",
        height: 250,
        borderRadius: 10,
    },
    rectanglesContainer: {
        marginTop: 20,
        width: "100%",
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
});

