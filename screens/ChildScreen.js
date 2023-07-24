import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Child Screen</Text>
        </View>
    );
}

export default ChildScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});