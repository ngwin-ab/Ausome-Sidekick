import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const Resources = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Resources Screen</Text>
        </View>
    );
}

export default Resources;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(163, 196, 204)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});