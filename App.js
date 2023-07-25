import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import AddChild from './screens/AddChild';
import Child from './screens/Child';
import Resources from './screens/Resources';
import Settings from './screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 

const Root = () => {
  return (
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
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Child" component={Child} />
      <Tab.Screen name="Resources" component={Resources} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
          <Stack.Screen name='Root' component={Root}></Stack.Screen>
          <Stack.Screen name='AddChild' component={AddChild}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}

export default App;