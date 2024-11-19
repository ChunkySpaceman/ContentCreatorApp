import React, {useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, FlatList, ScrollView, Image, Linking, SafeAreaView  } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {TwitchClientID, TwitchSecret, DiscordClientID, DiscordToken} from '../../app.json';
import { WebView } from 'react-native-webview';

const broadcasterId ='122888997';
const broadcasterName = "WillNeff";

import appStyle from '../styles/appStyle';


const TwitchLiveComponent = ({ }) => {
  const [twitchToken, setTwitchToken] = useState('');
  const [isLive, setIsLive] = useState(false);


  const api = axios.create({
    baseURL: 'https://api.twitch.tv/helix',
    headers: {
      'Client-ID': TwitchClientID,
    },
  });
  
  const getAccessTokenRequest = async () => {
    try {
      const response = await api.post(
        'https://id.twitch.tv/oauth2/token', null, {
          params: {
            client_id: TwitchClientID,
            client_secret: TwitchSecret,
            grant_type: 'client_credentials',  
          }
      });
      setTwitchToken(response.data.access_token);
    } catch (error) {
      console.error('Error getting access token:', error);
    }
  };

  useEffect(() => {
      getAccessTokenRequest ();
  }, []); // Empty dependency array to run once on mount

  const getLiveStatus = async () => {
    if (!twitchToken) {
      console.log('Access token is not available yet.');
      return;
    }
    try {

      const response = await api.get(`/streams`, {
        headers: {
          'Authorization': `Bearer ${twitchToken}`,
        },
        params: {
          user_id:broadcasterId
        },
      });

      //const data = await response.json();
      const data = response.data.data[0].type ?? false;

      //console.log(JSON.stringify(data));
      // Check if the user is currently live
      setIsLive(data);
      handleStateChange(data);
    } catch (error) {
      //console.error('Error checking live status:', error);
    }
  };
  
  useEffect(() => {
    getLiveStatus();

    setTimeout(() => {
      getLiveStatus();
    }, 1000*60*30);//

    
  }, [twitchToken]);
    

  
  return (
    <View style={[appStyle.Container]}>
     <Text style={[appStyle.textWhite, appStyle.h3, appStyle.p2]}>
        {isLive === 'live' ? 'Will Neff is Live!' : 'Updates from Discord'}
      </Text>
      
      {isLive === 'live' ? (
        <WebView
          source={{ uri: 
`https://player.twitch.tv/?channel=${broadcasterName}&parent=localhost` 
          }}
          style={{ 
            height: Dimensions.get('window').height * 0.3,
            width: Dimensions.get('window').width 
          }}
        />
      ) : null}
    </View>
  );
};


export default TwitchLiveComponent;