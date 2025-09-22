import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  flex: 1;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #374151;
  margin: 4px 0 10px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1e3a8a;
  margin-top: 10px;
`;

export const StatusBadge = styled.View`
  padding: 4px 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const StatusText = styled.Text`
  font-size: 12px;
  color: #fff;
  text-transform: capitalize;
`;
