import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SaveButton from "../components/SaveButton";

const InputBox = () => {
    const [text, onChangeText] = React.useState('');

    return (
        <TextInput
            style={style.input}
            onChangeText={onChangeText}
            value={text}
        />
    );
};

const AddChild = ({ navigation }) => {
    return (
            <View style={style.container}>
                <Ionicons name="person-add-sharp" size={50} color="#061464" />
                <Separator />
                <Text>Enter child's information:</Text>
                <Separator />
                <Text>Child's name:</Text>
                <InputBox></InputBox>
                <SaveButton></SaveButton>
            </View>
    );
}

const Separator = () => <View style={style.separator} />;

const style = StyleSheet.create({
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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddChild;