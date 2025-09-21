import React from 'react';
import {
  Card,
  ServiceTitle,
  InfoText,
  Button,
  ButtonText,
  Row,
  InfoContainer,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { categoryIcons } from '../../utils/categoryIcons';
import { useNavigation } from '@react-navigation/native';

export default function ServicesList({ data, userId }) {
  const category = categoryIcons[data.categoryId] || {
    icon: 'briefcase',
    color: '#6b7280',
  };

  const navigation = useNavigation();

  function handleOpenDetails() {
    navigation.navigate('ServiceDetails', { serviceId: data.id });
  }

  return (
    <Card>
      <Row>
        <Feather name={category.icon} size={24} color={category.color} />
      </Row>
      <InfoContainer>
        <ServiceTitle>{data?.title}</ServiceTitle>

        <InfoText>
          {data?.autor} • R$ {data?.price}
        </InfoText>

        <Button onPress={() => handleOpenDetails()}>
          <ButtonText>Ver detalhes</ButtonText>
        </Button>
      </InfoContainer>
    </Card>
  );
}
