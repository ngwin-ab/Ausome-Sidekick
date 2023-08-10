import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';

const Practice2 = ({ navigation }) => {
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
                        videoId={'vmKEuybY7Jo'}
                    />
                </View>
                <QuizSection />
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <TouchableOpacity style={styles.button} onPress={showAlert}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>EXPLAIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Practice3')}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>NEXT</Text>
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
export default Practice2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    quizSection: {
        marginHorizontal: 15,
    },

    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(96, 147, 171)',
        height: 50,
        width: 100,
        borderRadius: 30,
        justifyContent: 'center',
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