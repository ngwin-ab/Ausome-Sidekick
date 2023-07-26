import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SaveButton from "../components/base_components/SaveButton";

const InputBox = () => {
    const [text, onChangeText] = React.useState('');

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
    );
};

const AddChild = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Ionicons name="person-add-sharp" size={50} color="#061464" />
                <Separator />
                <Text>Enter child's information:</Text>
                <Separator />
                <Text>Child's name:</Text>
                <Separator />
                <InputBox></InputBox>
                <SaveButton onPress={() => navigation.navigate('AddNotification')}></SaveButton>
            </View>
        </>
    );
}

const Separator = () => <View style={styles.separator} />;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddChild;