import React, { useContext, useState } from 'react';
import { Alert, Modal, Platform } from 'react-native';

import firestore from '@react-native-firebase/firestore';

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
  ModalContainer,
  ButtonBack,
  Input,
  ButtonModal,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { AuthContext } from '../../contexts/auth';
import { ButtonText } from '../Login/styles';

function Profile() {
  const { signOut, user, setUser, storageUser } = useContext(AuthContext);

  const [nome, setNome] = useState(user?.nome);
  const [open, setOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
  }

  function handleSignOutConfirm() {
    Alert.alert('Sair da conta', 'Tem certeza que deseja sair?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => handleSignOut() },
    ]);
  }

  async function updateProfile() {
    if (nome === '') {
      return;
    }

    await firestore().collection('users').doc(user.uid).update({
      nome: nome,
    });

    //Buscar todos os serviços do usuário e atualizar o nome
    const servicesDocs = await firestore()
      .collection('services')
      .where('userId', '==', user?.uid)
      .get();

    //Percorrer todos serviços desse user e atualizar o nome
    servicesDocs.forEach(async doc => {
      await firestore().collection('services').doc(doc.id).update({
        autor: nome,
      });
    });

    let data = {
      uid: user?.uid,
      nome: nome,
      email: user?.email,
    };

    setUser(data);
    storageUser(data);
    setOpen(false);
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

        <ButtonPrimary onPress={() => setOpen(true)}>
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

      <Modal animationType="slide" transparent={true} visible={open}>
        <ModalContainer behavior={Platform.OS === 'android' ? '' : 'padding'}>
          <ButtonBack onPress={() => setOpen(false)}>
            <Icon name="arrow-left" size={22} color="#fff" />
            <ButtonText color="#fff">Voltar</ButtonText>
          </ButtonBack>

          <Input
            placeholder={user?.nome}
            value={nome}
            onChangeText={text => setNome(text)}
          />

          <ButtonModal onPress={() => updateProfile()}>
            <ButtonText color="#FFF">Salvar</ButtonText>
          </ButtonModal>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Profile;
