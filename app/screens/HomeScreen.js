import React from "react";
import { StyleSheet, View } from "react-native";
import { Map } from "../components/Map";
import MapOption from "../components/MapOption";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.optionContainer}>
        <MapOption />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: .6,
    position: "relative",
    zIndex: -1,
  },
  optionContainer: {
    position: "absolute",
    height:'100%',
    top: '55%',
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
