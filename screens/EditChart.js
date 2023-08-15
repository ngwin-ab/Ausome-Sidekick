import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import CalendarBox from '../components/base_components/CalendarBox';

const Separator = () => <View style={styles.separator} />;

const InputBox = ({ label, value, onChangeText }) => {
    return (
        <View>
            <TextInput
                style={{ height: 78, marginHorizontal: 15, marginVertical: 5 }}
                mode="outlined"
                multiline
                label={label}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const EditChart = ({ route, navigation }) => {
    const { chart } = route.params;
    const { kidName } = route.params;
    const [data, setData] = useState([]);

    const [formValues, setFormValues] = useState({
        antecedent: '',
        behavior: '',
        consequence: '',
        function: ''
    });

    useEffect(() => {
        setFormValues({
            antecedent: chart.antecedent,
            behavior: chart.behavior,
            consequence: chart.consequence,
            function: chart.function,
        });
    }, []);

    const saveData = async () => {
        const url = `http://10.0.0.136:443/charts/${chart._id}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            const data = await response.json();

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const deleteChart = async () => {
        try {
            const url = `http://10.0.0.136:443/charts/${chart._id}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                Alert.alert('The chart has been deleted.');
                navigation.dispatch(StackActions.pop(1));
            } else {
                throw new Error('Failed to delete the chart.');
            }
        } catch (error) {
            console.error('Error deleting chart:', error);
        }
    };

    const handleDeleteChart = () => {
        Alert.alert('Are you sure you want to delete this chart?', null, [
            {
                text: 'No',
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => deleteChart(),
            },
        ]);
    };

    return (

        <View style={styles.container}>
            <Text style={styles.heading}>{kidName}</Text>
            <Separator />
            <InputBox
                label="Antecedent"
                onChangeText={(text) => setFormValues({ ...formValues, antecedent: text })}
                value={formValues.antecedent}
            />
            <InputBox
                label="Behavior"
                onChangeText={(text) => setFormValues({ ...formValues, behavior: text })}
                value={formValues.behavior}
            />
            <InputBox
                label="Consequence"
                onChangeText={(text) => setFormValues({ ...formValues, consequence: text })}
                value={formValues.consequence}
            />
            <InputBox
                label="Possible function"
                onChangeText={(text) => setFormValues({ ...formValues, function: text })}
                value={formValues.function}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    saveData();
                    navigation.dispatch(StackActions.pop(1));
                }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleDeleteChart()}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default EditChart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        // alignItems: 'stretch',
        // justifyContent: 'center',
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

    separator: {
        marginVertical: 10,
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#121b45',
        margin: 15,
    },
});