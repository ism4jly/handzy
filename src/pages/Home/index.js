import React, { useState, useContext, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
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

import {
  Container,
  ButtonPost,
  ListServices,
  Title,
  Subtitle,
  Icon,
  SearchContainer,
  SearchInput,
  SectionTitle,
} from './styles';

import ServicesList from '../../components/ServicesList';
import Categorias from '../../components/Categorias';

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
      <ListServices
        data={loading ? [] : services}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ServicesList data={item} userId={user?.uid} />
        )}
        ListHeaderComponent={
          <>
            <Title>Olá! 👋</Title>
            <Subtitle>Encontre o profissional ideal para você</Subtitle>

            <SearchContainer>
              <Icon>
                <Feather name="search" size={20} color="#6b7280" />
              </Icon>
              <SearchInput
                placeholder="Buscar serviços..."
                placeholderTextColor="#9ca3af"
              />
            </SearchContainer>

            <SectionTitle>Categorias</SectionTitle>
            <Categorias />

            <SectionTitle>Serviços</SectionTitle>

            {/* Loading aparece logo após "Serviços" */}
            {loading && (
              <View style={{ padding: 20, alignItems: 'center' }}>
                <ActivityIndicator size={40} color="#111827" />
              </View>
            )}
          </>
        }
        ListFooterComponent={<View style={{ height: 120 }} />}
        showsVerticalScrollIndicator={false}
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
