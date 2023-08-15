import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import slides from "./slides";

const OnboardingPages = () => {
    return (
        <Onboarding>
            onSkip={() => navigation.replace("Home")}
            onDone={() => navigation.replace("Home")}

            pages={[
                {
                    backgroundColor: 'rgb(235, 243, 250)',
                    title: 'Behaviors\' functions',
                    subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
                },
                {
                    backgroundColor: 'rgb(235, 243, 250)',
                    title: 'The\'ABC \'s of behavior',
                    subtitle: '2nd slide',
                },
                {
                    backgroundColor: 'rgb(235, 243, 250)',
                    title: 'Replacing Challenging Behaviors',
                    subtitle: '3rd slide',
                },
            ]}
        </Onboarding>
    )
}


export default OnboardingPages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})