import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Map } from "../components/Map";
import MapOption from "../components/MapOption";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../style/styles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer(); 
  };
  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <Ionicons
          name="ios-menu"
          size={24}
          color="black"
          onPress={openDrawer}
        />
      </View>
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
