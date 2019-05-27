import React from 'react';

import { ActivityIndicator, Modal } from 'react-native';

import {
  Container,
  ModalContainer,
  ModalTitle,
  Input,
  ButtonsContainer,
  ModalButton,
  ButtonText,
  Error,
} from './styles';

const MapModal = ({
  onChangeText, onCancel, isVisible, value, loading, error, onSave,
}) => (
  <Modal animationType="fade" transparent visible={isVisible} onRequestClose={() => onCancel()}>
    <Container>
      <ModalContainer>
        <ModalTitle>Add user</ModalTitle>
        {!!error && <Error>{error}</Error>}
        <Input
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => onChangeText(text)}
          placeholder="github username"
        />
        <ButtonsContainer>
          <ModalButton bgColor="#777" onPress={() => onCancel()}>
            <ButtonText>Cancel</ButtonText>
          </ModalButton>
          <ModalButton bgColor="#5c5" onPress={() => onSave()}>
            {loading ? <ActivityIndicator color="#fff" /> : <ButtonText>Save</ButtonText>}
          </ModalButton>
        </ButtonsContainer>
      </ModalContainer>
    </Container>
  </Modal>
);

export default MapModal;
