import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
    {
        'id': 1,
        'title': 'Behaviors\' functions',
        'description': 'Everything children do, they do for specific reasons. In many cases, challenging'

    },
    {
        'id': 2,
        'title': 'The\'ABC \'s of behavior',
        'description': 'Every instance of challenging behavior has 3 common components, an'


    },
    {
        'id': 3,
        'title': 'Replacing Challenging Behaviors',
        'description': 'By collecting and analyzing ABC\'s data, a potential function of the challenging behavior can be determined.'
    },
]
const Item = () => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{description}</Text>
    </View>
);

const OnboardingScreen = ({ onPress }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Everything children do, they do for specific reasons. In many cases, challenging
        behaviors are an inappropriate way for a child to either obtain something desired (e.g.,
        attention, a tangible item), avoid something not preferred (e.g., a task or activity) or access sensory input (e.g., enjoy the feeling of rocking).
        </Text> */}
        <FlatList
                data={DATA}
                renderItem={item}
                keyExtractor={item => item.id}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        alignItem: 'center',
        justifyContent: 'center'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c859d',
        height: 50,
        width: 100,
        marginTop: 20,
        borderRadius: 30,
        justifyContent: 'center',
    },

    text: {
        marginHorizontal: 15,
        textAlign: 'auto',
        fontSize: 18
    }
}
)

export default OnboardingScreen;