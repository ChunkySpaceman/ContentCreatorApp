import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Linking, Dimensions } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col4, Col3, Col2, Col6 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';


import appStyle from '../styles/appStyle';

function InfoScreen({navigation}){   

  const navigateToInstagram = () => {
    const url = 'https://www.instagram.com/thewillneff/'; // Replace with your desired URL
    //Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  
  return (
    <View style={ [appStyle.container]}>

       
        
        <TouchableOpacity 
          style={[ appStyle.btnDanger, appStyle.mt3 ]}
          activeOpacity={1}
          onPress={navigateToInstagram}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            TEXT
          </Text>
        </TouchableOpacity>
      
    </View>

  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      flex: 1,
      aspectRatio: 1, // This ensures a square aspect ratio for each item
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      padding: 0
    },
    gradient:{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      margin:0,
      padding:0,
      borderRadius: 5,
    },
    instagram:{
    },
    discord:{
      backgroundColor: '#5865F2',
    },
    
    twitter:{
      backgroundColor: '#00ACEE',
    },
    reddit:{
      backgroundColor: '#FF4500',
    },
    
  });

export default InfoScreen;