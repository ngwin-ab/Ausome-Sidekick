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
        setting: '',
        antecedent: '',
        behavior: '',
        consequence: '',
    });

    useEffect(() => {
        setFormValues({
            setting: chart.setting,
            antecedent: chart.antecedent,
            behavior: chart.behavior,
            consequence: chart.consequence
        });
    }, []);

    const saveData = async () => {
        const url = `http://10.0.0.136:3000/charts/${chart._id}`;
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
            const url = `http://10.0.0.136:3000/charts/${chart._id}`;
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
                label="Setting"
                onChangeText={(text) => setFormValues({ ...formValues, setting: text })}
                value={formValues.setting}
            />
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <Button
                    color='rgb(86, 136, 159)'
                    title='Save Chart'
                    onPress={() => {
                        saveData();
                        navigation.dispatch(StackActions.pop(1));
                    }}
                />
                <Button
                    color='rgb(86, 136, 159)'
                    title='Delete Chart'
                    onPress={() => handleDeleteChart()}
                />
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

    separator: {
        marginVertical: 10,
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464',
        margin: 10,
    },
});