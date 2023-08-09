import React, { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import AvatarImages from "../components/AvatarImages";

const ChildList = ({ navigation, deleteMode }) => {
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

    useEffect(() => {
        isFocused && getData();
    }, [isFocused]);

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <AvatarImages index={item.avatarIndex} />
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3c5e6e' }}>{item.name}</Text>
            {deleteMode && (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item)}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        </TouchableOpacity>
    );

    const handleDeleteItem = (item) => {

    };

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
        <View style={{marginTop: 20}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

const Home = ({ navigation }) => {
    const [deleteMode, setDeleteMode] = useState(false);
    const toggleDeleteMode = () => {
        setDeleteMode((prevDeleteMode) => !prevDeleteMode);
    };

    return (
        <View style={styles.container}>
            <ChildList navigation={navigation} deleteMode={deleteMode} />
            <Separator />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 50 }}>
                <Button
                    color='rgb(86, 136, 159)'
                    title='Add Kid'
                    onPress={() => navigation.navigate('AddChild')}
                />
                <Button
                    color='rgb(86, 136, 159)'
                    onPress={toggleDeleteMode}
                    title={deleteMode ? 'Done' : 'Delete'}
                />
            </View>
            {/* <TouchableOpacity
                style={styles.addbox}
                onPress={() => navigation.navigate('AddChild')}>
                <Ionicons name='add-circle' size={50} color='rgb(96, 147, 171)' />
                <Text style={styles.heading}>Add child</Text>
            </TouchableOpacity> */}
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
        flex: 1,
        backgroundColor: 'rgb(196, 216, 228)',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 20,
        width: 300,
        height: 125,
        marginVertical: 8,
        marginHorizontal: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonsContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    deleteButton: {
        backgroundColor: 'lightpink',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

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
        color: '#3c5e6e'
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