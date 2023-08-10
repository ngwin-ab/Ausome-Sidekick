import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    FlatList,
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import ChartList from '../components/ChartList';

const ChildData = ({ route, navigation }) => {
    const { kidId } = route.params;
    const [name, setName] = useState('');
    const [chartsRecorded, setChartsRecorded] = useState([]);
    const isFocused = useIsFocused();

    const getData = async () => {
        try {
            const url = `http://10.0.0.136:3000/kids/${kidId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setChartsRecorded(data.chartsRecorded);
            setName(data.name);
        } catch (error) {
            console.error('Error fetching data:', error);
        };
    };

    useEffect(() => {
        isFocused && getData();
    }, [isFocused]);

    return (
        <SafeAreaView style={styles.container}>
            {chartsRecorded.length > 0 && (
                <Text style={styles.heading}>{name}</Text>
            )}
            <ChartList
                navigation={navigation}
                chartsRecorded={chartsRecorded}
                name={name}
                kidId={kidId}
            />
            {chartsRecorded.length > 0 && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                    <Button
                        color='rgb(96, 147, 171)'
                        title='Add'
                        onPress={() => navigation.navigate('AddChart', { kidId })}
                    />
                    <Button
                        color='rgb(96, 147, 171)'
                        title='Export'
                        onPress={() => navigation.navigate('AddChart', { kidId })}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

export default ChildData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3c5e6e',
        margin: 15,
    },

    addbox: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        borderColor: 'rgb(123, 165, 185)',
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'dashed',
        backgroundColor: '#fff',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        backgroundColor: 'rgb(196, 216, 228)',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3c5e6e'
    },

    innerText: {
        marginBottom: 10,
        fontSize: 15
    },
});


