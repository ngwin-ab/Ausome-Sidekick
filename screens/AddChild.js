import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

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
                <Text>Add a child</Text>
                <Separator />
                <Text>Child's name:</Text>
                <Separator />
                <InputBox></InputBox>
                <Text>Child's likes:</Text>
                <Separator />
                <InputBox></InputBox>
                <Text>Child's dislikes:</Text>
                <Separator />
                <InputBox></InputBox>
                <Button
                    title='Save'
                    color='#061464'
                    onPress={() => navigation.dispatch(StackActions.pop(1))}
                />
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