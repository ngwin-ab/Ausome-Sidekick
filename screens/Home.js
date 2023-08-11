import React, { useState, useEffect } from "react";
import { Button, View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import AvatarImages from "../components/AvatarImages";
import ChildList from "../components/ChildList";

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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                        <TouchableOpacity style={ styles.button } onPress={() => navigation.navigate('AddChild')}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.button } onPress={toggleDeleteMode}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>{deleteMode ? 'DONE' : 'DELETE'}</Text>
                        </TouchableOpacity>
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

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3c5e6e',
        margin: 15,
    },

    separator: {
        marginVertical: 10,
    },

});

