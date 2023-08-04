import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, Button, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ChildBox = ({ navigation }) => {
    const [data, setData] = useState([]);
    
    const getData = () => {
        const url = 'http://10.0.0.136:3000/kids';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(result => {
            setData(result);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const [selectedId, setSelectedId] = useState();

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
    
    const renderItem = ({ item }) => {

        return (
            <Item
                item={item}
                key={item.id}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('ChildData', { kidId: item.id });
                }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
}

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={styles.kidbox}
                onPress={() => navigation.navigate('ChildData')}> */}
            {/* <Image style={styles.avatar} source={require('../assets/Icons/Cat_3.png')} /> */}
            {/* <Text style={styles.heading}>{childName}</Text>
            </TouchableOpacity> */}
            <ChildBox navigation={navigation} />
            <Separator />
            <TouchableOpacity
                style={styles.addbox}
                onPress={() => navigation.navigate('AddChild')}>
                <Ionicons name='add-circle' size={50} color='rgb(86, 136, 159)' />
                <Text style={styles.heading}>Add child</Text>
            </TouchableOpacity>
        </View>
    );
}

const Separator = () => <View style={styles.separator} />;

export default Home;

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
        width: 300,
        height: 110,
        marginVertical: 8,
        marginHorizontal: 15,
        alignSelf: "center"
    },
    // kidbox: {
    //     borderColor: 'white',
    //     borderRadius: 5,
    //     backgroundColor: 'rgb(196, 216, 228)',
    //     borderWidth: 1,
    //     flexDirection: 'row',  
    //     alignSelf: 'center',
    //     margin: 10,
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    //     alignItems: 'center',
    // }, 

    addbox: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        borderColor: 'rgb(123, 165, 185)',
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464'
    },

    avatar: {
        width: 90,
        height: 90,
        marginRight: 15
    },

    separator: {
        marginVertical: 10,
    },

});