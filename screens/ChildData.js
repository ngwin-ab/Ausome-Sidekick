import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChildData = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Child's name</Text>
            <TouchableOpacity style={styles.dataBox}>
                <Text style={styles.dateLabel}>Date - Setting</Text>
                <Separator />
                <Text style={styles.subLabel}>Antecedent</Text>
                <Text style={styles.subLabel}>Behavior</Text>
                <Text style={styles.subLabel}>Consequence</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}
                onPress={() => navigation.navigate('Record')}>
                <Ionicons name='add-circle' size={90} color='rgb(86, 136, 159)' />
                <Text style={styles.heading}>Add new ABC chart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default ChildData;

const Separator = () => <View style={styles.separator} />;

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
        color: '#061464',
        margin: 10,
    },

    dateLabel: {
        fontSize: 20,
        color: '#061464'
    },

    subLabel: {
        fontSize: 18,
        color: '#061464'
    },

    dataBox: {
        backgroundColor: 'rgb(167, 200, 215)',
        marginTop: 20,
        marginHorizontal: 15,
        padding: 20,
    },

    separator: {
        marginVertical: 10,
    },

});