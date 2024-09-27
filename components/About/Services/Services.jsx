
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Services = () => {
  const services = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1488105257/photo/chatbot-powered-by-ai-transforming-industries-and-customer-service-yellow-chatbot-icon-over.jpg?s=612x612&w=0&k=20&c=DqZnxzJ0EKZRqe8yu903T1tK-wNBgksSKmITiIL1eqk=", // Replace with your image URLs
      description:
        "i do designing mobile applications and develop them as well with the quality and appearance as well ",
    },
    {
      id: 2,
      image: "https://example.com/path/to/image2.jpg", 
      description: "Description for Image 2",
    },
    {
      id: 3,
      image: "https://example.com/path/to/image3.jpg", // Replace with your image URLs
      description: "Description for Image 3",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>This is What I provide</Text>
      <Text style={styles.subtitle}>
        This is what I provide to companies and to my clients as well, and they
        are always happy with my services
      </Text>
      {services.map((service) => (
        <View key={service.id} style={styles.serviceItem}>
          <Image
            style={styles.image}
            source={{ uri: service.image }}
            resizeMode="cover"
          />
          <Text style={styles.serviceDescription}>{service.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 80,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
  serviceItem: {
    alignItems: "center",
    marginBottom: 30, 
    marginTop: 30,
  },
  image: {
    width: 300, 
    height: 200, 
    borderRadius: 10, 
  },
  serviceDescription: {
    marginTop: 10, 
    textAlign: "left", 
    fontSize: 16,
  },
});

export default Services;
