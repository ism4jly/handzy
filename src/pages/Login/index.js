import React, { useState } from 'react';

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

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleSignIn() {
    if (email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
  }

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
  }

  if (login) {
    return (
      <Container>
        <Title>Handzy</Title>
        <Subtitle>Acesse sua conta para continuar</Subtitle>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
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
        autoCapitalize="none"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <Link>
        <LinkText onPress={toggleLogin}>Já possuo uma conta</LinkText>
      </Link>
    </Container>
  );
}
