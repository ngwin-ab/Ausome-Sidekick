import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Practice = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Practice Screen</Text>
        </View>
    );
}

export default Practice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});