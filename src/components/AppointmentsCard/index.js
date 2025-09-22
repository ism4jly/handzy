import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import {
  Card,
  Title,
  Subtitle,
  Row,
  Price,
  StatusBadge,
  StatusText,
} from './styles';

export default function AppointmentCard({ data, onReschedule, onCancel }) {
  const getStatusColor = status => {
    switch (status) {
      case 'pending':
        return '#facc15'; // amarelo
      case 'completed':
        return '#22c55e'; // verde
      case 'canceled':
        return '#ef4444'; // vermelho
      default:
        return '#9ca3af'; // cinza
    }
  };

  const translateStatus = status => {
    switch (status) {
      case 'pending':
        return 'Pendente';
      case 'completed':
        return 'Concluído';
      case 'canceled':
        return 'Cancelado';
      default:
        return 'Desconhecido';
    }
  };

  // Firestore salva Timestamp, precisa converter
  const scheduledDate = data.scheduledAt
    ? new Date(data.scheduledAt.seconds * 1000)
    : null;

  // Atualizar status no Firestore
  const handleUpdateStatus = async newStatus => {
    try {
      await firestore()
        .collection('appointments')
        .doc(data.id)
        .update({ status: newStatus });

      console.log(`Agendamento ${data.id} atualizado para ${newStatus}`);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  return (
    <Card>
      <Row>
        <Title>{data.service?.title || 'Serviço'}</Title>
        <StatusBadge style={{ backgroundColor: getStatusColor(data.status) }}>
          <StatusText>{translateStatus(data.status)}</StatusText>
        </StatusBadge>
      </Row>

      <Subtitle>{data.service?.autor || 'Profissional'}</Subtitle>

      {scheduledDate && (
        <Row>
          <Feather name="calendar" size={16} color="#6b7280" />
          <Text style={{ marginLeft: 5 }}>
            {scheduledDate.toLocaleDateString()} -{' '}
            {scheduledDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </Row>
      )}

      <Row>
        <Feather name="map-pin" size={16} color="#6b7280" />
        <Text style={{ marginLeft: 5 }}>
          {data.service?.location || 'Local não informado'}
        </Text>
      </Row>

      {data.service?.price && <Price>R$ {data.service.price}</Price>}

      {data.status === 'pending' && (
        <Row style={{ marginTop: 10, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={onReschedule}
            style={{
              backgroundColor: '#e0e7ff',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Text style={{ color: '#1e3a8a' }}>Reagendar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleUpdateStatus('completed')}
            style={{
              backgroundColor: '#22c55e',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Text style={{ color: '#fff' }}>Concluir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onCancel}
            style={{
              backgroundColor: '#ef4444',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: '#fff' }}>Cancelar</Text>
          </TouchableOpacity>
        </Row>
      )}
    </Card>
  );
}
