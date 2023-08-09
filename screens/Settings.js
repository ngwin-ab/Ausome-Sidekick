import React from "react";
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Account</Text>
            <Text style={styles.heading}>Reminders</Text>
            <Text style={styles.heading}>Invite family</Text>
            <Text style={styles.heading}>Language</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                    <Button
                        title='Log Out'
                        color='rgb(96, 147, 171)'
                        onPress={() => {}}
                    />
            </View>
        </ScrollView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3c5e6e',
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
});