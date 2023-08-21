// Map.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, 
  },
});
