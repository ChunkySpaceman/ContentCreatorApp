import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Linking, Dimensions, Image } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col4, Col3, Col2, Col6 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';


import appStyle from '../styles/appStyle';

function WhoScreen({navigation}){   

  return (
    <ScrollView style={[appStyle.container, { backgroundColor: 'black' }]}>

      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textDanger, appStyle.h4, appStyle.py3]}>
             Who am I?
        </Text>
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.pt3]}>
            Hello, my name is @ChunkySpaceman on Discord and Twitch and I made this app. Why? I usually write code that makes money so I don't have much I can legally show off, so here is something simple that I can show off. I build everything. Autocad and rapid prototyping with 3d printing. Monitoring and controlling industrial sensors and motors over bluetooth/wifi/cellular. I do full stack web dev and now mobile apps. I am a whole engineering team. I am in the market for new projects. 
        </Text>
      <Text style={[appStyle.textWhite, appStyle.h4, appStyle.pb3]}>
        PS. The forklift was me.
      </Text>
      </View>

      <View style={appStyle.centeredContainer}>
          <Image style={appStyle.image} source={require('../images/nasa.jpg')} />
      </View>
      <Text style={[appStyle.textDanger, appStyle.textCenter, appStyle.h6, appStyle.pb3]}>
        See you later Space Cowboy
      </Text>

    </ScrollView>

  );
};

export default WhoScreen;