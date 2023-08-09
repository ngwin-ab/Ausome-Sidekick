import React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import YoutubePlayer from 'react-native-youtube-iframe';

const Practice2 = ({ navigation }) => {
    const showAlert = () => {
        Alert.alert('Test');
    };

    return (
        <ScrollView style={styles.container}>
            <Text>Watch the video and answer the following question</Text>
            <View style={{ marginTop: 20, marginBottom: -80 }}>
                < YoutubePlayer
                    height={300}
                    play={false}
                    videoId={'vmKEuybY7Jo'}
                    margin={0}
                />
            </View>
            <QuizSection />
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', margin: 20 }}>
                <Button
                    color='rgb(96, 147, 171)'
                    title='Show Answer'
                    onPress={showAlert}
                />
                <Button
                    color='rgb(96, 147, 171)'
                    title='Next Question'
                    onPress={() => navigation.navigate('Practice3')}
                />
            </View>
        </ScrollView >
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