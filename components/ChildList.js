import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Button } from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import AvatarImages from "../components/AvatarImages";
import AddBtn from "./base_components/AddButton";
const Separator = () => <View style={styles.separator} />;

const ChildList = ({ navigation, deleteMode, onChildCountChange }) => {
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
                onChildCountChange(result.length);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        isFocused && getData();
    }, [isFocused]);

    const [disabled, setDisabled] = useState(false)

    const Item = ({ item, onPress, handleEvent, deleteKid, disabled }) => (
        <TouchableOpacity onPress={deleteMode ? null : onPress} style={styles.item} >
            <AvatarImages index={item.avatarIndex} />
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3c5e6e' }}>{item.name}</Text>
                <Text style={{ fontSize: 20, color: '#3c5e6e' }}>Like: {item.like}</Text>
            </View>
            {deleteMode && (
                <Ionicons style={styles.deleteButton} name="trash" size={24} color="#fff" onPress={() => handleEvent(item)} />

            )}

        </TouchableOpacity>
    );

    const deleteKid = async (item) => {
        try {
            const url = `http://10.0.0.136:3000/kids/${item.id}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setData((prevData) => prevData.filter((kid) => kid.id !== item.id));
            } else {
                throw new Error('Failed to delete.');
            }
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    const handleEvent = (item) => {
        Alert.alert('Do you want to delete this data?', null, [
            {
                text: 'No',
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => deleteKid(item),
            },
        ]);
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
        <View style={{ marginTop: 20, flex: 1 }}>
            {data.length === 0 ? (
                // <View style={styles.addbox} >
                //     <AddBtn buttonText='ADD KID' onPress={() => navigation.navigate('AddChild')}></AddBtn>
                // </View>
                <View>
                    {/* <TouchableOpacity
                        style={styles.addbox}
                        onPress={() => navigation.navigate('AddChild')}>
                        <Ionicons name='add-circle' size={100} color='black' />
                        <Text style={styles.heading}>Add child</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.addbox}
                        onPress={() => navigation.navigate('AddChild')}>
                        <Ionicons name='add-circle' size={50} color='rgb(96, 147, 171)' />
                        <Text style={styles.heading}>Add child</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                            key={item.id}
                            onPress={() => {
                                setSelectedId(item.id);
                                navigation.navigate('ChildData', { kidId: item.id });
                            }}
                            handleEvent={handleEvent}
                            deleteKid={() => deleteKid(item)}
                            disabled={deleteMode}
                        />
                    )}
                />
            )}
        </View>)
}

export default ChildList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

    item: {
        backgroundColor: 'rgb(196, 216, 228)',
        borderWidth: 1,
        borderColor: '#bdc4c7',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 400,
        height: 110,
        marginVertical: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },

    deleteButton: {
        position: 'absolute',
        bottom: 55,
        right: 10,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: '#cc0425',
        borderRadius: 20
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

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        margin: 15,
    },

    avatar: {
        width: 90,
        height: 90,
        marginRight: 15
    },

    separator: {
        marginVertical: 10,
    },

    fab: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});



