import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Chart = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <Text style={[styles.title]}>SETTING</Text>
        <Text style={[styles.innerText]}>{item.setting}</Text>
        <Text style={[styles.title]}>ANTECEDENT</Text>
        <Text style={[styles.innerText]}>{item.antecedent}</Text>
        <Text style={[styles.title]}>BEHAVIOR</Text>
        <Text style={[styles.innerText]}>{item.behavior}</Text>
        <Text style={[styles.title]}>CONSEQUENCE</Text>
        <Text style={[styles.innerText]}>{item.consequence}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    item: {
        backgroundColor: 'rgb(196, 216, 228)',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3c5e6e'
    },

    innerText: {
        marginBottom: 10,
        fontSize: 15
    },
});

export default Chart;
