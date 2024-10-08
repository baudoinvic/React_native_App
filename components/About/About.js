import React from "react";
import { Button, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What I do</Text>
      <Text style={styles.subtitle}>
        I develop mobile applications and web applications for companies and for
        my clients, focusing on delivering user-friendly, high-performance, and
        scalable solutions. My expertise spans across different platforms and
        technologies, allowing me to build apps that meet specific business
        requirements. I collaborate closely with my clients to understand their
        goals, ensuring that the final product is tailored to their needs and
        provides a seamless user experience. Additionally, I am always exploring
        new trends and innovations to stay ahead in the fast-evolving world of
        mobile and web development.
      </Text>
      <View style={styles.check}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Services")}
        >
          <Text style={styles.buttonText}>Check My Services</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },

  check: {
    flex: 1,
    justifyContent: "left",
    alignItems: "left",
  },
  button: {
    backgroundColor: "#0984e3",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
