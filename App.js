// App.js
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";
import NavDrawer from "./app/components/NavDrawer";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={NavDrawer}
        overlayColor="transparent"
        screenOptions={{
          drawerType: "front",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EAEE",
  },
});
