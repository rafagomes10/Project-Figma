import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title, LoginButton, LoginText } from "./styles";

export const ConfirmacaoCompra = () => {
  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Compra efetuada com sucesso!</Title>
      <LoginButton onPress={screenLogin}>
        <LoginText>VOLTAR</LoginText>
      </LoginButton>
      <StatusBar style="auto" />
    </Container>
  );
}


