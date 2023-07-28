import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Separator = () => <View style={styles.separator} />;

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.kidbox}
                onPress={() => navigation.navigate('ChildData')}>
                <Image style={styles.avatar} source={require('../assets/Icons/Cat_3.png')} />
                <Text style={styles.heading}>Child's name</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity
                style={styles.addbox}
                onPress={() => navigation.navigate('AddChild')}>
                <Ionicons name='add-circle' size={90} color='rgb(86, 136, 159)' />
                <Text style={styles.heading}>Add child</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    kidbox: {
        borderColor: 'rgb(123, 165, 185)',
        backgroundColor: 'rgb(167, 200, 215)',
        borderWidth: 2,
        flexDirection: 'row',  
        margin: 10,
        padding: 10,
        alignItems: 'center',
    }, 

    addbox: {
        width: 200,
        height: 100,
        backgroundColor: 'transparent',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#061464'
    },

    avatar: {
        width: 100,
        height: 100,
        marginRight: 15
    },

    separator: {
        marginVertical: 10,
    },

});