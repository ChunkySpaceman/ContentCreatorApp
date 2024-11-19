import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Linking, Dimensions } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col4, Col3, Col2, Col6 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


import appStyle from '../styles/appStyle';

function CreditsScreen({navigation}){   

  return (
    <View style={[appStyle.container, { backgroundColor: 'black' }]}>
    
      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
            A Special Thanks to everyone who has helped!
        </Text>
      </View>
    
    
      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
            Branding/Merch Art: MattsBeans
        </Text>
      </View>

    
      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
            Vods Compiling: SusyEmeralds + Discord
        </Text>
      </View>
      
      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
            Icons/Emotes: HOSS
        </Text>
      </View>
      
      
      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
            Music Playlist Compiling: SusyEmeralds + RebelliousRook + Chat!
        </Text>
      </View>
      
      
      <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
        <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
            Discord + Twitch Mod Team!
        </Text>
      </View>
    
    </View>

  );
};

export default CreditsScreen;