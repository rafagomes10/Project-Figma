import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SenhaAlterada } from "../screens/SenhaAlterada";
import { EsqueciMinhaSenha } from "../screens/EsqueciMinhaSenha";
import { RecuperacaoDeSenha } from "../screens/RecuperacaoDeSenha";
import { Login } from "../screens/Login";
import { Produtos } from "../screens/Produtos";
import { CadastroProduto } from "../screens/CadastroProduto";
import { Cadastro } from "../screens/Cadastro";
import { ConfirmacaoDeCadastro } from "../screens/ConfirmacaoDeCadastro";
import { Favoritos } from "../screens/Favoritos";
import { EdicaoProduto } from "../screens/EdicaoProduto";
import { ConfirmacaoCompra } from "../screens/ConfirmacaoCompra";
import { AlterarCategoria } from "../screens/AlterarCategoria";
import { CadastroCategoria } from "../screens/CadastroCategoria";

const { Screen, Navigator } = createNativeStackNavigator();


export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Screen name="Login" component={Login} />
      <Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
      <Screen name="SenhaAlterada" component={SenhaAlterada} />
      <Screen name="RecuperacaoDeSenha" component={RecuperacaoDeSenha} />
      <Screen name="ConfirmacaoDeCadastro" component={ConfirmacaoDeCadastro} />
      <Screen name="CadastroProduto" component={CadastroProduto} />
      <Screen name="Produtos" component={Produtos} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="AlterarCategoria" component={AlterarCategoria} />
      <Screen name="EdicaoProduto" component={EdicaoProduto} />
      <Screen name="ConfirmacaoCompra" component={ConfirmacaoCompra} />
      <Screen name="CadastroCategoria" component={CadastroCategoria} />
      <Screen name="Favoritos" component={Favoritos} />
    </Navigator>
  );
}
