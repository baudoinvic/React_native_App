import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Contact = () => {
  return (
   <View style={styles.contact}>
     <Text style={styles.text}>Let's get in touch </Text>
     <Text style={styles.subtitle}>let's discuss about your new project this is the best way to get in touch easly</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
 text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 60
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },



 
});

export default Contact
