import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title, InputLogin, LoginButton, LoginText } from "./styles";

export const EsqueciMinhaSenha = () => {
   
  const [user, setUser] = useState({
    cpf: '',
  });

  const navigation = useNavigation();
  
  function screenRecuperacaoDeSenha() {
    navigation.navigate("RecuperacaoDeSenha");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Recuperar Senha</Title>
      <InputLogin
        value={user.cpf}
        onChangeText={setUser}
        placeholder={'Digite seu CPF'}
        placeholderTextColor={'gray'}
      />
      <LoginButton onPress={screenRecuperacaoDeSenha}>
        <LoginText>RECUPERAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </Container>
  );
}


