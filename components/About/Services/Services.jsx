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
    paddingTop: 50, //
    paddingHorizontal: 20, 
  },
  
});

export default Services
