import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
        <TouchableOpacity style={style.box}>
            <Ionicons name="add-circle" size={24} color="black" />
            <Text>Add a child</Text>
        </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        width: 200,
        height: 100,
        backgroundColor: 'beige',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});