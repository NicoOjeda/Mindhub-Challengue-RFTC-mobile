import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ListaProductos from "./screens/ListaProductos";
import Home from './screens/Home'

import Registro from "./screens/Registro";

import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navegacion/Drawer';




export default function App() {
  return (
   /*  <SafeAreaView className="mt-10">
      <Registro></Registro>
      <StatusBar style="auto" />
    </SafeAreaView>
 */
    <NavigationContainer >
      <Drawer/>
    </NavigationContainer>
  );
}
