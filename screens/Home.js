import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, Button, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';


const ChildBox = ({ navigation, editMode }) => {
    const [data, setData] = useState([]);
    const isFocused = useIsFocused();
    const [selectedId, setSelectedId] = useState();

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

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text>{item.name}</Text>
            {editMode && (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.editButton} onPress={() => handleEditItem(item)}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item)}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        </TouchableOpacity>
    );

    const toggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    useEffect(() => {
        isFocused && getData();
    }, [isFocused]);

    const handleEditItem = (item) => {

    };

    const handleDeleteItem = (item) => {

    };

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
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
};

const Home = ({ navigation }) => {

    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={styles.kidbox}
                onPress={() => navigation.navigate('ChildData')}> */}
            {/* <Image style={styles.avatar} source={require('../assets/Icons/Cat_3.png')} /> */}
            {/* <Text style={styles.heading}>{childName}</Text>
            </TouchableOpacity> */}
            <ChildBox navigation={navigation} editMode={editMode}/>
            <Separator />
            {/* <TouchableOpacity
                style={styles.addbox}
                onPress={() => navigation.navigate('AddChild')}>
                <Ionicons name='add-circle' size={50} color='rgb(86, 136, 159)' />
                <Text style={styles.heading}>Add child</Text>
            </TouchableOpacity> */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <Button
                    color='rgb(86, 136, 159)'
                    title='Add Child'
                    onPress={() => navigation.navigate('AddChild')}
                />
                <Button
                    color='rgb(86, 136, 159)'
                    onPress={toggleEditMode}
                    title={editMode ? 'Done' : 'Edit'}
                />
            </View>
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
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    buttonsContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    editButton: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        alignSelf: 'flex-end'
    },

    deleteButton: {
        backgroundColor: 'lightpink',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    editHeaderButton: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'flex-end',
        marginVertical: 10,

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