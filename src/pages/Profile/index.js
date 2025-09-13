import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { Container } from './styles';

import { AuthContext } from '../../contexts/auth';

function Profile() {
  const { signOut } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Container>
      <Text style={{ color: '#fff' }}>Home Page</Text>
      <Button title="Sair" onPress={() => handleSignOut()} />
    </Container>
  );
}

export default Profile;
