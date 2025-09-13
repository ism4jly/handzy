import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

import Header from '../../components/Header';

function Search() {
  return (
    <Container>
      <Header />
      <Text style={{ color: '#fff' }}>Search</Text>
    </Container>
  );
}

export default Search;
