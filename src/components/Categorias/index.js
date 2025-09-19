import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Card, IconContainer, IconText, SubText } from './styles';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {
    id: '1',
    categoryId: 'tecnico',
    name: 'Técnico',
    desc: 'Manutenção e reparo',
    icon: 'tool',
    color: '#3b82f6',
  },
  {
    id: '2',
    categoryId: 'limpeza',
    name: 'Limpeza',
    desc: 'Serviços de limpeza',
    icon: 'zap',
    color: '#22c55e',
  },
  {
    id: '3',
    categoryId: 'informatica',
    name: 'Informática',
    desc: 'Serviços de informática',
    icon: 'cpu',
    color: '#f97316',
  },
  {
    id: '4',
    categoryId: 'beleza',
    name: 'Beleza',
    desc: 'Cabelo e estética',
    icon: 'scissors',
    color: '#ec4899',
  },
  {
    id: '5',
    categoryId: 'educacao',
    name: 'Educação',
    desc: 'Aulas particulares',
    icon: 'book',
    color: '#8b5cf6',
  },
  {
    id: '6',
    categoryId: 'transporte',
    name: 'Transporte',
    desc: 'Mudanças e fretes',
    icon: 'truck',
    color: '#ef4444',
  },
];

export default function Categorias({ selectedCategory, onSelectCategory }) {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item.categoryId;

        return (
          <TouchableOpacity
            onPress={() => onSelectCategory(item.name)}
            style={{
              flex: 1,
            }}
          >
            <Card
              style={{
                borderWidth: isSelected ? 2 : 0,
                borderColor: isSelected ? item.color : 'transparent',
              }}
            >
              <IconContainer style={{ backgroundColor: item.color }}>
                <Feather name={item.icon} size={22} color="#fff" />
              </IconContainer>
              <IconText>{item.name}</IconText>
              <SubText>{item.desc}</SubText>
            </Card>
          </TouchableOpacity>
        );
      }}
    />
  );
}
