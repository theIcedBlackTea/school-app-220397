import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddClientScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigation = useNavigation();

  const handleSaveClient = () => {
    if (name && age) {
      // Aquí puedes agregar el cliente a la lista de clientes (por ejemplo, usando un estado global o un almacenamiento local)
      // Por ahora, solo redirigimos al usuario a la pantalla principal de clientes
      navigation.goBack(); // CAMBIO: Regresar a la pantalla de clientes
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agregar Cliente</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Guardar Cliente" onPress={handleSaveClient} /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc300",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9d0208",
  },
  input: {
    height: 50,
    borderColor: "#9d0208",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default AddClientScreen;
