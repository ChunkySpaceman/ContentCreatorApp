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

function Playlists({navigation}){   

  return (
    <View style={[appStyle.container, { backgroundColor: 'black' }]}>

      <Text style={appStyle.textWhite}>
          Branding Art: MattsBeans
          Playlist Art: Hoss
          Vods Compiling: SusyEmeralds
          Music Playlist Compiling: RebelliousRook
      </Text>
      
    </View>

  );
};

export default Playlists;