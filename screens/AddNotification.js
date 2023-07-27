import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const AddNotification = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Congratulations!</Text>
            <Text>Happy Kid {kid.name} has been added to your tracking database!</Text>
        </View>
    );
}

export default AddNotification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontWeight: bold,
        fontSize: 25,
    }
});