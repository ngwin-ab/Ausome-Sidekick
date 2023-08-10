import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';

const Practice3 = ({ navigation }) => {
    const showAlert = () => {
        Alert.alert('Test');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginBottom: -70 }}>
                    <YoutubePlayer
                        height={300}
                        play={false}
                        videoId={'84Z26S6XIQU'}
                    />
                </View>
                <QuizSection />
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
            <TouchableOpacity style={styles.button} onPress={showAlert}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>EXPLAIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const QuizSection = () => {
    const InputBox = ({ value, onChangeText, label }) => {
        return (
            <View>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input}
                    multiline
                    numberOfLines={2}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
        )
    };

    return (
        <View style={styles.quizSection}>
            <InputBox label='ANTECEDENT' />
            <InputBox label='BEHAVIOR' />
            <InputBox label='SETTING' />
            <InputBox label='POSSIBLE FUNCTION' />
        </View>
    )
}
export default Practice3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(96, 147, 171)',
        height: 50,
        width: 100,
        borderRadius: 30,
        justifyContent: 'center',
    },

    quizSection: {
        marginHorizontal: 15,
    },

    input: {
        // height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ffff'
    },

    label: {
        fontWeight: 'bold'
    }
});