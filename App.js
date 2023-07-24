import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const InputBox = props => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput style={{height: 80, paddingTop: 0, margin: 15}} 
        mode="outlined"
        multiline
        label={props.label}
        value={text}
        onChangeText={text => setText(text)}
      />
    </ View>
  );
};

export default function App() {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{minHeight: '100%'}}>
      <View style={styles.container}>
        <Text>Log ABC</Text>
        <InputBox label="Setting"></InputBox>
        <InputBox label="Antecedent"></InputBox>
        <InputBox label="Behavior"></InputBox>
        <InputBox label="Consequence"></InputBox>
      </View>

      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 250
  }

});