import React, { useState, useContext, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';

import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from '@react-native-firebase/firestore';

import { Container, ButtonPost, ListServices } from './styles';

import Header from '../../components/Header';
import ServicesList from '../../components/ServicesList';

function Home() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function fetchServices() {
        try {
          const db = getFirestore();
          const servicesRef = collection(db, 'services');
          const q = query(servicesRef, orderBy('created', 'desc'));

          const snapshot = await getDocs(q);

          if (isActive) {
            const servicesList = [];

            snapshot.forEach(doc => {
              servicesList.push({
                ...doc.data(),
                id: doc.id,
              });
            });

            setServices(servicesList);
            setLoading(false);
          }
        } catch (error) {
          console.error('Erro ao buscar serviços: ', error);
          setLoading(false);
        }
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
          renderItem={({ item }) => (
            <ServicesList data={item} userId={user?.uid} />
          )}
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
