import React, { useState, useContext, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';
import firestore from '@react-native-firebase/firestore';

import { Container, ButtonPost, ListServices } from './styles';

import Header from '../../components/Header';

function Home() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      function fetchServices() {
        firestore()
          .collection('services')
          .orderBy('created', 'desc')
          .get()
          .then(snapshot => {
            if (isActive) {
              setServices([]);
              const servicesList = [];

              snapshot.docs.map(u => {
                servicesList.push({
                  ...u.data(),
                  id: u.id,
                });
              });

              setServices(servicesList);
              setLoading(false);
            }
          });
      }

      fetchServices();

      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <Container>
      <Header />

      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={50} color="#000" />
        </View>
      ) : (
        <ListServices
          data={services}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}

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
