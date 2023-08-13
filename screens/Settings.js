import React from "react";
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Account</Text>
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="person" size={30} color="#c2c3c4" />
                </TouchableOpacity>
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={{ fontSize: 18, color: '#1e3041' }}>Account information</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="arrow-forward" size={30} color="grey" />
                </TouchableOpacity>
            </View>

            <Text style={styles.heading}>Extra Feature</Text>
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="alarm" size={30} color="#c2c3c4" />
                </TouchableOpacity>
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={{ fontSize: 18, color: '#1e3041' }}>Set reminders</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="arrow-forward" size={30} color="grey" />
                </TouchableOpacity>
            </View>

            <Text style={styles.heading}>Invite</Text>
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="people-sharp" size={30} color="#c2c3c4" />
                </TouchableOpacity>
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={{ fontSize: 19, color: '#1e3041' }}>Family member</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="arrow-forward" size={30} color="grey" />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
            <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf2f7',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1e3041',
        marginLeft: 20,
        marginVertical: 5,
        padding: 10
    },

    icon: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#eff0f0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15
    },

    sectionContainer: {
        backgroundColor: '#f1f8fe',
        flexDirection: 'row', 
        alignItems: 'center',
        width: 400,
        height: 90,
        borderColor: 'transparent',
        alignSelf: 'center'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c8eb3',
        height: 50,
        width: 100,
        borderRadius: 30,
        justifyContent: 'center',
        margin: 20
    },
});