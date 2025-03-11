import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ClientsScreen from "./screens/ClientsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import AddClientScreen from "./screens/AddClientsSreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Clients" component={ClientsScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="AddClientScreen" component={AddClientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
