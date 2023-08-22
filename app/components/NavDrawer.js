import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { navLinks } from "../constants/index";

const NavDrawer = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.user}>
          <View style={styles.profile}>
            <View style={styles.profileIcon}>
              <Ionicons name="person-sharp" size={24} color="gray" />
            </View>
            <View style={styles.profileName}>
              <Text style={styles.userName}>Tinubu</Text>
              <Pressable>
                <Text style={styles.profileView}>View Profile</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.rating}>
            <FontAwesome name="star" size={14} color="#28BA74" />
            <Text style={styles.rate}>4.57</Text>
            <Text style={{ color: "gray", fontSize: 18, color: "#80818D" }}>
              Rating
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.navLinkContainer}>
          {navLinks.slice(0, -1).map((item, index) => (
            <TouchableOpacity key={index} style={styles.nav}>
              <View style={styles.linksIcon}>{item.icon}</View>
              <View style={styles.linkName}>
                <Text style={styles.link}>{item.name}</Text>
                {item.description && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
              </View>
              {item.btn && (
                <View style={styles.not}>
                  <Text style={{ color: "#fff", fontWeight: "500" }}>
                    {item.btn}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.navFooter}>
          <TouchableOpacity style={styles.nav}>
            <View style={styles.linksIcon}>
              {navLinks[navLinks.length - 1].icon}
            </View>
            <View style={styles.linkName}>
              <Text style={styles.link}>
                {navLinks[navLinks.length - 1].name}
              </Text>
              {navLinks[navLinks.length - 1].description && (
                <Text style={styles.description}>
                  {navLinks[navLinks.length - 1].description}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NavDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  flexContainer: {
    flex: 1,
    backgroundColor: "#E9EAEE",
  },
  user: {
    paddingTop: 70,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileIcon: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F6",
    borderRadius: 100,
  },
  profileName: {
    gap: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  profileView: {
    fontSize: 18,
    color: "#28BA74",
  },
  rating: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 5,
    gap: 5,
    alignItems: "center",
  },
  rate: {
    fontWeight: "600",
    fontSize: 18,
  },
  navLinkContainer: {
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  nav: {
    flexDirection: "row",
    gap: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  linkName: {
    flex: 1,
    justifyContent: "center",
  },

  link: {
    fontSize: 18,
    color: "#737478",
  },
  description: {
    color: "gray",
    fontSize: 14,
    marginTop: 4,
    color: "#C0C0C4",
  },
  not: {
    backgroundColor: "red",
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  navFooter: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
});
