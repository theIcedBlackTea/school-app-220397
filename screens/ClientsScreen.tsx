import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

// Lista de estudiantes con imágenes
const clients = [
  {
    id: "1",
    name: "Jhonatan Baldemar Ramírez Reyes",
    age: 19,
    image: require("../assets/jhona.png"),
  },
  {
    id: "2",
    name: "Jesús Antonio Estrada Jiménez",
    age: 24,
    image: require("../assets/chucha.png"),
  },
  {
    id: "3",
    name: "Marcos Jesús Ríos Durán",
    age: 19,
    image: require("../assets/marquitos.png"),
  },
  {
    id: "4",
    name: "Diego Salvador Tecorralco Martinez",
    age: 20,
    image: require("../assets/teca.png"),
  },
];

const ClientsScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({
    item,
  }: {
    item: { name: string; age: number; image: any };
  }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Title style={styles.cardTitle}>{item.name}</Title>
            <Paragraph style={styles.cardDescription}>
              Edad: {item.age}
            </Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nuestros Clientes</Text>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.buttonAddClient}
        onPress={() => navigation.navigate("AddClientScreen")}
      >
        <Text style={styles.buttonAddClientText}>+</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc300", // Fondo AMARILLO al estilo de Netflix
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9d0208", // Título blanco para contraste
  },
  card: {
    backgroundColor: "#9d0208", // Fondo ROJO de las cards
    marginBottom: 20,
    borderRadius: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // Título blanco para las cards
  },
  cardDescription: {
    fontSize: 16,
    color: "#ccc", // Descripción gris claro
  },
  listContainer: {
    paddingBottom: 20,
  },
  buttonAddClient:{
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#9d0208",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  buttonAddClientText:{
    fontSize: 40,
    color: "#fff"
  }
});

export default ClientsScreen;
