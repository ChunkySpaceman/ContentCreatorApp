import React, {useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, FlatList, ScrollView, Image, Linking, SafeAreaView  } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {TwitchClientID, TwitchSecret, DiscordClientID, DiscordToken} from '../../app.json';
import { WebView } from 'react-native-webview';

import DiscordMessagesComponent from '../components/DiscordMessagesFromServerComponent';
import TwitchLiveComponent from '../components/TwitchLiveComponent';
import LoadingScreen from '../components/LoadingScreenComponent';

import appStyle from '../styles/appStyle';

function NewsScreen({navigation}){   

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
  <>{isLoading ? <LoadingScreen /> :
    <SafeAreaView  style={[ appStyle.container, appStyle.bgBlack ]}>
      <ScrollView>
        <TwitchLiveComponent/>
        <DiscordMessagesComponent />
      </ScrollView>
    </SafeAreaView >
  }</>);
};



export default NewsScreen;