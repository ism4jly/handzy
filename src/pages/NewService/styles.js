import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #1c2431;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #1f2937;
  margin-top: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  background-color: #22c55e;
  border-radius: 8px;
  margin-top: 18px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  shadow-color: #418cfd;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 2;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
