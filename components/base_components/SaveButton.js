import React from "react";
import { View, Button, StyleSheet } from 'react-native';

const SaveButton = () => {
    return (
            <View style={styles.fixToText}>
            <Button title="Save" style={styles.button} color="blue" />
            </View>
    );
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 20
    },

    button: {
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default SaveButton;
