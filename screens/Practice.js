import React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';

const Practice = ({ navigation }) => {
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
                        videoId={'isdL9u_tYIc'}
                    />
                </View>
                <QuizSection />
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <Button
                    color='rgb(96, 147, 171)'
                    title='Show Answer'
                    onPress={showAlert}
                />
                <Button
                    color='rgb(96, 147, 171)'
                    title='Next Question'
                    onPress={() => navigation.navigate('Practice2')}
                />
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
export default Practice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
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