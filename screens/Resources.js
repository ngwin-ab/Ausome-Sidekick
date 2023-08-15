import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from "@rneui/base";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {GOOGLE_MAPS_API_KEY} from "@env";
// import Config from "react-native-config";

const Resources = ({ navigation }) => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 33.77962,
        longitude: -84.40948,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [markers, setMarkers] = useState([]);

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

        const handleSearch = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search}&key=AIzaSyD6AhcmHQIZibGJu8CjmMUIE_soqxlhiug`
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                const results = data.results;
                console.log

                if (results.length > 0) {
                    const markersArray = results.map((result) => {
                        const { geometry, name } = result;
                        const location = geometry.location;

                        return {
                            latitude: location.lat,
                            longitude: location.lng,
                            title: name,
                        };
                    });

                    setMarkers(markersArray);

                    // Set the map region based on the first result
                    const firstResult = results[0];
                    const { geometry } = firstResult;
                    const location = geometry.location;

                    setMapRegion({
                        latitude: location.lat,
                        longitude: location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        const handleReset = () => {
            setSearch('');
            setMarkers([]);
            setMapRegion({
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        };

        return (
            <View style={{ height: '29%', backgroundColor: 'rgb(235, 243, 250)', flexDirection: 'column' }}>
                <Text></Text>
                <SearchBar
                    onChangeText={updateSearch}
                    value={search}
                    lightTheme={true}
                    round={true}
                    containerStyle={{ backgroundColor: 'rgb(235, 243, 250)' }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => {handleSearch()}}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>SEARCH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {handleReset()}}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>RESET</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const MapSection = () => {
        return (
            <View style={{ height: '71%', flexDirection: 'column' }}>
                <MapView style={{ ...StyleSheet.absoluteFillObject }}
                    region={mapRegion}>
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            title={marker.title}
                        />
                    ))}
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
        backgroundColor: '#7c859d',
        height: 50,
        width: 100,
        marginVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
    },
});