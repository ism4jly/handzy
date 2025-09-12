import React, { useState } from 'react';

import { Container, Input, Button, ButtonText } from './styles';

function NewService() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

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

      <Button>
        <ButtonText>Cadastrar Serviço</ButtonText>
      </Button>
    </Container>
  );
}

export default NewService;
