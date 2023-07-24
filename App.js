import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

export default function App() {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{minHeight: '100%'}}>
      <NavigationContainer>
        <Tabs /> 
      </NavigationContainer>
    </ScrollView>
  );
}
