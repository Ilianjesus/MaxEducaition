import React, { useState } from "react";
import { 
    View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, 
    KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Usa tu archivo de configuración

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Usuario autenticado:", user.email);
            navigation.replace("MyTabs"); // Redirigir tras login exitoso
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            Alert.alert("Error", "Correo o contraseña incorrectos");
        }
    };

    const handleCreateAccount = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Cuenta creada:")
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                console.error("Error al crear cuenta:", error);
                Alert.alert("Error", "No se pudo crear la cuenta. Inténtalo de nuevo.");
            });
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Iniciar sesión</Text>
                    <Image style={styles.logo} source={require("../assets/logo.png")} />

                    <View style={styles.container2}>
                        <Text style={styles.MaxEducation}>MAX EDUCATION</Text>

                        <Text style={[styles.subtitle, { marginBottom: 30, fontWeight: "700", fontSize: 30 }]}>
                            Datos de acceso
                        </Text>

                        <Text style={styles.subtitle}>Correo</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Correo"
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />

                        <Text style={styles.subtitle}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Ingresa tu contraseña"
                            secureTextEntry
                        />

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Iniciar sesión</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                            <Text style={styles.buttonText}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#086db8",
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    container2: {
        width: "100%",
        backgroundColor: "#f8f8f8",
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        borderBottomLeftRadius: 70,
        
        padding: 40,
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#086db8",
        alignSelf: "flex-start",
    },
    MaxEducation: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#086db8",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "white",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    button: {
        width: "100%",
        height: 40,
        backgroundColor: "#f3ba53",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});