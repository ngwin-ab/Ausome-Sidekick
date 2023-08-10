import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button, View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import Chart from './Chart';

const ChartList = ({ navigation, chartsRecorded, name, kidId }) => {
    const isFocused = useIsFocused();
    const [selectedId, setSelectedId] = useState('');

    const renderItem = ({ item }) => {
        return (
            <Chart
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('EditChart', { chart: item, kidName: name });
                }}
            />
        );
    };

    if (chartsRecorded.length === 0) {
        return (
            <View>
                <Text style={styles.heading}>Let's add a chart for {name}!</Text>
                <TouchableOpacity
                    style={styles.addbox}
                    onPress={() => navigation.navigate('AddChart', { kidId })}>
                    <Ionicons name='add-circle' size={50} color='rgb(96, 147, 171)' />
                    <Text style={styles.heading}>Add chart</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chartsRecorded}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3c5e6e',
        margin: 15,
    },

    addbox: {
        width: 200,
        height: 150,
        alignSelf: 'center',
        borderColor: 'rgb(123, 165, 185)',
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'dashed',
        backgroundColor: '#fff',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ChartList;
