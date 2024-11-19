// InstructionsScreen.js
import React, {useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {TwitchClientID, TwitchSecret} from '../../app.json';
import { WebView } from 'react-native-webview';

import appStyle from '../styles/appStyle';

function VodsScreen({navigation}){   
  const [twitchToken, setTwitchToken] = useState('');

  const [clips, setClips] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Track if there are more clips to load
  const [page, setPage] = useState(1); // Track the current page for pagination
  const [isFetching, setIsFetching] = useState(false); // Track if a fetch operation is in progress
  const [isLive, setIsLive] = useState(false);

  const Today = new Date();
  const STATE_DATE = new Date(Today.setDate(Today.getDate() - 7 ));
  const broadcasterId ='122888997';
  
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

  const getClips = async () => {
    
    if (!twitchToken) {
      console.log('Access token is not available yet.');
      return;
    }
    if (!isFetching && !hasMore) {
      console.log('no more or no fetching');
      return;
    }
    try {
      setIsFetching(true);

      const response = await api.get('/clips', {
        headers: {
          'Authorization': `Bearer ${twitchToken}`,
        },
        params: {
          broadcaster_id: broadcasterId,
          started_at: STATE_DATE,
          first: 20,
          after: page > 1 ? clips[clips.length - 1]?.cursor : undefined,
        },
      });

      const newClips = response.data.data;
      setClips(newClips);
      
    } catch (error) {
      console.error('Error getting clips:', error);
    } finally {
      setIsFetching(false);
    }
  };

  
  useEffect(() => {
    getClips();
  }, [twitchToken]);
  
  
  
  const renderItem = ({ item }) => (
   <View>
      <Text style={[appStyle.textWhite, appStyle.pt3, appStyle.h4, appStyle.px2]} >{item.title} - {item.view_count.toLocaleString("en-US")} views</Text>
        <WebView
        source={{ uri: `${item.embed_url}&autoplay=false&preload=none&parent=localhost` }}
        style={{ height: Dimensions.get('window').height*0.3, width: '100%' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />  
    </View>
  );

  const renderFooter = () => {
    return isFetching ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;
  };

  const handleLoadMore = () => {
      getClips();
  };
  
  return (
    <View style={ appStyle.container }>
      <FlatList
        data={clips}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        //onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>

  );
};



export default VodsScreen;