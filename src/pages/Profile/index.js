import React, { useContext, useState } from 'react';
import {
  Container,
  Title,
  SubTitle,
  ContainerUser,
  UserAvatar,
  UserInfo,
  UserName,
  UserEmail,
  Card,
  ButtonPrimary,
  ButtonPrimaryText,
  ButtonAction,
  ButtonActionText,
  ButtonLogout,
  ButtonLogoutText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { Alert } from 'react-native';

import { AuthContext } from '../../contexts/auth';

function Profile() {
  const { signOut, user } = useContext(AuthContext);

  const [nome, setNome] = useState(user?.nome);

  function handleSignOutConfirm() {
    Alert.alert('Sair da conta', 'Tem certeza que deseja sair?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => signOut() },
    ]);
  }

  return (
    <Container>
      <Title>Meu Perfil</Title>
      <SubTitle>Gerencie suas informações pessoais</SubTitle>

      <Card>
        <ContainerUser>
          <UserAvatar source={{ uri: 'https://placekitten.com/200/200' }} />
          <UserInfo>
            <UserName>{user?.nome}</UserName>
            <UserEmail>{user?.email}</UserEmail>
          </UserInfo>
        </ContainerUser>

        <ButtonPrimary>
          <Icon name="edit-3" size={18} color="#fff" />
          <ButtonPrimaryText>Editar Perfil</ButtonPrimaryText>
        </ButtonPrimary>
      </Card>

      <ButtonAction>
        <Icon name="briefcase" size={18} color="#1e3a8a" />
        <ButtonActionText>Meus Serviços</ButtonActionText>
      </ButtonAction>

      <ButtonLogout onPress={() => handleSignOutConfirm()}>
        <Icon name="log-out" size={18} color="#ef4444" />
        <ButtonLogoutText>Sair da conta</ButtonLogoutText>
      </ButtonLogout>
    </Container>
  );
}

export default Profile;
