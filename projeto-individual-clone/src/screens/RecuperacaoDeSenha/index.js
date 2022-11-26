import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title, InputPassword, LoginButton, LoginText } from "./styles";

export const RecuperacaoDeSenha = () => {
   
  const [user, setUser] = useState({
    password: '',
    passwordConfirmar: '',
  });

  const navigation = useNavigation();
  
  function screenSenhaAlterada() {
    navigation.navigate("SenhaAlterada");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Criar Senha</Title>
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua nova senha'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.passwordConfirmar}
        onChangeText={setUser}
        placeholder={'Repita sua nova senha'}
        placeholderTextColor={'gray'}
      />
      <LoginButton onPress={screenSenhaAlterada}>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </Container>
  );
}


