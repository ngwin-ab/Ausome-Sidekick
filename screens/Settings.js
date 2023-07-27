import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(167, 200, 215)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});