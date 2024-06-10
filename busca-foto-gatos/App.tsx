import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { buscarImagensGato } from './Api'; // Importa a função buscarImagensGato da API

export default function App() {
  // Define o estado urlImagensGato para armazenar as URLs das imagens de gato
  const [urlImagensGato, setUrlImagensGato] = useState<string[]>([]);

  // Função para buscar e atualizar as imagens de gato
  const obterImagensGato = async () => {
    // Chama a função buscarImagensGato da API para obter as URLs das imagens
    const urlsImagens = await buscarImagensGato();
    // Atualiza o estado urlImagensGato com as URLs das imagens recebidas
    setUrlImagensGato(urlsImagens);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.conteinerImagens}>
        <ScrollView contentContainerStyle={estilos.conteudoScrollView}>
          {/* Mapeia as URLs das imagens de gato e renderiza cada uma como um componente de imagem */}
          {urlImagensGato.map((url, index) => (
            <Image key={index} source={{ uri: url }} style={estilos.imagem} />
          ))}
        </ScrollView>
      </View>
      {/* Botão para obter novas imagens de gato ao ser pressionado */}
      <Pressable
        style={({ pressed }) => [
          estilos.botao,
          { backgroundColor: pressed ? '#634747' : '#776a6a' }
        ]}
        onPress={obterImagensGato} // Ao ser pressionado, chama a função obterImagensGato para buscar novas imagens
      >
        <Text style={estilos.textoBotao}>Obter Fotos</Text>
      </Pressable>
    </SafeAreaView>
  );
}

// Estilos CSS para os componentes
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#615050',
  },
  conteinerImagens: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#615050',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#615050',
  },
  conteudoScrollView: {
    alignItems: 'center',
  },
  botao: {
    width: '100%',
    maxWidth: 200, 
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10, 
    maxWidth: 300,
  },
});
