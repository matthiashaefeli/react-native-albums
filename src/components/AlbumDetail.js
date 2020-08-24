import React from 'react';
import { View, Text } from 'react-native';
import AlbumList from './AlbumList';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  )
};

export default AlbumDetail;