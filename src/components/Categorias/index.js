import React from 'react';
import { FlatList } from 'react-native';
import { Card, IconContainer, IconText, SubText } from './styles';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {
    id: '1',
    name: 'Técnico',
    desc: 'Manutenção e reparo',
    icon: 'tool',
    color: '#3b82f6',
  },
  {
    id: '2',
    name: 'Limpeza',
    desc: 'Serviços de limpeza',
    icon: 'zap',
    color: '#22c55e',
  },
  {
    id: '3',
    name: 'Manutenção',
    desc: 'Reparos em geral',
    icon: 'hammer',
    color: '#f97316',
  },
  {
    id: '4',
    name: 'Beleza',
    desc: 'Cabelo e estética',
    icon: 'scissors',
    color: '#ec4899',
  },
  {
    id: '5',
    name: 'Educação',
    desc: 'Aulas particulares',
    icon: 'book',
    color: '#8b5cf6',
  },
  {
    id: '6',
    name: 'Transporte',
    desc: 'Mudanças e fretes',
    icon: 'truck',
    color: '#ef4444',
  },
];

export default function Categorias() {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Card>
          <IconContainer style={{ backgroundColor: item.color }}>
            <Feather name={item.icon} size={22} color="#fff" />
          </IconContainer>
          <IconText>{item.name}</IconText>
          <SubText>{item.desc}</SubText>
        </Card>
      )}
    />
  );
}
