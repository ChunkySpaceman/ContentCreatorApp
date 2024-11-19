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
    console.log("--------------------");

    fetchMessages()
      .then((messages) => sortMessages(messages))
      .then((sortedMessages) => processMessages(sortedMessages))
      .catch(error => console.error('Error:', error));
  }, []);
  
  useEffect(() => {
    //console.log("change detected in: ", discordMessages)
  }, [discordMessages]);

  
  const fetchMessages = async () => {
    console.log("fetchMessages");
    const messages1 = await fetchDiscordMessages(channelId1, DiscordToken);
    const messages2 = await fetchDiscordMessages(channelId2, DiscordToken);
    const allMessages = await [...messages1, ...messages2];
    //console.log(allMessages);

    //await setDiscordMessages(allMessages);
    
    return allMessages;
  };
  
const sortMessages = async (messages) => {
    console.log("sortMessages");
    // Sort messages based on timestamp
    const sortedMessages = await messages.sort((a, b) => b.id - a.id);
    //setDiscordMessages(sortedMessages);
    return sortedMessages;
  };
  
  const fetchDiscordMessages = async (channelId) => {
    console.log("fetchDiscordMessages");
    try {
      const response = await axios.get(`https://discord.com/api/v10/channels/${channelId}/messages?limit=5`, {
        headers: {
          Authorization: `Bot ${DiscordToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  };
  
  const processMessages = async (sortedMessages) => {
    console.log("processMessages");
    const processed = [];
    for (let i = 0; i < sortedMessages.length; i++) {
      const message = sortedMessages[i];
      const processedContent = await replaceMentions(message.content, i);
      processed.push({ ...message, content: processedContent });
    }
    setDiscordMessages(processed);
  };
   
  const replaceMentions = async (content, index) => {
    console.log("replaceMentions");
    try {
      const userRegex = /<@(\d+)>/g;
      const channelRegex = /<#(\d+)>/g;
      const roleRegex = /<@&(\d+)>/g;

      // Extract all user IDs from the content
      const userIds = [];
      const channelIds = [];
      const roleIds = [];
      
      await content.replace(userRegex, (match, userId) => {
        userIds.push(userId);
      });

      await content.replace(channelRegex, (match, channelId) => {
        channelIds.push(channelId);
      });

      await content.replace(roleRegex, (match, roleId) => {
        roleIds.push(roleId);
      });

      const channelNames = await Promise.all(channelIds.map(channelId => fetchChannelData(channelId)));

      const userNames = await Promise.all(userIds.map(userId => fetchUserData(userId)));
      
      const roleNames = await Promise.all(roleIds.map(roleId => fetchRoleData(roleId)));

      /*   Add more filters here     */



      // Replace mentions in the content with corresponding usernames
      const processedUserContent = await content.replace(userRegex, (match, userId, offset) => {
        const userName = userNames[userIds.indexOf(userId)];
        return userName;
      });
      
      const processedUserChannelContent = await processedUserContent.replace(channelRegex, (match, channelId, offset) => {
        const channelName = channelNames[channelIds.indexOf(channelId)];
        return channelName;
      });
      
      const processedUserChannelRoleContent = await processedUserChannelContent.replace(roleRegex, (match, roleId, offset) => {
        const roleName = roleNames[roleIds.indexOf(roleId)];
        return roleName;
      });
      
      /*   Add more filters here     */
      
      const processedContent = processedUserChannelRoleContent;

      // Assuming you have the index of the message in the array
      const updatedMessages = [...discordMessages];
      updatedMessages[index].content = processedContent;
      //setDiscordMessages(updatedMessages);

      return processedContent;
    } catch (error) {
      console.error('Error replacing mentions:', error);
      return content; // Return the original content in case of an error
    }
  };
  

  const fetchUserData = async (userId) => {
    console.log("fetchUserData");
    try {
      
      const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
        headers: {
          Authorization: `Bot ${DiscordToken}`,
        },
      });

      const data = response.data.global_name ?? response.data.username;
      return "@" + data;
      /**/
      return "thats so fetch";
    } catch (error) {
      console.error('Error fetching user data:', error);
      return `@User${userId}`;
    }
  };


  const fetchChannelData = async (channelID) => {
    console.log("fetchChannelData");

    try {
      
      const response = await axios.get(`https://discord.com/api/v10/channels/${channelID}`, {
        headers: {
          Authorization: `Bot ${DiscordToken}`,
        },
      });
      //console.log(response);
      const data = "channelNameMissing";
      return data;
      /**/
      return "thats so fetch";
    } catch (error) {
      console.error('Error fetching channel data:', error);
      return `@Channel${channelID}`;
    }
  };

  const fetchRoleData = async (roleID) => {
    console.log("fetchRoleData");

    try {
      
      const response = await axios.get(`https://discord.com/api/v10/guilds/${serverID}/roles`, {
        headers: {
          Authorization: `Bot ${DiscordToken}`,
        },
      });

      const data = await findRoleNameById(response.data, roleID) ?? "[Missing]";
      return "@" + data;
      /**/
      return "thats so fetch";
    } catch (error) {
      console.error('Error fetching role data:', error);
      return `@Role${roleID}`;
    }
  };
  
  const findRoleNameById = (roles, roleID) => {
    const role = roles.find(role => role.id === roleID);
    return role ? role.name : null;
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
        (item.author.username === 'Carl-bot') 
          ? appStyle.textDanger 
          : (item.author.username === 'Fossabot')
            ? appStyle.textTwitch
            : appStyle.textInfo,
        appStyle.h3
      ]}>
        {item.author?.global_name ?? item?.author.username} -{' '}
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