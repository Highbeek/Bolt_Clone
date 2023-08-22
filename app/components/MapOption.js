import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { car } from "../assets/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const DestinationHistory = ({ title, address }) => {
  return (
    <View style={styles.add}>
      <MaterialCommunityIcons
        name="clock-time-eight-outline"
        size={28}
        color="black"
      />
      <View style={styles.address}>
        <Text style={{ fontWeight: "700", color: "black" }}>{title}</Text>
        <Text style={{ fontWeight: "600", color: "gray" }}>{address}</Text>
      </View>
    </View>
  );
};

const MapOption = () => {
  const [destination, setDestination] = useState("");
  const handleDestinationChange = (text) => {
    setDestination(text);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.backgroundWrapper}>
        <View style={styles.book}>
          <View style={styles.destinationContainer}>
            <View style={styles.destination}>
              <View style={styles.iconContainer}>
                <Feather name="search" size={18} color="black" />
              </View>
              <TextInput
                placeholder="Where to?"
                placeholderTextColor="black"
                onChangeText={handleDestinationChange}
                value={destination}
                style={styles.whereTo}
              />
            </View>
            <View style={styles.ride}>
              <Image source={car} style={styles.img} />
            </View>
          </View>
          <View style={styles.history}>
            <DestinationHistory
              title="Hard Rock Cafe"
              address="Landmark center"
            />
            <DestinationHistory title="Home" address="Lagos Nigeria" />
            <DestinationHistory
              title="30 alapere street"
              address="Lagos Nigeria"
            />
          </View>
        </View>
      </View>
      <View style={styles.promo}>
        <Feather name="check" size={16} color="white" />
        <Text style={styles.promoTxt}>20% promo applied</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MapOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundWrapper: {
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  promo: {
    position: "absolute",
    width: "100%",
    height: 50,
    backgroundColor: "#5A5FED",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
    gap: 20,
  },
  promoTxt: {
    color: "#fff",
  },
  book: {
    marginTop: 30,
    backgroundColor: "#fff",
    height: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  whereTo: {
    fontSize: 18,
    fontWeight: "800",
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
  ride: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F6",
    borderRadius: 10,
    width: 100,
  },
  img: {
    width: 50,
    height: 50,
  },
  destinationContainer: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  destination: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F6",
    paddingHorizontal: 15,
    paddingRight: "auto",
    borderRadius: 10,
    gap: 15,
    width: "70%",
  },
  add: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    paddingVertical: 6,
    marginVertical: 12,
    gap: 10,
  },
  address: {
    gap: 5,
    fontWeight: "600",
    fontSize: "gray",
  },
});
