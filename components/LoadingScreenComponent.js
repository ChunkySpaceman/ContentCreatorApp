import React from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import appStyle from '../styles/appStyle';

const nefflogo = require("../images/willnefflogo.png");


const LoadingScreen = () => {
  return (
    <View style={[appStyle.centeredContainer, appStyle.bgBlack]}>
      <Image source={nefflogo} style={{ width: '80%', height: '80%', resizeMode: 'contain', }} />
    </View>
  );
};


export default LoadingScreen;