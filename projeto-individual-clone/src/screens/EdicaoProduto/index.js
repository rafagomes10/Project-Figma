import { useNavigation } from "@react-navigation/native";
import {Header} from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Gradient } from "../../components/Gradient";
import { Container, InputLogin, Recover, LoginButton, LoginText } from "./styles";
import { Footer } from "../../components/Footer";


export const EdicaoProduto = () => {
  const [user, setUser] = useState({
    nome: '',
    preco: '',
    quantidadeEmEstoque: '',
    imagem: '',
  });

  const navigation = useNavigation();
  
  function screenProdutos() {
    navigation.navigate("Produtos");
  }

  return (
    <Container>
      <Gradient />
      <Header title="Alterar Produto" />
      <InputLogin
        value={user.nome}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.preco}
        onChangeText={setUser}
        placeholder={'Preco R$'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.quantidadeEmEstoque}
        onChangeText={setUser}
        placeholder={'Quantidade em estoque'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.imagem}
        onChangeText={setUser}
        placeholder={'Imagem'}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity>
        <Recover >Selecionar imagem</Recover>
      </TouchableOpacity>
      <LoginButton onPress={screenProdutos}>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
      
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}