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

const ChildData = ({ route, navigation }) => {
    const { kidId } = route.params;
    const [selectedId, setSelectedId] = useState();
    const [name, setName] = useState('');
    const [chartsRecorded, setChartsRecorded] = useState([]);

    const getData = async () => {
        try {
            const url = `http://10.0.0.136:3000/kids/${kidId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setChartsRecorded(data.chartsRecorded);
            setName(data.name);
        } catch (error) {
            console.error('Error fetching data:', error);
        };
    };

    useEffect(() => {
        getData();
    }, []);

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
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    if (chartsRecorded.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={{marginTop: 20}}>Let's record the first ABC chart for {name}!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chartsRecorded}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                extraData={selectedId}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <Button
                    color='rgb(86, 136, 159)'
                    title='Record'
                    onPress={() => navigation.navigate('Record')}
                />
                <Button
                    color='rgb(86, 136, 159)'
                    title='Export'
                    onPress={() => navigation.navigate('Record')}
                />
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

    item: {
        backgroundColor: 'rgb(196, 216, 228)',
        borderColor: 'white',
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#061464'
    },

    innerText: {
        marginBottom: 10,
        fontSize: 15
    },

    heading: {
        borderWidth: 1,
        borderColor: 'rgb(86, 136, 159)',
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464',
        marginLeft: 15,
    },
});

