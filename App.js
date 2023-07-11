import React, { useState } from "react";
import { StyleSheet, Image, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    width: 300,
    margin: 12,
    paddingBottom: 3,
    borderBottomWidth: 1,
  },
});
