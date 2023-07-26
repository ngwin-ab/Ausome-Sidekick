import { ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import AddChild from './screens/AddChild';
import Resources from './screens/Resources';
import Settings from './screens/Settings';
import Record from './screens/Record';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  // return (
  //   <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
  //     <NavigationContainer>
  //       <Stack.Navigator screenOptions={{ headerShown: false }}>
  //         <Stack.Screen name='Root' component={Root}></Stack.Screen>
  //         <Stack.Group>
  //           <Stack.Screen name='AddChild' component={AddChild}></Stack.Screen>
  //           <Stack.Screen name='Record' component={Record}></Stack.Screen>
  //         </Stack.Group>
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //     <StatusBar />
  //   </ScrollView>
  // );
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Child') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Resources') {
                iconName = focused ? 'search' : 'search-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#061464',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home">
            {() => (<HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={Home} />
              <HomeStack.Screen name="AddChild" component={AddChild} />
            </HomeStack.Navigator>)}
          </Tab.Screen>
          <Tab.Screen name="Resources" component={Resources}></Tab.Screen>
          <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};

export default App;
