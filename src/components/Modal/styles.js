import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 40px;
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.View`
  height: 230px;
  background: #efefef;
  padding: 20px;
  border-radius: 5px;
  align-self: stretch;
  justify-content: center;
`;

export const ModalTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Error = styled.Text`
  color: #f66;
  font-size: 18;
  margin-top: 10px;
  text-align: center;
`;

export const Input = styled.TextInput`
  height: 50px;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 3px;
  margin: 20px 0;
  background: #fff;
  font-size: 18;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  border-radius: 5;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${({ bgColor }) => bgColor};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
