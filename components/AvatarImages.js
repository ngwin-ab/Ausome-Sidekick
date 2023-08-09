import React from 'react';
import { Image, StyleSheet } from 'react-native';

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

const AvatarImages = ({ index }) => {
    return <Image source={avatars[index]} style={styles.avatar} resizeMode='contain'/>;
};

export default AvatarImages;

const styles = StyleSheet.create({
    avatar: {
        width: 95,
        height: 95,
        marginRight: 25,
    },
})