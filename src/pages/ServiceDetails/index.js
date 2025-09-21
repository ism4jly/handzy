// src/pages/ServiceDetails/index.js
import React, { useEffect, useState, useContext } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { AuthContext } from '../../contexts/auth';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Avatar,
  Price,
  Description,
  ScheduleRow,
  ScheduleText,
  PickDateButton,
  PickDateText,
  Button,
  ButtonText,
  InfoRow,
} from './styles';

export default function ServiceDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const { serviceId } = route.params; // recebido da navegação

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduling, setScheduling] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function loadService() {
      try {
        const doc = await firestore()
          .collection('services')
          .doc(serviceId)
          .get();
        if (doc.exists && mounted) {
          setService({ id: doc.id, ...doc.data() });
        }
      } catch (err) {
        console.log('Erro ao buscar serviço', err);
        Alert.alert('Erro', 'Não foi possível carregar o serviço.');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    loadService();
    return () => (mounted = false);
  }, [serviceId]);

  function showDatePicker() {
    setPickerVisible(true);
  }
  function hideDatePicker() {
    setPickerVisible(false);
  }
  function handleConfirmDate(date) {
    setSelectedDate(date);
    hideDatePicker();
  }

  async function handleSchedule() {
    if (!user) {
      Alert.alert('Atenção', 'Você precisa estar logado para agendar.');
      return;
    }
    if (!selectedDate) {
      Alert.alert('Atenção', 'Selecione data e hora para o agendamento.');
      return;
    }
    try {
      setScheduling(true);
      await firestore()
        .collection('appointments')
        .add({
          serviceId: service.id,
          serviceTitle: service.title || '',
          providerId: service.userId || service.userId || null,
          clientId: user.uid,
          clientName: user.nome,
          scheduledAt: selectedDate, // Date object será serializado pelo Firestore (ok)
          status: 'pending',
          createdAt: new Date(),
        });
      Alert.alert('Agendado', 'Seu agendamento foi criado com sucesso.');
      navigation.goBack();
    } catch (err) {
      console.log('Erro agendar', err);
      Alert.alert('Erro', 'Não foi possível agendar. Tente novamente.');
    } finally {
      setScheduling(false);
    }
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#111827" />
      </Container>
    );
  }

  if (!service) {
    return (
      <Container>
        <Title>Serviço não encontrado.</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={
            service.avatarUrl
              ? { uri: service.avatarUrl }
              : require('../../assets/avatar.png')
          }
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Title>{service.title}</Title>
          <Subtitle>
            {service.autor} • {service.categoryId}
          </Subtitle>
        </View>
        <Price>R$ {service.price}</Price>
      </Header>

      <Description>{service.description}</Description>

      <InfoRow>
        <ScheduleRow>
          <ScheduleText>
            {selectedDate
              ? selectedDate.toLocaleString()
              : 'Selecione data e hora'}
          </ScheduleText>
          <PickDateButton onPress={showDatePicker}>
            <PickDateText>Escolher</PickDateText>
          </PickDateButton>
        </ScheduleRow>
      </InfoRow>

      <Button onPress={handleSchedule} disabled={scheduling}>
        <ButtonText>
          {scheduling ? 'Agendando...' : 'Agendar Serviço'}
        </ButtonText>
      </Button>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
      />
    </Container>
  );
}
