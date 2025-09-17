import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  elevation: 3;
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
  background-color: #ecf1fc;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
`;

export const ServiceTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #6b7280;
  margin: 6px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3b82f6;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
