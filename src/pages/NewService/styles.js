import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f6ff;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  elevation: 2;
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
  margin-top: 12px;
`;

export const Input = styled.TextInput`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 16px;
  color: #111827;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Column = styled.View`
  flex: 1;
  margin-right: 8px;
`;

export const InputSmall = styled.TextInput`
  flex: 1;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 16px;
  color: #111827;
  margin-right: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3b82f6;
  border-radius: 8px;
  margin-top: 20px;
  padding: 14px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
