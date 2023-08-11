import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from "@rneui/base";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import Config from "react-native-config";

const Resources = ({ navigation }) => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
    };

    useEffect(() => {
        getLocation();
    }, []);

    const SearchSection = () => {
        const [search, setSearch] = useState('');

        const updateSearch = (newSearch) => {
            setSearch(newSearch);
        };

        return (
            <View style={{ height: '25%', backgroundColor: 'rgb(235, 243, 250)', flexDirection: 'column' }}>
                <Text></Text>
                <SearchBar
                    onChangeText={updateSearch}
                    value={search}
                    lightTheme={true}
                    round={true}
                    containerStyle={{ backgroundColor: 'rgb(235, 243, 250)' }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SEARCH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>RESET</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    };

    const MapSection = () => {
        return (
            <View style={{ height: '75%', flexDirection: 'column' }}>
                <MapView style={{ ...StyleSheet.absoluteFillObject }}
                    region={mapRegion}>
                    <Marker coordinate={mapRegion} title='Current location' />
                </MapView>
            </View>
        );
    };

    return (
        <View>
            <SearchSection />
            <MapSection />
        </View>
    );
};

export default Resources;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 243, 250)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#7c8eb3',
        height: 50,
        width: 100,
        marginTop: 8,
        borderRadius: 30,
        justifyContent: 'center',
    },
});