import React, { useEffect, useState } from 'react';
import { Stack, ScrollView, View, Text, StyleSheet, Button, Switch, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import appStyle from '../styles/appStyle';

import CreditsScreen from './CreditsScreen';
import FAQScreen from './FAQScreen';
import WhoScreen from './WhoScreen';

import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



function SettingsScreen({ navigation }){   

  const notificationSettings = [
    "AllNotificationsEnabled",
    "TwitchNotificationsEnabled",
    "NeffSpyNotificationsEnabled",
    "YoutubeNotificationsEnabled",
    "DiscordNotificationsEnabled",
    "DeveloperNotificationsEnabled"
  ];
  
  const [notificationState, setNotificationState] = useState({});

  async function requestUserPermission(){
    //const authStatus = await messaging.requestUserPermission();
    await notifee.requestPermission();

  };
  
  useEffect(() => {
    requestUserPermission();
    retrieveNotificationSettings().then(  
    //subUnsubNotifications()
    );      

  }, []);
  
  useEffect(() => {
    //subUnsubNotifications();      
  }, [notificationState]);
  
  async function subUnsubNotifications() {
    console.log("-------------------------");
    const allEn     = notificationState[notificationSettings[0]];      
    const twitchEn  = notificationState[notificationSettings[1]];
    const neffSpyEn = notificationState[notificationSettings[2]];
    const youtubeEn = notificationState[notificationSettings[3]];
    const discordEn = notificationState[notificationSettings[4]];
    const devEn     = notificationState[notificationSettings[5]];

    
    if(allEn){//sub on
      console.log("subAll");

      await messaging().subscribeToTopic('allUsers');
    }
    else{//unsub all
      console.log("NOsub All");

      //await messaging().unsubscribeFromTopic('allUsers');
      //await messaging().unsubscribeFromTopic('twitch');
      //await messaging().unsubscribeFromTopic('neffSpy');
      //await messaging().unsubscribeFromTopic('youtube');
      //await messaging().unsubscribeFromTopic('discord');

    }
    if(allEn && twitchEn){
      console.log("subTwtich");
      await messaging().subscribeToTopic('twitch');
    }else{
      console.log("NOsub Twtich");

      await messaging().unsubscribeFromTopic('twitch');
    }
    if(allEn && neffSpyEn){
      console.log("subSpy");
      await messaging().subscribeToTopic('neffSpy');
    }else{
      console.log("NOsub Spy");
      await messaging().unsubscribeFromTopic('neffSpy');
    }
    if(allEn && youtubeEn){
      console.log("subYoutube");
      await messaging().subscribeToTopic('youtube');
    }else{
      console.log("NOsub Youtube");
      await messaging().unsubscribeFromTopic('youtube');
    }
    if(allEn && discordEn){
      console.log("subDiscord");
      await messaging().subscribeToTopic('discord');
    }else{
      console.log("NOsub Discord");
      await messaging().unsubscribeFromTopic('discord');
    }
    if(allEn && devEn){
      console.log("subDeveloper");
      await messaging().subscribeToTopic('developer');
    }else{
      console.log("NOsub Developer");
      await messaging().unsubscribeFromTopic('developer');
    }
  };
  
  
  const subUnsubSingle = async ( allEn, notificationType, notificationBool ) => {
    
    console.log("-------------------------");
    console.log("type", notificationType);
    const isSubbed = notificationBool;
    
    switch(notificationType){
      case "AllNotificationsEnabled":
        if(isSubbed){//sub on
          console.log("sub All");
          await messaging().subscribeToTopic('allUsers');
          
          for (let i = 1; i < notificationSettings.length; i++) {
            const notif  = notificationState[notificationSettings[i]];
            await subUnsubSingle( isSubbed, notificationSettings[i], notif);
          }
        }else{//unsub all
          console.log("NOsub All");
          await messaging().unsubscribeFromTopic('allUsers');
          await messaging().unsubscribeFromTopic('twitch');
          await messaging().unsubscribeFromTopic('neffSpy');
          await messaging().unsubscribeFromTopic('youtube');
          await messaging().unsubscribeFromTopic('discord');
          await messaging().unsubscribeFromTopic('developer');

        }
      break;
      case "TwitchNotificationsEnabled":
        if(allEn && isSubbed){
          console.log("sub Twtich");
          await messaging().subscribeToTopic('twitch');
        }else{
          console.log("NOsub Twtich");
          await messaging().unsubscribeFromTopic('twitch');
        }
      break;
      case "NeffSpyNotificationsEnabled":
        if(allEn && isSubbed){
          console.log("sub Spy");
          await messaging().subscribeToTopic('neffSpy');
        }else{
          console.log("NOsub Spy");
          await messaging().unsubscribeFromTopic('neffSpy');
        }
      break;
      case "YoutubeNotificationsEnabled":
        if(allEn && isSubbed){
          console.log("sub Youtube");
          await messaging().subscribeToTopic('youtube');
        }else{
          console.log("NOsub Youtube");
          await messaging().unsubscribeFromTopic('youtube');
        } 
      break;
      case "DiscordNotificationsEnabled":
        if(allEn && isSubbed){
          console.log("sub Discord");
          await messaging().subscribeToTopic('discord');
        }else{
          console.log("NOsub Discord");
          await messaging().unsubscribeFromTopic('discord');
        }
      break;
      case "DeveloperNotificationsEnabled":
        if(allEn && isSubbed){
          console.log("sub Developer");
          await messaging().subscribeToTopic('developer');
        }else{
          console.log("NOsub Developer");
          await messaging().unsubscribeFromTopic('developer');
        }
      break;
    }
    
  }

  const retrieveNotificationSettings = async () => {
    const settings = {};
    for (const setting of notificationSettings) {
      const storedSetting = await AsyncStorage.getItem(setting);
      if (storedSetting) {
        settings[setting] = JSON.parse(storedSetting);
      }
    }
    setNotificationState(settings);
  };

    
  const storeNotificationSetting = async (item,setting) => {
    try {
      const settingsToSave = JSON.stringify(setting);
      await AsyncStorage.setItem(item, settingsToSave);
    } catch (error) {
      // Handle error
      console.error('Error saving notification settings:', error);
    }
  };


  const toggleNotifications = async (notificationType) => {
    // Update the local state based on the notification type
    const newSettings = { ...notificationState };
    newSettings[notificationType] = !newSettings[notificationType];
    setNotificationState(newSettings);
    storeNotificationSetting(notificationType, newSettings[notificationType]);
    
    const allEn = notificationState[notificationSettings[0]];      

    subUnsubSingle( allEn, notificationType, newSettings[notificationType]);
  };



  return (
    <ScrollView style={[appStyle.container, appStyle.pt3]}>

      {notificationSettings.map((setting, index) => (
        <Row
          key={index}
          style={[
            appStyle.mb5,
            appStyle.mx2,
            appStyle.py3,
            appStyle.bgDark,
            appStyle.borderRounded,
          ]}
        >
          <Col8>
            <Text style={[
              appStyle.textLight,
              appStyle.h4,
              appStyle.pl2
            ]}>
              {setting.replace('NotificationsEnabled', '')} Alerts are{' '}
              {notificationState[setting] ? 'enabled' : 'disabled'}
            </Text>
            
            {setting === 'NeffSpyNotificationsEnabled' && (
              <Text style={[appStyle.textLight, appStyle.h6, appStyle.pl2]}>
                (Will staring on another stream)
              </Text>
            )}
          </Col8>
          <Col4>
            <Switch
              value={notificationState[setting]}
              onValueChange={() => toggleNotifications(setting)}
              title="Enable Notifications"
              trackColor={{ false: 'darkgray', true: 'lightgray' }}
              thumbColor={
                notificationState['AllNotificationsEnabled'] &&
                notificationState[setting]
                  ? 'red'
                  : 'lightgray'
              }
              ios_backgroundColor="darkgray"
              style={{ transform: [{ scale: 1 }] }}
            />
          </Col4>
        </Row>
      ))}




        
        <TouchableOpacity 
          style={[ appStyle.btnWarning, appStyle.mx2, appStyle.mt3 ]}
          activeOpacity={1}
          onPress={() => navigation.navigate('FAQ')}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            FAQ
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[ appStyle.btnInfo, appStyle.mx2, appStyle.mt3 ]}
          activeOpacity={1}
          onPress={() => navigation.navigate('Credits')}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Credits
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[ appStyle.btnDanger, appStyle.mx2, appStyle.mt3 ]}
          activeOpacity={1}
          onPress={() => navigation.navigate('Who')}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Who Made Dis?
          </Text>
        </TouchableOpacity>
       
         
    </ScrollView>
  );
};


export default SettingsScreen;
