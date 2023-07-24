import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordScreen from '../screens/RecordScreen';
import ChildScreen from '../screens/ChildScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Record" component={RecordScreen} />
            <Tab.Screen name="Child" component={ChildScreen} />
            <Tab.Screen name="Resources" component={ResourcesScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;