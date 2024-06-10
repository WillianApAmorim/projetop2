import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { buscarImagemGato } from "./Api";

export default function App() {
  const [urlImagemGato, setUrlImagemGato] = useState<string | null>(null);

  const obterImagemGato = async () => {
    const urlImagem = await buscarImagemGato();
    setUrlImagemGato(urlImagem);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.conteinerImagens}>
        <ScrollView contentContainerStyle={estilos.conteudoScrollView}>
          {urlImagemGato ? (
            <Image source={{ uri: urlImagemGato }} style={estilos.imagem} />
          ) : (
            <Text style={estilos.textoCentralizado}>
              Fotos de gatos aparecerão aqui
            </Text>
          )}
        </ScrollView>
      </View>
      <Pressable
        style={({ pressed }) => [
          estilos.botao,
          { backgroundColor: pressed ? "#634747" : "#776a6a" },
        ]}
        onPress={obterImagemGato}
      >
        <Text style={estilos.textoBotao}>Obter Fotos</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#615050",
  },
  conteinerImagens: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#615050",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#615050",
  },
  conteudoScrollView: {
    alignItems: "center",
  },
  textoCentralizado: {
    textAlign: "center",
    color: "#333",
  },
  botao: {
    width: "100%",
    maxWidth: 200,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagem: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: 300,
  },
});
