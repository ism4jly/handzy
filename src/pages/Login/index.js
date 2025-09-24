import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  Card,
  Title,
  Subtitle,
  Input,
  Button,
  ButtonText,
  Link,
  LinkText,
  SignUpContainer,
  SignUpText,
  SignUpLink,
  LogoImage,
  AppName,
} from './styles';

import { AuthContext } from '../../contexts/auth';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, signIn, loadingAuth } = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  }

  async function handleSignIn() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
    await signIn(email, password);
  }

  async function handleSignUp() {
    if (name === '' || email === '' || phone === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
    // Envia também o telefone no cadastro
    await signUp(email, password, name, phone);
  }

  return (
    <Container>
      <Card>
        <LogoImage
          source={require('../../assets/logo.png')}
          resizeMode="contain"
        />
        <AppName>Handzy</AppName>

        {!login && (
          <>
            <Input
              placeholder="Nome completo"
              autoCapitalize="words"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Input
              placeholder="Telefone (11) 99999-9999"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </>
        )}

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Input
          placeholder="Senha"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={login ? handleSignIn : handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <ButtonText>{login ? 'Entrar' : 'Cadastrar'}</ButtonText>
          )}
        </Button>

        {login ? (
          <SignUpContainer>
            <SignUpText>Não tem uma conta?</SignUpText>
            <SignUpLink onPress={toggleLogin}> Cadastre-se</SignUpLink>
          </SignUpContainer>
        ) : (
          <Link onPress={toggleLogin}>
            <LinkText>Já possui uma conta? Faça login</LinkText>
          </Link>
        )}
      </Card>
    </Container>
  );
}
