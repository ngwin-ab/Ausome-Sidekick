import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { StackActions } from '@react-navigation/native';
import AvatarList from '../components/AvatarList';

const AddChild = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [name, setName] = useState('');
    const [like, setLike] = useState('');
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(null);

    const saveData = () => {
        if (!name) {
            Alert.alert('Missing Name', 'Please enter the child\'s name!');
            return;
        }

        const url = 'https://ausome-sidekick-c2c64a71e070.herokuapp.com/kids';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, avatarIndex: selectedAvatarIndex, like: like }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Child data saved:', data);
                navigation.dispatch(StackActions.pop(1));
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.heading, styles.pageHeading]}>Child's name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Text style={styles.heading}>Like:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setLike(text)}
                    value={like}
                />
                <Text style={styles.heading}>Choose an avatar:</Text>
                <AvatarList onSelectAvatar={(index) => setSelectedAvatarIndex(index)}></AvatarList>
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        saveData();
                    }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c859d',
        height: 50,
        width: 100,
        margin: 20,
        borderRadius: 30,
        justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#121b45',
        marginHorizontal: 20,
    },

    pageHeading: {
        marginTop: 20
    },

    input: {
        width: 200,
        height: 40,
        marginHorizontal: 20,
        marginVertical: 15,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },

    avatar: {
        width: 80,
        height: 80,
        marginVertical: 10,
    },

    avatarList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 20
        // paddingHorizontal: 15,
    },
});

export default AddChild;