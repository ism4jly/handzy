// src/pages/ServiceDetails/styles.js
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f9f9ff;
  padding: 18px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #e5e7eb;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #111827;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #6b7280;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #0ea5e9;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #374151;
  margin-bottom: 20px;
  line-height: 20px;
`;

export const InfoRow = styled.View`
  margin-bottom: 16px;
`;

export const ScheduleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ScheduleText = styled.Text`
  color: #111827;
`;

export const PickDateButton = styled.TouchableOpacity`
  background-color: #3b82f6;
  padding: 8px 12px;
  border-radius: 8px;
`;

export const PickDateText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: #10b981;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
