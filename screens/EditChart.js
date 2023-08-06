import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import CalendarBox from '../components/base_components/CalendarBox';

const Separator = () => <View style={styles.separator} />;

const InputBox = ({ label, value, onChangeText }) => {
    return (
        <View>
            <TextInput
                style={{ height: 75, marginHorizontal: 15 }}
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

    // const getData = () => {
    //     const url = `http://10.0.0.136:3000/kids/${kidId}`;
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setData(result);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // };

    useEffect(() => {
        //getData();
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

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
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
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <Button
                        title="Save"
                        color="rgb(86, 136, 159)"
                        onPress={() => {
                            saveData();
                            navigation.dispatch(StackActions.pop(1));
                        }}
                    />
                </View>
            </View>
        </ScrollView>
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