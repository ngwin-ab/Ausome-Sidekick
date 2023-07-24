import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    );
}

export default SettingsScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});