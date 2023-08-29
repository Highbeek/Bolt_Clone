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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";



const RouteScreen = ({ onClose }) => {
  const [destination, setDestination] = useState("");
  const [presentLocation, setPresentLocation] = useState("");
  const destinationInputRef = useRef(null);

  useEffect(() => {
    destinationInputRef.current.focus();
  }, []);

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  const handlePresentLocationChange = (text) => {
    setPresentLocation(text);
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
          <GooglePlacesAutocomplete
            textInputProps={{
              placeholder: "Present Location",
              placeholderTextColor: "black",
              style: [styles.googlePlacesTextInput],
            }}
            styles={{
              textInputContainer: styles.googlePlacesTextInputContainer,
              textInput: styles.googlePlacesTextInput,
              listView: styles.listView,
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onChangeText={handlePresentLocationChange}
            value={presentLocation}
            autoFocus
          />
        </View>
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.destination}>
          <View style={styles.iconContainer}>
            <Feather name="search" size={18} color="black" />
          </View>
          <GooglePlacesAutocomplete
            textInputProps={{
              placeholder: "Destination",
              placeholderTextColor: "black",
              style: [styles.googlePlacesTextInput],
            }}
            styles={{
              textInput: styles.googlePlacesTextInput,
              container: styles.googlePlacesContainer,
              listView: styles.listView,
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            ref={destinationInputRef}
          />
          <Image source={route} style={styles.image} />
        </View>
      </View>
    </View>
  );
};








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
  locationContainer: {
    marginTop: 0,
  },
  destination: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F6",
    paddingHorizontal: 15,
    paddingVertical: 8,
    paddingRight: "auto",
    borderRadius: 10,
    width: "100%",
    marginVertical: 5,
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
  googlePlacesContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "#38b000",
  },

  googlePlacesTextInputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  googlePlacesTextInput: {
    fontSize: 18,
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 5,
  },
  listView: {
    position: "absolute",
    top: "120%",
    left: "50%",
    transform: [{ translateX: -150 }],
    width: 300,
    backgroundColor: "white",
    zIndex: 1,
    elevation: 5,
  },
});

export default RouteScreen;
