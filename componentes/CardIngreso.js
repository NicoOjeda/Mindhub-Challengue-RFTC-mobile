import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function CardIngreso() {
  const image = {
    uri: "https://i.pinimg.com/originals/16/96/06/1696069a5fc8c6b92cea9af7c30ee809.jpg",
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
            Ingresá
          </Text>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Correo"
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 mb-9 bg-white"
            placeholder="Contraseña"
          ></TextInput>
          <Text className="text-center mt-9 text-red-800 bg-yellow-200 font-bold rounded-full">
            Si no tenés una cuenta aún, por favor:
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
            <Text className="text-center text-white bg-black font-bold">
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}