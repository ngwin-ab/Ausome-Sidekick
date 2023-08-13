import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>The Ausome Sidekick app was created as a tool for parents and teachers
                to record ABC charts and, in turn, better understand the function of children's behaviors. </Text>
            <Text style={styles.heading}>Attribution</Text>
            <Text style={styles.text}>App Logo:</Text>
            <Text style={styles.text}>Designed by catalyststuff / Freepik.com</Text>
            <Text style={styles.text}>Avatar icons:</Text>
            <Text style={styles.text}>Designed by 千图网 / Pngtree.com</Text>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf2f7',
    },

    text: {
        margin: 15,
        fontSize: 18
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#1e3041',
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
});