import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Services = () => {
  return (
    <View style={styles.services}>
      <Text>This is What i provider </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Aligns content to the top
    paddingTop: 50, // Moves content further from the top of the screen
    paddingHorizontal: 20, // Adds some horizontal padding
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
    backgroundColor: "#0984e3", // Button color
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    borderRadius: 10, // Rounded corners
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 18, // Text size
    fontWeight: "bold", // Text weight
  },
});

export default Services
