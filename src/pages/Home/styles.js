import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9ff;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #111827;
  margin-top: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 20px;
  elevation: 2;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #111827;
  margin: 20px 0 10px;
`;

export const Icon = styled.View`
  margin-right: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #111827;
`;

export const ButtonPost = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 6%;
  width: 60px;
  height: 60px;
  background-color: #3b82f6;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ListServices = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;
