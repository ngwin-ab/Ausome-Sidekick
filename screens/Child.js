import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Child = ({ navigation }) => {
    return (
        <View>
            <Text>Child Screen</Text>
        </View>
    );
}

export default Child;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});