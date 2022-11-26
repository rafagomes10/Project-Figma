import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {Header} from "../../components/Header";
import { Gradient } from "../../components/Gradient";
import { Container, InputLogin, InputPassword, LoginButton, LoginText } from "./styles";
import { Footer } from "../../components/Footer";

export const Cadastro = () => {
    
  const [user, setUser] = useState({
    login: '',
    cpf: '',
    dataDeNascimento: '',
    password: '',
    passwordConfirmar: '',
  });

  const navigation = useNavigation();
  
  function screenConfirmacaoDeCadastro() {
    navigation.navigate("ConfirmacaoDeCadastro");
  }

  return (
    <Container>
      <Gradient />
      <Header title="Cadastro" />
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.cpf}
        onChangeText={setUser}
        placeholder={'CPF'}
        placeholderTextColor={'gray'}
      />
      <InputLogin
        value={user.dataDeNascimento}
        onChangeText={setUser}
        placeholder={'Data de Nascimento'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Senha'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.passwordConfirmar}
        onChangeText={setUser}
        placeholder={'Confirmar Senha'}
        placeholderTextColor={'gray'}
      />
      <LoginButton onPress={screenConfirmacaoDeCadastro}>
        <LoginText>CADASTRAR</LoginText>
      </LoginButton>
      
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
