import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container,
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
} from './styles';

import { AuthContext } from '../../contexts/auth';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, signIn, loadingAuth } = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
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
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    await signUp(email, password, name);
  }

  if (login) {
    return (
      <Container>
        <Title>Handzy</Title>
        <Subtitle>Acesse sua conta para continuar</Subtitle>

        <Input
          placeholder="Email"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleSignIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>

        <SignUpContainer>
          <SignUpText>Não tem uma conta?</SignUpText>
          <SignUpLink onPress={toggleLogin}>Criar conta</SignUpLink>
        </SignUpContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Handzy</Title>
      <Subtitle>Cadastre sua conta para continuar</Subtitle>

      <Input
        placeholder="Seu nome"
        placeholderTextColor="#fff"
        autoCapitalize="none"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="#fff"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button onPress={handleSignUp}>
        {loadingAuth ? (
          <ActivityIndicator size={20} color="#FFF" />
        ) : (
          <ButtonText>Cadastrar</ButtonText>
        )}
      </Button>

      <Link>
        <LinkText onPress={toggleLogin}>Já possuo uma conta</LinkText>
      </Link>
    </Container>
  );
}
