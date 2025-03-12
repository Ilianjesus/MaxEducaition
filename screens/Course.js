import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Course = () => {
    return (
        <View>
            <Text 
            style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "5%"
            }}
            >This is a course</Text>

            <Text 
            style={{
                fontSize: 20,
                marginTop: "20%",
                marginLeft: "5%",
            }}
            >Course description</Text>
        </View>
        
    )
}

export default Course;