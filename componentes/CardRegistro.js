import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function CardRegistro() {
  const image = {
    uri: "https://st.depositphotos.com/1051862/3469/i/600/depositphotos_34699129-stock-photo-abstract-red-gradient-background.jpg",
  };
  return (
    <ImageBackground
      className="w-full h-full"
      source={image}
      resizeMode="cover"
    >
      <ScrollView>
        <View className="justify-center p-5 mt-5">
          <Text className="text-center text-red-800 bg-yellow-200 font-bold mb-8 rounded-full text-xl">
            Registrate
          </Text>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Nombre"
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Apellido"
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Correo"
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 mb-9 bg-white"
            placeholder="Contraseña"
          ></TextInput>
          <Text className="text-center mt-9 font-bold bg-white rounded-full text-red-800 bg-yellow-200 font-bold">
            Si ya tenés una cuenta, por favor:
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
            <Text className="text-center text-white bg-black font-bold">
              Ingresá
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
