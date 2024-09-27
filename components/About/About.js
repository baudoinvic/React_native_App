import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const About = () => {
  return (
    <div className="about">
      <View style={styles.container}>
        <Text style={styles.title}>What I do </Text>
        <Text style={styles.subtitle}>i use to develop mobile applications and web applications for companies and for my clients</Text>
      </View>
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
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
});
export default About
