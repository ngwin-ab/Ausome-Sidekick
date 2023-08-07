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
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.container}>
                <Text style={styles.heading}>{data.name}</Text>
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
        </ScrollView>)
    )
};

export default AddChart;

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