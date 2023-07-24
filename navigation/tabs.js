import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChildScreen from '../screens/ChildScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 5,
                    height: 80
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Child" component={ChildScreen} />
            <Tab.Screen name="Resources" component={ResourcesScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;