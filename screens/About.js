import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.intro}>Ausome Sidekick was developed as a tool for parents and teachers, particularly those with autistic children
                to record ABC charts and, as a result better understand the function of children's behaviors.{'\n'}
                In the long run, it is always recommended to seek for help from a qualified professional.</Text>
            <Text style={styles.heading}>Attribution</Text>
            <View style={{marginVertical: 2}}></View>

            <View style={styles.attribution}>
                <Text style={{fontSize: 18}}>App logo:</Text>
                <Text style={{fontSize: 18}}>Designed by catalyststuff / Freepik.com</Text>
            </View>

            <View style={{marginVertical: 10}}></View>

            <View style={styles.attribution}>
                <Text style={{fontSize: 18}}>Avatar icons:</Text>
                <Text style={{fontSize: 18}}>Designed by 千图网 / Pngtree.com</Text>
            </View>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF3FA',
    },

    intro: {
        marginVertical: 20,
        marginHorizontal: 20,
        fontSize: 18,
        textAlign: 'auto',
        lineHeight: 20,
    },

    attribution: {
        marginHorizontal: 20,
        textAlign: 'auto',
        lineHeight: 30,
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#121b45',
        marginHorizontal: 20,
        lineHeight: 30,
    },
});