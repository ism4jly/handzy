import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Appointments from '../pages/Appointments';
import NewService from '../pages/NewService';
import ServiceDetails from '../pages/ServiceDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewService"
        component={NewService}
        options={{
          title: 'Criar serviço',
          headerTintColor: '#111827',
          headerStyle: {
            backgroundColor: '#e5e7eb',
          },
        }}
      />

      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetails}
        options={{
          title: 'Detalhes do serviço',
          headerTintColor: '#111827',
          headerStyle: {
            backgroundColor: '#e5e7eb',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 3,
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Agendamentos"
        component={Appointments}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
