// Row.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ style, children }) => {
  return <View style={[style,styles.row]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default Row;