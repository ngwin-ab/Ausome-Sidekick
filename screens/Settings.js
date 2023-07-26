import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});