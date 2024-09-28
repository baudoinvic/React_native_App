import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

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
      image:
        "https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.jpg?s=612x612&w=0&k=20&c=k8ckKsgOrPPxohAA_ywg2VXZzdCPptEbOlleRV8Kb7c=",
      description:
        "i use to design web applications and implement them as well with the a good optimization and maintenance  ",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1396848094/photo/neon-web-3-0-glowing-web-3-abstract-neon-glowing-background-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=9kXE0lUyIKM6-NqL-BPwmEkf3Wy4cl_PecS_9nCqjRQ=",
      description:
        "mentoring people how to get more skills about web3 and gain more experience about it which will help them to benefit from it",
    },
  ];

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>This is What I provide</Text>
        <Text style={styles.subtitle}>
          This is what I provide to companies and to my clients as well, and
          they are always happy with my services
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

        <View style={styles.check}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Services")}
          >
            <Text style={styles.buttonText}>Let's get in touch</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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

export default Services;
