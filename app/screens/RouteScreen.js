import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { route } from "../assets/index";

const RouteScreen = ({ onClose }) => {
  const [destination, setDestination] = useState("");
  const destinationInputRef = useRef(null);

  useEffect(() => {
    destinationInputRef.current.focus();
  }, []);

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-close" size={26} color="black" onPress={onClose} />
        <Text style={styles.headerText}>Your Route</Text>
        <MaterialIcons name="add" size={26} color="black" />
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.destination}>
          <View style={styles.iconContainer}>
            <Feather name="search" size={18} color="black" />
          </View>
          <TouchableOpacity>
            <TextInput
              placeholder="Present Location"
              placeholderTextColor="black"
              onChangeText={handleDestinationChange}
              value={destination}
              style={styles.whereTo}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.destination, styles.destinationInput]}>
          <View style={styles.iconContainer}>
            <Feather name="search" size={18} color="black" />
          </View>
          <TouchableOpacity>
            <TextInput
              ref={destinationInputRef}
              placeholder="Destination"
              placeholderTextColor="black"
              onChangeText={handleDestinationChange}
              value={destination}
              style={styles.whereTo}
            />
          </TouchableOpacity>
          <Image source={route} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default RouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
  },
  locationContainer: {},

  destination: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F6",
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: "auto",
    borderRadius: 10,
    gap: 15,
    width: "100%",
    marginVertical: 10,
  },
  iconContainer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#ECEBF0",
    elevation: 2,
  },
  whereTo: {
    fontSize: 18,
    width: "100%",
  },
  image: {
    width: 24,
    height: 28,
    marginLeft: "auto",
  },
  destinationInput: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#38b000",
  },
});
