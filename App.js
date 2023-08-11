import React from 'react';
import { View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import AddChild from './screens/AddChild';
import Resources from './screens/Resources';
import Settings from './screens/Settings';
import ChildData from './screens/ChildData';
import AddChart from './screens/AddChart';
import EditChart from './screens/EditChart';
import Practice from './screens/Practice';
import Practice2 from './screens/Practice2';
import Practice3 from './screens/Practice3';
import About from './screens/About';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PracticeStack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
      <NavigationContainer>
        <Tab.Navigator tabBaroptions={{ headerShown: false }}
          screenOptions={({ route }) => ({
            tabBarLabelStyle: { fontSize: 11.5 },
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Resources') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Practice') {
                iconName = focused ? 'videocam' : 'videocam-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'document' : 'document-outline';
              }
              return <Ionicons name={iconName} size={22} color={color} />;
            }, tabBarStyle: {
              backgroundColor: 'rgb(235, 243, 250)',
              borderTopColor: '#bfbfbf'
            },
            tabBarActiveTintColor: '#445E92',
            tabBarInactiveTintColor: 'grey',
          })}
        >
          <Tab.Screen name="Home" options={{ headerShown: false }}>
            {() => (<HomeStack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#445E92' }, headerTitleStyle: {
                  color: 'white', fontWeight: 'bold'
                }
              }}>
              <HomeStack.Group>
                <HomeStack.Screen name="MyKids" component={Home} options={{ title: "My kids" }} />
                <HomeStack.Screen name="AddChild" component={AddChild} options={{ title: "Add a child" }} />
              </HomeStack.Group>
              <HomeStack.Group>
                <HomeStack.Screen name="ChildData" component={ChildData}
                  options={{ title: "Data" }} />
                <HomeStack.Screen name="EditChart" component={EditChart} options={{ title: "Edit Chart" }} />
                <HomeStack.Screen name="AddChart" component={AddChart} options={{ title: "Record ABC chart" }} />
              </HomeStack.Group>
            </HomeStack.Navigator>)}
          </Tab.Screen>
          
          <Tab.Screen name="Practice" options={{ headerShown: false }}>
            {() => (<PracticeStack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: '#445E92' }, headerTitleStyle: {
                  color: 'white', fontWeight: 'bold'
                }
              }}>
              <PracticeStack.Group>
                <PracticeStack.Screen name="Practice1" component={Practice} options={{ title: "Practice 1" }} />
                <PracticeStack.Screen name="Practice2" component={Practice2} options={{ title: "Practice 2" }} />
                <PracticeStack.Screen name="Practice3" component={Practice3} options={{ title: "Practice 3" }} />
              </PracticeStack.Group>
            </PracticeStack.Navigator>)}
            </Tab.Screen>
          <Tab.Screen name="Resources" component={Resources}
            options={{
              headerStyle: { backgroundColor: '#445E92' }, headerTintColor: '#fff',
              headerTitleStyle: { color: 'white',
                fontWeight: 'bold',
              }
            }} />
          <Tab.Screen name="Settings" component={Settings}
            options={{
              headerStyle: { backgroundColor: '#445E92' }, headerTintColor: '#fff',
              headerTitleStyle: { color: 'white',
                fontWeight: 'bold',
              }
            }} />
          <Tab.Screen name="About" component={About}
            options={{
              headerStyle: { backgroundColor: '#445E92' }, headerTintColor: '#fff',
              headerTitleStyle: { color: 'white',
                fontWeight: 'bold',
              }
            }} />
        </Tab.Navigator>

      </NavigationContainer>
    </View>
  );
};

export default App;
