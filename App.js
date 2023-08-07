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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
      <NavigationContainer>
        <Tab.Navigator options={{ headerShown: false }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Resources') {
                iconName = focused ? 'search' : 'search-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'rgb(86, 136, 159)',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" options={{ headerShown: false }}>
            {() => (<HomeStack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: 'rgb(96, 147, 171)' }, headerTitleStyle: {
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
                <HomeStack.Screen name="EditChart" component={EditChart}  options={{ title: "Edit Chart" }} />
                <HomeStack.Screen name="AddChart" component={AddChart} options={{ title: "Record ABC chart" }} />
              </HomeStack.Group>
            </HomeStack.Navigator>)}
          </Tab.Screen>
          <Tab.Screen name="Resources" component={Resources}
            options={{
              headerStyle: { backgroundColor: 'rgb(96, 147, 171)' }, headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }} />
          <Tab.Screen name="Settings" component={Settings}
            options={{
              headerStyle: { backgroundColor: 'rgb(96, 147, 171)' }, headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
