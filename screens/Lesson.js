import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video, Audio } from "expo-av";
import { useRoute } from "@react-navigation/native";

const Lesson = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const route = useRoute();
  const { video, titulo } = route.params;

  useEffect(() => {
    const setAudioMode = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: false,
          playThroughEarpieceAndroid: false,
        });
      } catch (error) {
        console.error("Error configurando el modo de audio:", error);
      }
    };

    setAudioMode();

    return () => {
      if (videoRef.current) {
        videoRef.current.pauseAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>

      <View style={styles.card}>
        {video ? (
          <Video
            ref={videoRef}
            source={{ uri: video }}
            style={styles.video}
            resizeMode="contain"
            shouldPlay={playVideo}
            useNativeControls
          />
        ) : (
          <Text style={styles.errorText}>No hay video disponible.</Text>
        )}

        <TouchableOpacity
          style={styles.playButton}
          onPress={() => setPlayVideo(!playVideo)}
        >
          <Text style={styles.playButtonText}>
            {playVideo ? "⏸ Pausar" : "▶ Reproducir"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e1e1e",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  video: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  playButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  playButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },
});

export default Lesson;
