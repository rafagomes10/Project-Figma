import { StatusBar } from "expo-status-bar";
import {Header} from "../../components/Header";
import { Gradient } from "../../components/Gradient";
import { Container, InputLogin, Recover, LoginButton, LoginText } from "./styles";
import { Footer } from "../../components/Footer";
import { TouchableOpacity } from "react-native";

export const AlterarCategoria = () => {
  return (
    <Container>
      <Gradient />
      <Header title="Alterar Categoria" />
      <InputLogin
        placeholder={'Tec1'}
        placeholderTextColor={'blue'}
      />
      <InputLogin
        placeholder={'imagem5.png'}
        placeholderTextColor={'blue'}
      />

      <TouchableOpacity>
        <Recover >Selecionar imagem</Recover>
      </TouchableOpacity>
      
      <LoginButton>
        <LoginText>ALTERAR</LoginText>
      </LoginButton>
      
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
}
