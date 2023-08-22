import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 0.6,
    position: "relative",
    zIndex: -1,
  },
  optionContainer: {
    position: "absolute",
    height: "45%",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  menuIcon: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 50,

    backgroundColor: "#fff",
  },
});
