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

export default function ServicesList({ data, userId }) {
  return (
    <Card>
      <Row>
        <Feather name="tool" size={24} color="#3b82f6" />
      </Row>
      <InfoContainer>
        <ServiceTitle>{data?.title}</ServiceTitle>

        <InfoText>
          {data?.autor} • R$ {data?.price}
        </InfoText>

        <Button>
          <ButtonText>Ver detalhes</ButtonText>
        </Button>
      </InfoContainer>
    </Card>
  );
}
