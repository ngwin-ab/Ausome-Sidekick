import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputBox = props => {
    const [text, setText] = useState("");

    return (
        <View>
            <TextInput style={{ height: 80, paddingTop: 0, margin: 10 }}
                mode="outlined"
                multiline
                label={props.label}
                value={text}
                onChangeText={text => setText(text)}
            />
        </ View>
    );
};

const SaveButton = () => {
    return (
            <View style={styles.fixToText}>
            <Button title="Save" style={styles.button} color="blue" />
            </View>
    );
}
const RecordScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.container}>
                <Text>Record new ABC chart</Text>
                <InputBox label="Setting"></InputBox>
                <InputBox label="Antecedent"></InputBox>
                <InputBox label="Behavior"></InputBox>
                <InputBox label="Consequence"></InputBox>
                <SaveButton></SaveButton>
            </View>
        </ScrollView>
    );
}

export default RecordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 20
    },

    button: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});