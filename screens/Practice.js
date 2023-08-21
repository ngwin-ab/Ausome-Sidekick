import React, { useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Practice = ({ navigation }) => {
    const showAlert = () => {
        Alert.alert('', `Antecedent: Dad asked James to put away his dish.\n\nBehavior: James did not follow the request and hit Dad's hands.\n\nConsequence: Dad put James's dish away for him.\n\nPossible function: Avoidance`);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginBottom: 15 }}>
                    <YoutubePlayer
                        height={200}
                        play={false}
                        videoId={'isdL9u_tYIc'}
                    />
                </View>
                <QuizSection />
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <TouchableOpacity style={styles.button} onPress={showAlert}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>EXPLAIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Practice2')}>
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
            <InputBox label='CONSEQUENCE' />
        </View>
    )
}
export default Practice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF3FA',
        height: '100%'
    },

    quizSection: {
        marginHorizontal: '5%',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c859d',
        height: 50,
        width: 100,
        borderRadius: 30,
        justifyContent: 'center',
    },

    input: {
        marginVertical: '1.5%',
        borderWidth: 1,
        backgroundColor: '#ffff',
        height: 50,
        margin: 15,
        borderWidth: 1,
        padding: 10,
    },

    label: {
        fontWeight: 'bold',
        color: '#121b45',
        marginLeft: 15
    }
});