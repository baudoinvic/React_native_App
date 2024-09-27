


import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is What I provide</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center", 
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 80, 
    textAlign: "center", 
    fontSize: 17,
    fontWeight: "bold"
  },
});

export default Services;
