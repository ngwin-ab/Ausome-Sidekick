import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AvatarList = ({ onSelectAvatar }) => {
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

    return (
        <View style={styles.avatarList}>
            {avatars.map((avatar, index) => (
                <TouchableOpacity key={index} onPress={() => onSelectAvatar(index)}>
                    <Image source={avatar} style={styles.avatar} resizeMode="contain" />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default AvatarList;

const styles = StyleSheet.create({
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
        paddingHorizontal: 15,
    },
})