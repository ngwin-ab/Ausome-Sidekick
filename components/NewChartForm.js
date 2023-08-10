import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';

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

const NewChartForm = ({ data, saveData, navigation }) => {
    const [formValues, setFormValues] = useState({
        setting: '',
        antecedent: '',
        behavior: '',
        consequence: '',
    });

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.container}>
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
                        color="rgb(96, 147, 171)"
                        onPress={() => {
                            saveData(formValues);
                            navigation.dispatch(StackActions.pop(1));
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    separator: {
        marginVertical: 10,
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3c5e6e',
        margin: 10,
    },
});

export default NewChartForm;
