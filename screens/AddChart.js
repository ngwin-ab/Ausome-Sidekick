import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import NewChartForm from '../components/NewChartForm';

const AddChart = ({ route, navigation }) => {
    const { kidId } = route.params;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        setting: '',
        antecedent: '',
        behavior: '',
        consequence: '',
    });

    const getData = () => {
        const url = `http://10.0.0.136:3000/kids/${kidId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getData();
        setIsLoading(false);
    }, []);

    const saveData = async () => {
        setIsLoading(true);
        const url = `http://10.0.0.136:3000/kids/${kidId}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            const data = await response.json();
            setIsLoading(false);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (isLoading ? (
        <View>
            <Text>Loading...</Text>
        </View>
    ) : (
        <NewChartForm data={data} saveData={saveData} navigation={navigation} showSaveButton={true} />
    )
    )
};

export default AddChart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3c5e6e',
        margin: 10,
    },
});