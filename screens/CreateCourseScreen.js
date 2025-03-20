import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CreateCourseScreen = () => {
    const [nivel, setNivel] = useState("");
    const [numero, setNumero] = useState("");
    const [imagen, setImage] = useState(null);

    //Funcion para validar que el nivel este entre 1 y 10
    const handleNivelChange= (text) => {
        //Remplzar todo lo que no sea un numero
        let num = text.replace(/[^0-9]/g, '');

        //Convierte a numero y verifica que este entre 1 y 10
        if (num != ""){
            let parsedNum = parseInt(num, 10);
            if (parsedNum < 10){
                num = "1"; //Si es menor a 1 lo ajustamos a 1
        } else if (parsedNum > 10){
            num = "10"; //Si es mayor a 10 lo ajustamos a 10
        }
    }
    setNivel(num);
    };

    //Funcion para validacion para solo numeros 
    const handleNummeroChange = (text) => {
        //Remplzar todo lo que no sea un numero
        let num = text.replace(/[^0-9]/g, '');
        setNumero(num);
    };

    //Funcion para seleccionar una imagen
    const handleImagePick = async () => {
        // Solicitar permisos
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Se requieren permisos para acceder a la galería.");
            return;
        }
    
        // Abrir la galería
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        // Verificar si el usuario seleccionó una imagen
        if (!result.canceled && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };
    
    


    //Retornamos la vista
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create a course</Text>

            <Text>Nombre del curso</Text>
            <TextInput style={styles.input} placeholder="Course name"></TextInput>
            
            <Text>Breve descripcion del curso</Text>
            <TextInput style={styles.input} placeholder="Description"></TextInput>
            
            <Text>A que categoria pertenece este curso</Text>
            <TextInput style={styles.input} placeholder="Category"></TextInput>
            
            <Text>En una escala del 1 al 10 que tan avanzado es este curso </Text>
            <TextInput 
            style={styles.input} 
            placeholder="Un numero entre 1 y 10" 
            keyboardType="numeric"
            value = {nivel}
            onChangeText = {handleNivelChange} //Validamos en tiempo real {}
            ></TextInput>
            
            <Text>Cuantas lecciones contiene el curso</Text>
            <TextInput
            style={styles.input}
            placeholder="Numero de lecciones"
            keyboardType="numeric"
            value = {numero}
            onChangeText = {handleNummeroChange}
            ></TextInput>

            <Text>Imagen del curso</Text>
            {imagen && <Image source={{ uri: imagen }} style={styles.image} />}
            <TouchableOpacity style={styles.button} onPress={handleImagePick}>
                <Text style={styles.buttonText}>Seleccionar imagen</Text>
            </TouchableOpacity>

            <Text>Lecciones</Text>
            

        </ScrollView>
    );
}

export default CreateCourseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: "5%"
    },
    subtitle: {
        fontSize: 20,
        marginTop: "20%",
        marginLeft: "5%",
        textAlign: "center",
    },

    input: {
        flex: 1,
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        backgroundColor: "white"
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginVertical: 10,
        borderRadius: 10,
    }
    
});