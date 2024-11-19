import React, {useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, FlatList, ScrollView, Image, Linking } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {DiscordClientID, DiscordToken} from '../../app.json';
import { WebView } from 'react-native-webview';

const serverID = '583546251644108801';
const channelId1 = '887439049177059338';
const channelId2 = '593912940147507230';//'930178781795217449';

import appStyle from '../styles/appStyle';

const DiscordMessagesComponent = () => {
  const [discordMessages, setDiscordMessages] = useState([]);
  //const [sortedMessages, setSortedMessages] = useState([]);
  //const [processedMessages, setProcessedMessages] = useState([]);
  //const [fetchedMessages, setFetchedMessages] = useState([]);
  
  useEffect(() => {
    fetchMessages()
      .catch(error => console.error('Error:', error));
  }, []);
  
  useEffect(() => {
    //console.log("change detected in: ", discordMessages)
  }, [discordMessages]);

  
  const fetchMessages = async () => {
    console.log("fetchDiscordMessages");
    try {
      const response = await axios.get(`https://chunkyspaceman.com/DC`);
      
      const data = response.data;
      setDiscordMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  };

  const parseEmotes = (content) => {
    // Regular expression to match Discord emote syntax
    const emoteRegex = /<a?:(\w+):(\d+)>/g;

    return content.split(emoteRegex).map((part, index) => {
      if (index % 3 === 0) {
        // Even parts are plain text
        return part;
      } else if (index % 3 === 2) {
        // Parts at index 2, 5, 8, ... are emote IDs
        const emoteId = part;
        const emoteUrl = `https://cdn.discordapp.com/emojis/${emoteId}.png`;

        return <Image key={index} source={{ uri: emoteUrl }} style={{ width: 20, height: 20 }} />;
      }
      return null; // Ignore the emote names
    });
  };
  
  const renderMessage = ({ item }) => (
    <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>
     
      <Text style={[
        (item.author === 'Carl-bot') 
          ? appStyle.textDanger 
          : (item.author === 'Fossabot')
            ? appStyle.textTwitch
            : appStyle.textInfo,
        appStyle.h3
      ]}>
        {item.author} -{' '}
        {new Date(Date.parse(item.timestamp)).toDateString()}
      </Text>
      <Text style={[appStyle.textWhite, appStyle.h4, appStyle.pb3]}>
        {parseEmotes(item.content)}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={discordMessages}
      keyExtractor={(item) => item.id}
      renderItem={renderMessage}
    />
  );
  
  
};

export default DiscordMessagesComponent;