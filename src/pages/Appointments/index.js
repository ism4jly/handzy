import React, { useState, useEffect } from 'react';
import { Text, FlatList, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AppointmentCard from '../../components/AppointmentsCard';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'pendentes', title: 'Pendentes' },
    { key: 'concluidos', title: 'Concluídos' },
    { key: 'cancelados', title: 'Cancelados' },
  ]);

  useEffect(() => {
    const currentUserId = auth().currentUser.uid;

    const unsubscribe = firestore()
      .collection('appointments')
      .where('providerId', '==', currentUserId) // só agendamentos do profissional
      .onSnapshot(async snapshot => {
        const list = [];

        for (const doc of snapshot.docs) {
          const appointment = { id: doc.id, ...doc.data() };

          // Buscar informações do serviço
          if (appointment.serviceId) {
            try {
              const serviceDoc = await firestore()
                .collection('services')
                .doc(appointment.serviceId)
                .get();

              if (serviceDoc.exists) {
                appointment.service = serviceDoc.data();
              }
            } catch (error) {
              console.error('Erro ao buscar serviço:', error);
            }
          }

          list.push(appointment);
        }

        setAppointments(list);
      });

    return () => unsubscribe();
  }, []);

  const renderList = status => (
    <FlatList
      data={appointments.filter(item => item.status === status)}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <AppointmentCard
          data={item}
          onReschedule={() => console.log('Reagendar', item.id)}
          onCancel={() => console.log('Cancelar', item.id)}
        />
      )}
      ListEmptyComponent={
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          Nenhum agendamento {status}
        </Text>
      }
      contentContainerStyle={{ padding: 16 }}
    />
  );

  const renderScene = SceneMap({
    pendentes: () => renderList('pending'),
    concluidos: () => renderList('completed'),
    cancelados: () => renderList('canceled'),
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#3b82f6' }}
          style={{ backgroundColor: '#f9fafb' }}
          activeColor="#111827"
          inactiveColor="#6b7280"
        />
      )}
    />
  );
}
