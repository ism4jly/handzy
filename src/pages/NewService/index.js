import React, { useState, useContext } from 'react';

import { Container, Input, Button, ButtonText } from './styles';

import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { AuthContext } from '../../contexts/auth';

function NewService() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  async function handleService() {
    if (title === '' || description === '' || price === '') {
      alert('Preencha todos os campos');
      return;
    }
    let avatarUrl = null;

    try {
      let response = await storage
        .ref('users')
        .child(user?.uid)
        .getDownloadURL();
      avatarUrl = response;
    } catch (err) {
      avatarUrl = null;
    }

    await firestore()
      .collection('services')
      .add({
        created: new Date(),
        autor: user?.nome,
        title: title,
        description: description,
        price: price,
        avatarUrl: avatarUrl,
        userId: user?.uid,
      })
      .then(() => {
        alert('Serviço cadastrado com sucesso!');
        setTitle('');
        setDescription('');
        setPrice('');
      })
      .catch(error => console.log(error));

    navigation.goBack();
  }

  return (
    <Container>
      <Input
        placeholder="Título do serviço"
        placeholderTextColor="#9CA3AF"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Input
        placeholder="Descrição"
        placeholderTextColor="#9CA3AF"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline={true}
        maxLength={300}
        style={{ height: 200, textAlignVertical: 'top' }}
      />
      <Input
        placeholder="Preço"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
        value={price}
        onChangeText={text => setPrice(text)}
        maxLength={10}
      />

      <Button onPress={() => handleService()}>
        <ButtonText>Cadastrar Serviço</ButtonText>
      </Button>
    </Container>
  );
}

export default NewService;
