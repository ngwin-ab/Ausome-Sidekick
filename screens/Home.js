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

