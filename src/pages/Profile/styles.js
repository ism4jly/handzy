import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f9f9ff;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 4px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #e5e7eb;
`;

export const UserInfo = styled.View`
  margin-left: 12px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

export const UserEmail = styled.Text`
  font-size: 14px;
  color: #6b7280;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3b82f6;
  padding: 10px;
  border-radius: 8px;
`;

export const ButtonPrimaryText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-left: 6px;
`;

export const ButtonAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #e0e7ff;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const ButtonActionText = styled.Text`
  margin-left: 8px;
  color: #1e3a8a;
  font-size: 14px;
  font-weight: 500;
`;

export const ButtonLogout = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fee2e2;
  padding: 14px;
  border-radius: 8px;
`;

export const ButtonLogoutText = styled.Text`
  margin-left: 8px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`;
