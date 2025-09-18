import React, { useState, useContext } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { Picker } from '@react-native-picker/picker';

import { AuthContext } from '../../contexts/auth';
import {
  Container,
  Card,
  Title,
  Subtitle,
  Label,
  Input,
  Row,
  InputSmall,
  Button,
  ButtonText,
  Column,
} from './styles';

function NewService() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');

  async function handleService() {
    if (!title || !category || !description || !price) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
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
        title,
        category,
        description,
        price,
        duration,
        location,
        avatarUrl,
        userId: user?.uid,
      })
      .then(() => {
        Alert.alert('Sucesso', 'Serviço cadastrado com sucesso!');
        setTitle('');
        setCategory('');
        setDescription('');
        setPrice('');
        setDuration('');
        setLocation('');
        navigation.goBack();
      })
      .catch(error => console.log(error));
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Informações do Serviço</Title>
        <Subtitle>
          Preencha os detalhes do seu serviço para que clientes possam
          encontrá-lo
        </Subtitle>

        <Card>
          <Label>Título do Serviço *</Label>
          <Input
            placeholder="Ex: Instalação de Ar Condicionado"
            value={title}
            onChangeText={setTitle}
          />

          <Label>Categoria *</Label>
          <Picker
            selectedValue={category}
            onValueChange={itemValue => setCategory(itemValue)}
            style={{
              backgroundColor: '#f3f4f6',
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            <Picker.Item label="Selecione uma categoria" value="" />
            <Picker.Item label="Técnico" value="tecnico" />
            <Picker.Item label="Limpeza" value="limpeza" />
            <Picker.Item label="Beleza" value="beleza" />
            <Picker.Item label="Educação" value="educacao" />
            <Picker.Item label="Informática" value="ti" />
            <Picker.Item label="Transporte" value="transporte" />
          </Picker>

          <Label>Descrição *</Label>
          <Input
            placeholder="Descreva detalhadamente seu serviço, experiência e diferenciais..."
            value={description}
            onChangeText={setDescription}
            multiline
            style={{ height: 100, textAlignVertical: 'top' }}
          />

          <Row>
            <Column>
              <Label>Preço</Label>
              <InputSmall
                placeholder="R$ 120"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
              />
            </Column>

            <Column>
              <Label>Duração</Label>
              <InputSmall
                placeholder="1 hora"
                value={duration}
                onChangeText={setDuration}
              />
            </Column>
          </Row>

          <Label>Localização</Label>
          <Input
            placeholder="Ex: São Paulo, SP - Atendo toda cidade"
            value={location}
            onChangeText={setLocation}
          />

          <Button onPress={() => handleService()}>
            <ButtonText>Cadastrar Serviço</ButtonText>
          </Button>
        </Card>
      </ScrollView>
    </Container>
  );
}

export default NewService;
