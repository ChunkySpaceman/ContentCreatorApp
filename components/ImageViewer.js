import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles/appStyle';

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={placeholderImageSource} />
    </View>
  );
}

