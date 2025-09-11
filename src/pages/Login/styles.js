import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f9fafd;
    justify-content: center;
    align-items: center;
    padding: 24px;
`;


export const Title = styled.Text`
    color: #23272a;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
    color: #6b7280;
    font-size: 16px;
    margin-bottom: 24px;
`;

export const Input = styled.TextInput`
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 16px;
    border: 2px solid #e5e7eb;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: #418cfd;
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

export const Link = styled.TouchableOpacity`
    margin-top: 12px;
`;

export const LinkText = styled.Text`
    color: #418cfd;
    font-size: 14px;
    text-align: center;
`;

export const SeparatorContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 24px 0 16px 0;
`;

export const SeparatorLine = styled.View`
    flex: 1;
    height: 1px;
    background-color: #e5e7eb;
`;

export const SeparatorText = styled.Text`
    margin: 0 12px;
    color: #888;
    font-size: 14px;
`;


export const SignUpContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`;

export const SignUpText = styled.Text`
    color: #6b7280;
    font-size: 15px;
`;

export const SignUpLink = styled.Text`
    color: #418cfd;
    font-size: 15px;
    font-weight: bold;
    margin-left: 4px;
`;