import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// Lista de categorías para HomeScreen
const categories = [
  {
    id: "1",
    title: "Clientes",
    image: require("../assets/clients.png"), //STUDENTS
    screen: "Clients",
  },
  {
    id: "2",
    title: "Productos",
    image: require("../assets/products.png"), //TEACHERS
    screen: "Products",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item,
  }: {
    item: { title: string; image: any; screen: string };
  }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <View style={styles.cardBody}>
            <Image source={item.image} style={styles.cardImage} />
            <Paragraph style={styles.cardDescription}>
              Click para más detalles 
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>B i e n v e n i d o s   a</Text>
      <Text style={styles.titleTwo}>O X X O   A P P</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc300", // Fondo amarillo del OXXO 
    padding: 20,
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff", // Título blanco para contraste
    textAlign: "center", // Centra el título
  },
  titleTwo:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9d0208", // Título ROJO para contraste
    textAlign: "center", // Centra el título
  },
  card: {
    backgroundColor: "#9d0208", // Fondo oscuro de las cards
    marginBottom: 20,
    borderRadius: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    width: "90%", // Ajuste para que las cards no se estiren demasiado
    alignSelf: "center", // Centra las cards en la pantalla
    height: 180, // Ajustar altura de la card
  },
  cardHeader: {
    backgroundColor: "#ffc300", // Fondo de la parte superior de la card donde va el título
    padding: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // Título blanco para las cards
    textAlign: "center", // Centra el título en la card
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centra el contenido dentro de la card
    padding: 10,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cardDescription: {
    fontSize: 16,
    color: "#ccc", // Descripción gris claro
    textAlign: "center", // Centra la descripción
  },
  listContainer: {
    paddingBottom: 20,
    justifyContent: "center", // Centra las cards dentro de la lista
    alignItems: "center", // Alinea las cards en el centro horizontalmente
  },
});

export default HomeScreen;
