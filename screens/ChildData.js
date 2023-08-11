import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    FlatList,
    SectionList,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

const ChildData = ({ route, navigation }) => {
    const { kidId } = route.params;
    const [selectedId, setSelectedId] = useState('');
    const [name, setName] = useState('');
    const [chartsRecorded, setChartsRecorded] = useState([]);
    const [chartId, setChartId] = useState('');

    const isFocused = useIsFocused();

    const getData = async () => {
        try {
            const url = `http://10.0.0.136:3000/kids/${kidId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setChartsRecorded(data.chartsRecorded);
            setChartId(data.chartsRecorded._id)
            setName(data.name);
        } catch (error) {
            console.error('Error fetching data:', error);
        };
    };

    useEffect(() => {
        isFocused && getData();
    }, [isFocused]);

    const Item = ({ item, onPress }) => (
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

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                key={item.id}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('EditChart', { chart: item, kidName: name });
                }}
            />
        );
    };

    if (chartsRecorded.length === 0) {
        return (
                <View style={styles.container}>
                    <Text style={styles.heading}>Let's add {name}'s first chart!</Text>
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
            <Text style={styles.heading}>{name}</Text>
            <FlatList
                data={chartsRecorded}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                extraData={selectedId}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddChart',  { kidId })}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>EXPORT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChildData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#445E92',
        margin: 15,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c8eb3',
        height: 50,
        width: 100,
        marginTop: 20,
        borderRadius: 30,
        justifyContent: 'center',
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

    item: {
        backgroundColor: '#CFDDEA',
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
        color: '#445E92'
    },

    innerText: {
        marginBottom: 10,
        fontSize: 15
    },
});


