import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesion</Text>
            <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
            />
            
            <View style={styles.container2}>
                
                <Text style= {styles.MaxEducation}>MAX EDUCATION</Text>
                
                <Text style={[styles.subtitle, {marginBottom: 30, fontWeight: "700", fontSize: 30}]}>Datos de acceso</Text>

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

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("MyTabs")}
                >
                    <Text style={styles.buttonText}>Iniciar sesion</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:90,
        justifyContent: "centerTop",
        alignItems: "center",
        backgroundColor: "#086db8",
    },
    container2: {
        flex: 1,                    // Ocupa todo el espacio disponible
        justifyContent: "center",    // Centra los elementos verticalmente
        alignItems: "center",        // Centra los elementos horizontalmente
        backgroundColor: "#f8f8f8",  // Color de fondo
        position: "absolute",        // Posición absoluta para ajustar la vista
        bottom: 0,                   // Anclar la vista en la parte inferior
        width: "180%",               // Que ocupe todo el ancho
        height: "70%",               // Que ocupe la mitad de la pantalla
        borderTopLeftRadius: 70,      // Esquina superior izquierda redondeada
        borderTopRightRadius: 70,     // Esquina superior derecha redondeada
        paddingHorizontal: 40,        // Padding horizontal
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white",
        
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#086db8",
        alignSelf: "flex-start",
    },

    MaxEducation: {
        position: "absolute", //posicion absoluta
        top: 50, //posicion top
        alignSelf: "center", //centrar horizontalmente
        fontSize: 35,
        fontWeight: "bold", //grosor texto
        color: "#086db8", //color del texto
    },
    input: {
        width: "100%", // Hace que los inputs ocupen todo el ancho disponible
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
