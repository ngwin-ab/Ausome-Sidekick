import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const DATA = [
    {
        'id': '1',
        'title': 'Behaviors\' functions',
        'description': 'In many cases, challenging behaviors are an inappropriate way for a child to either obtain something desired (e.g.,  attention, a tangible item), avoid something not preferred (e.g., a task or activity) or access sensory input (e.g., enjoy the feeling of rocking).'

    },
    {
        'id': '2',
        'title': 'The\'ABC \'s of behavior',
        'description': 'Every instance of challenging behavior has 3 common components, an'


    },
    {
        'id': '3',
        'title': 'Replacing Challenging Behaviors',
        'description': 'By collecting and analyzing ABC\'s data, a potential function of the challenging behavior can be determined.'
    },
]
const Item = ({ title, description, index }) => (
    <View style={styles.item}>
        <Text>{index + 1}/3</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
);


const OnboardingPage = ({ onPress }) => {

    return (
        <View style={styles.container}>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => <Item title={item.title} description={item.description} index={index} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    bounces={false}
                    snapToInterval={width}
                    decelerationRate="fast"
                    style={{ width: width }}
                />
            </View>

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
        justifyContent: 'center',
    },

    flatListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 100
    },

    item: {
        width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    description: {
        fontSize: 18,
        lineHeight: 24,
        marginTop: 8,
        marginHorizontal: 15
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c859d',
        height: 50,
        width: 100,
        marginBottom: 120,
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

export default OnboardingPage;

