import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { StackActions } from '@react-navigation/native';

const AvatarBox = ({ onSelectAvatar } ) => {
    const avatars = [
        require('../assets/Icons/Cat_1.png'),
        require('../assets/Icons/Cat_2.png'),
        require('../assets/Icons/Cat_3.png'),
        require('../assets/Icons/Cat_4.png'),
        require('../assets/Icons/Cat_5.png'),
        require('../assets/Icons/Cat_6.png'),
        require('../assets/Icons/Cat_7.png'),
        require('../assets/Icons/Cat_8.png'),
    ];

    const row1 = avatars.slice(0, 4);
    const row2 = avatars.slice(4);

    const AvatarsRow = ({ avatars }) => {
        return (
            <View style={styles.row}>
                <Separator />
                {avatars.map((avatar, index) => (
                    <TouchableOpacity key={index} onPress={() => onSelectAvatar(avatar)} >
                        <Image source={avatar} style={styles.avatar} resizeMode="contain" />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };
    return (
        <View>
            <AvatarsRow avatars={row1} />
            <AvatarsRow avatars={row2} />
        </View>

    );
}

const AddChild = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [name, setName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const saveData = () => {
        const url = 'http://10.0.0.136:3000/kids';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, avatar: selectedAvatar }),
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
                <Text style={styles.heading}>Child's name:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Separator />
                <Text style={styles.heading}>Choose an avatar:</Text>
                <AvatarBox onSelectAvatar={(avatar) => setSelectedAvatar(avatar)}></AvatarBox>
                <Separator />
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                    <Button
                        title='Save'
                        color='rgb(86, 136, 159)'
                        onPress={() => {
                            saveData();
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464',
        margin: 10,
    },

    separator: {
        marginVertical: 10,
    },

    input: {
        width: 200,
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white'
    },

    avatar: {
        width: 80,
        height: 80,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 15
    },
});

export default AddChild;