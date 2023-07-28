import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ChildData = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Child's name</Text>
            <TouchableOpacity style={styles.dataBox}>
                <Text style={styles.dateLabel}>Date - Setting</Text>
                <Separator />
                <Text style={styles.subLabel}>Antecedent</Text>
                <Text style={styles.subLabel}>Behavior</Text>
                <Text style={styles.subLabel}>Consequence</Text>
            </TouchableOpacity>
            <Button
                title='Record ABC'
                color='#061464'
                onPress={() => navigation.navigate('Record')}
            />
        </View>
    );
}

export default ChildData;

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464',
        marginTop: 20,
        alignItems: 'stretch',
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
        padding: 20,
    },

    separator: {
        marginVertical: 10,
    },

});