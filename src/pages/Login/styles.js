import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f9fafb;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 4;
`;

export const Title = styled.Text`
  color: #111827;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #f3f4f6;
  margin-top: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  color: #111827;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #3b82f6;
  border-radius: 8px;
  margin-top: 18px;
  padding: 14px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 14px;
`;

export const LinkText = styled.Text`
  color: #3b82f6;
  font-size: 14px;
  text-align: center;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

export const SignUpText = styled.Text`
  color: #6b7280;
  font-size: 14px;
`;

export const SignUpLink = styled.Text`
  color: #3b82f6;
  font-size: 14px;
  font-weight: bold;
  margin-left: 4px;
`;

export const LogoImage = styled.Image`
  width: 120px;
  height: 120px;
  align-self: center;
`;

export const AppName = styled.Text`
  color: #2e9cff;
  font-size: 26px;
  font-weight: bold;
  align-self: center;
  margin-top: -20px;
`;
