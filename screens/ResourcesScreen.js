import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ResourcesScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Resources Screen</Text>
        </View>
    );
}

export default ResourcesScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});