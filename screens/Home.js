import React, { useState, useEffect } from "react";
import { Button, View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import AvatarImages from "../components/AvatarImages";

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

    const [disabled,setDisabled]=useState(false)

    const Item = ({ item, onPress, handleEvent, deleteKid, disabled }) => (
        <TouchableOpacity onPress={deleteMode ? null : onPress} style={styles.item}>
            <AvatarImages index={item.avatarIndex} />
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#3c5e6e' }}>{item.name}</Text>
            {deleteMode && (
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleEvent(item)}>
                    <Text style={{ fontSize: 20, fontWeight: '900' }}>X</Text>
                </TouchableOpacity>

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
                <View>
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

const Home = ({ navigation }) => {
    const [deleteMode, setDeleteMode] = useState(false);
    const [childCount, setChildCount] = useState(0);

    const toggleDeleteMode = () => {
        setDeleteMode((prevDeleteMode) => !prevDeleteMode);
    };

    const handleChildCountChange = (count) => {
        setChildCount(count);
    };

    return (
        <View style={styles.container}>
            <ChildList navigation={navigation} deleteMode={deleteMode} onChildCountChange={handleChildCountChange} />
            <Separator />
            {childCount > 0 && (
                <>
                    <Separator />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15 }}>
                        <Button
                            color='rgb(86, 136, 159)'
                            title='   Add    '
                            onPress={() => navigation.navigate('AddChild')}
                        />
                        <Button
                            color='rgb(86, 136, 159)'
                            onPress={toggleDeleteMode}
                            title={deleteMode ? 'Done' : 'Delete'}
                        />
                    </View>
                </>
            )}
        </View>
    );
};

const Separator = () => <View style={styles.separator} />;

export default Home;

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
        paddingHorizontal: 10,
        width: 300,
        height: 125,
        marginVertical: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },

    deleteButton: {
        position: 'absolute',
        bottom: 85,
        right: 5,
        borderWidth: 2,
        borderColor: '#233c67',
        paddingVertical: 0,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
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
        color: '#3c5e6e',
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

});

