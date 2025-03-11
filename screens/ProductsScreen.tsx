import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

// Lista de profesores con imágenes
const products = [
  {
    id: "1",
    name: "Teclado Gay-Mer Alámbrico",
    category: "Electrónica",
    image: require("../assets/teclado.png"),
  },
  {
    id: "2",
    name: "Mouse Gay-Mer Inalámbico",
    category: "Electrónica",
    image: require("../assets/mouse.png"),
  },
  {
    id: "3",
    name: "Jalapeños en rajas La Costeña",
    category: "Víveres",
    image: require("../assets/chiles.png"),
  },
  {
    id: "4",
    name: "Vasos Desechables No.7 de Unicel",
    category: "Trastes",
    image: require("../assets/vasos.png"),
  },
];

const ProductsScreen = () => {
  const renderItem = ({
    item,
  }: {
    item: { name: string; category: string; image: any };
  }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Title style={styles.cardTitle}>{item.name}</Title>
            <Paragraph style={styles.cardDescription}>
              Materia: {item.category}
            </Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nuestros Productos</Text>
      <FlatList
        data={products}
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
    backgroundColor: "#ffc300", // Fondo AMARILLO al estilo de Netflix
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9d0208", // Título ROJO para contraste
  },
  card: {
    backgroundColor: "#9d0208", // Fondo ROJO de las cards, un poco más claro que en StudentsScreen
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
});

export default ProductsScreen;
