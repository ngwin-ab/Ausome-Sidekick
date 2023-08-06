import { View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const CalendarBox = () => (
    <View style={styles.container}>
        <CalendarStrip
            scrollable
            style={{ height: 80, padding: 5, marginLeft: 15, marginRight: 15, marginTop: 0 }}
            calendarColor={'rgb(125, 163, 183)'}
            calendarHeaderStyle={{ color: 'white' }}
            dateNumberStyle={{ color: 'white' }}
            dateNameStyle={{ color: 'white' }}
            iconContainer={{ flex: 0.1 }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1 }
});

export default CalendarBox;