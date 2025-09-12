import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import { Container, ButtonPost } from './styles';

function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Home Page</Text>

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
