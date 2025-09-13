import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import { Container, ButtonPost, ListServices } from './styles';

import Header from '../../components/Header';

function Home() {
  const navigation = useNavigation();
  const [services, setServices] = useState([
    { id: '1', content: 'Teste123' },
    { id: '2', content: 'Teste123456' },
    { id: '3', content: 'Teste123789' },
  ]);

  return (
    <Container>
      <Header />

      <ListServices
        data={services}
        renderItem={({ item }) => (
          <View>
            <Text>{item.content}</Text>
          </View>
        )}
      />

      <ButtonPost
        activeOpacity={0.6}
        onPress={() => navigation.navigate('NewService')}
      >
        <Feather name="edit-2" size={25} color="#fff" />
      </ButtonPost>
    </Container>
  );
}

export default Home;
