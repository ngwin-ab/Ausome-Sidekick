import React, { useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGrad: {
        height: 150,
        width: 150,
        borderRadius: 150,
        position: 'absolute',
        bottom: 4,
    },
    buttonParent: {
        height: 150,
        width: 150,
        borderRadius: 150,
        backgroundColor: '#024e51',
    },

    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
    },
});

function AddBtn({ buttonText, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonParent}>
                    <LinearGradient
                        colors={['#5be9aa', '#09949d']}
                        style={styles.buttonGrad}></LinearGradient>
                    <View style={{marginTop: 50}}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default AddBtn;