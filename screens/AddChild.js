import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const AddChild = ( {navigation} ) => {
    return (
        <View style={style.container}>
            <Text>Add Child Screen</Text>
        </View>
    );
}

export default AddChild;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});