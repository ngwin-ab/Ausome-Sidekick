import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import CalendarBox from '../components/base_components/CalendarBox';

const Separator = () => <View style={styles.separator} />;

const InputBox = props => {
    const [text, setText] = useState("");

    return (
        <View>
            <TextInput style={{ height: 75, marginHorizontal: 15 }}
                mode="outlined"
                multiline
                label={props.label}
                value={text}
                onChangeText={text => setText(text)}
            />
        </ View>
    );
};

const Record = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.container}>
                <Text style={styles.heading}>Child's name</Text>
                <Separator />
                <InputBox label="Setting"></InputBox>
                <InputBox label="Antecedent"></InputBox>
                <InputBox label="Behavior"></InputBox>
                <InputBox label="Consequence"></InputBox>
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <Button
                        title='Save'
                        color='rgb(86, 136, 159)'
                        onPress={() => navigation.dispatch(StackActions.pop(1))}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default Record;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        // alignItems: 'stretch',
        // justifyContent: 'center',
    },

    separator: {
        marginVertical: 10,
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464',
        margin: 10,
    },
});