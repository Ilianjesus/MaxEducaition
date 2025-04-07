import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video, Audio } from "expo-av"; // Importa Audio de expo-av
import { useRoute } from "@react-navigation/native"; // Importar useRoute

const Lesson = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);
    
    // Obtener los parámetros de navegación
    const route = useRoute();
    const { video, titulo } = route.params; // El 'video' y 'titulo' provienen de Course.js

    useEffect(() => {
        // Configurar el audio para reproducirse en el altavoz del dispositivo
        const setAudioMode = async () => {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                staysActiveInBackground: false,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: false,
                playThroughEarpieceAndroid: false, // Asegura que no se use el auricular del teléfono
            });
        };

        setAudioMode();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titulo}</Text> {/* Muestra el título de la lección */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => setPlayVideo(!playVideo)} // Cambiar entre reproducir y pausar
            >
                <Text style={styles.buttonText}>
                    {playVideo ? "Pausar Video" : "Reproducir Video"}
                </Text>
            </TouchableOpacity>

            <Video
                ref={videoRef}
                source={typeof video === "number" ? video : null} // Verifica si es un require()
                style={styles.video}
                resizeMode="contain"
                shouldPlay={playVideo}
                useNativeControls
/>

        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "5%",
    },
    video: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
});

export default Lesson;
