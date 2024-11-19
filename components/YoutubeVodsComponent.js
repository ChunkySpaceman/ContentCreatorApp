import React, {useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, FlatList, ScrollView, Image, Linking } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { YoutubeKey, YTdata } from '../../app.json';
import { WebView } from 'react-native-webview';

import appStyle from '../styles/appStyle';

const YoutubeVodsComponent = () => {
 
   const [videos, setVideos] = useState({});
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const openYouTubeVideo = (videoId) => {setSelectedVideoId(videoId);};

//TODO: Make this fetch from somewhere easy to edit!!!
  const channels = [

    { 
      type: 'channel',
      name: 'WillNeff Vods', 
      url: 'https://www.youtube.com/c/WillNeff/videos',
      id: 'UCFsDMlkYLpTVt9-cqmZxqZg'
    },
    { 
      type: 'channel',
      name: '@FearAndPodcast', 
      url: 'https://www.youtube.com/c/FearAndPodcast/videos',
      id: 'UCnI_h3e6b5jGLfly2SY57SA'
    },
    { 
      type: 'playlist',
      name: 'Name Your Price!',
      url: 'https://www.youtube.com/playlist?list=PLhlfkmKy30g5M6CE65873i5D8jCtzmvds',
      id: 'PLhlfkmKy30g5M6CE65873i5D8jCtzmvds'      
    },
  ];

  const openInYouTube = (videoId) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeUrl).catch((err) => console.error('Error opening YouTube:', err));
  };

  
  
  const fetchVideos = ( channel) => {

      const apiUrl =
      channel.type === 'channel'
        ? `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel.id}&maxResults=5&type=video&order=date&key=${YoutubeKey}`
        : `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channel.id}&maxResults=50&order=date&key=${YoutubeKey}`;
        /*
        setVideos(prevVideos => ({
            ...prevVideos,
            [channel.id]: YTdata.items, // Store videos under the channel or playlist ID
          }));
        */
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.items) {
            console.log("fetching channel data");
            const newVideos = data.items;
            const videos = channel.type === 'playlist' ? newVideos.reverse() : newVideos;
            setVideos(prevVideos => ({
              ...prevVideos,
              [channel.id]: videos, // Store videos under the channel or playlist ID
            }));
          }
        })
        .catch(error => console.error(`Error fetching ${channel.type} videos:`, error));
        
  };
  
  useEffect(() => {
    // Fetch videos for the first channel on mount
    channels.forEach(channel => {
      fetchVideos(channel);
    });
  }, []);


  
  
  const renderVod = ({ item }) => (
      <View style={appStyle.px2}>
        <TouchableOpacity onPress={() => openInYouTube(item.id.videoId)}>
          <Image
            source={{ uri: item.snippet.thumbnails.medium.url }}
            style={[ { height: Dimensions.get('window').width*0.8*9/16, width: Dimensions.get('window').width*0.8 }]}
          />
        </TouchableOpacity>

        <Text style={[ appStyle.h5, appStyle.textWhite, appStyle.mt2, appStyle.ml2]}>{item.snippet.title}</Text>
      </View>
  );
  
  return(
    <View>
    {channels.map(channel => (
        <View key={channel.id} style={{
          height: Dimensions.get('window').height*0.4
        }}>
          <Text style={[ appStyle.textWhite, appStyle.h4, appStyle.ml2, appStyle.mb1]}>{channel.name}</Text>
          <FlatList
            horizontal
            data={videos[channel.id] || []}
            keyExtractor={item => item.id.videoId || item.id}
            renderItem={renderVod}
          />
        </View>
      ))}
    </View>
  );
 
 
};

export default YoutubeVodsComponent;