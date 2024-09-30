
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({ firstname, lastname, email, message });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's get in touch</Text>
      <Text style={styles.subtitle}>
        Let's discuss about your new project, this is the best way to get in
        touch easily.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginTop: 60,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007BFF", 
    borderRadius: 5,
    alignItems: "center",
    padding: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  textArea: {
    height: 100,
  },
});

export default Contact;
