import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.box}
            onPress={() => navigation.navigate('AddChild')}>
                <Ionicons name="add-circle" size={24} color="black" />
                <Text>Add a child</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(167, 200, 215)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        width: 200,
        height: 100,
        backgroundColor: 'rgb(212, 222, 227)',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});