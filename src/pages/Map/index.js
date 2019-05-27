import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet, StatusBar, View, Text, Image,
} from 'react-native';

import MapModal from '~/components/Modal';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { Actions as ModalActions } from '~/store/ducks/modal';
import { Actions as UserActions } from '~/store/ducks/user';

import { Container } from './styles';

// TODO: ADD YOUR MAPBOX API TOKEN HERE!
MapboxGL.setAccessToken('YOUR_MAPBOX_TOKEN');

const Map = ({
  modalActions, userActions, modalVisible, loading, error, users,
}) => {
  const [username, setUsername] = useState('');

  const onChangeText = text => setUsername(text);

  const onCancel = () => modalActions.hideModal();

  const onSave = () => {
    userActions.addUserRequest(username);
    setUsername('');
  };

  const renderAnnotations = () => {
    console.tron.log('users', users);
    return users.map(user => (
      <MapboxGL.PointAnnotation
        title={user.login}
        key={user.id.toString()}
        id={user.id.toString()}
        coordinate={[parseFloat(user.location.longitude), parseFloat(user.location.latitude)]}
      >
        <Image source={{ uri: user.avatar }} style={styles.avatar} />

        <MapboxGL.Callout style={styles.calloutContainer}>
          <Text style={styles.user}>{user.name}</Text>
          {!!user.bio && <Text style={styles.bio}>{user.bio}</Text>}
        </MapboxGL.Callout>
      </MapboxGL.PointAnnotation>
    ));
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <MapModal
        value={username}
        onCancel={onCancel}
        onChangeText={onChangeText}
        isVisible={modalVisible}
        loading={loading}
        error={error}
        onSave={onSave}
      />
      <MapboxGL.MapView
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
        onLongPress={mapInfo => modalActions.showModal(mapInfo.geometry.coordinates)}
      >
        {!!users.length && renderAnnotations()}
      </MapboxGL.MapView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: '#5f5',
    zIndex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calloutContainer: {
    width: 200,
    backgroundColor: '#777',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  bio: {
    color: '#fff',
  },
});

const mapStateToProps = state => ({
  modalVisible: state.modal.modalVisible,
  loading: state.usersData.loading,
  error: state.usersData.error,
  users: state.usersData.users,
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(ModalActions, dispatch),
  userActions: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
