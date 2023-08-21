import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreens = ({ onPress }) => {
    const Done = ({ ...props }) => (
        <TouchableOpacity
            {...props}
        >
            <Text style={{ fontSize: 16, marginHorizontal: 20 }}>Done</Text>
        </TouchableOpacity>
    )

    return (
        <Onboarding
            onSkip={onPress}
            onDone={onPress}
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#EBF3FA',
                    image: <Image resizeMode='contain' style={styles.image} source={require('../assets/Welcome.png')} />,
                    title: 'This app helps parents and teachers record ABC charts.',
                    titleStyles: { color: '#121b45', fontWeight: 'bold' },
                    subtitle: 'But, what are ABC charts, and why are they helpful?',
                },

                {
                    backgroundColor: '#EBF3FA',
                    image: <Image resizeMode='contain' style={styles.image} source={require('../assets/Abc.png')} />,
                    title: 'The ABCs of behavior',
                    titleStyles: { color: '#121b45', fontWeight: 'bold' },
                    subtitle: 'Antecedent: what happened before the behavior,\n Behavior: the actual behavior\nConsequence: what happened afterward as a result',
                },

                {
                    backgroundColor: '#EBF3FA',
                    image: <Image resizeMode='contain' style={styles.image} source={require('../assets/Question.png') } />,
                    title: 'Why do kids have such behaviors?',
                    titleStyles: { color: '#121b45', fontWeight: 'bold' },
                    subtitle: '4 main functions of challenging behaviors:\n- To obtain something desired\n- To avoid an undesirable situation\n- To get social attention \n- To access sensory input',
                    subTitleStyles: {color: '#121b45'}
                    
                },
            
                {
                    backgroundColor: '#EBF3FA',
                    image: <Image resizeMode='contain' style={styles.image} source={require('../assets/Lightbulb.png')} />,
                    title: 'Connecting the dots',
                    titleStyles: { color: '#121b45', fontWeight: 'bold' },
                    subtitle: 'By collecting and analyzing ABCs data, a potential function of the challenging behavior can be determined. Then we can provide appropriate consequences as well as teach appropriate alternatives to engaging in those behaviors.'
                },
            ]}
        />
    );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
    image: {
        width: 280,
        height: 260
    }
});