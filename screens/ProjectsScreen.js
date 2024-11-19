import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Dimensions, Linking } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import { YoutubeKey, YTdata } from '../../app.json';
import YoutubeVodsComponent from '../components/YoutubeVodsFromServerComponent';

import axios from 'axios';


import appStyle from '../styles/appStyle';

function ProjectsScreen({navigation}){   

  const navigateToVodsVodsVods = () => {
    //const url = 'bit.ly/willneffvods';
    const url = "https://docs.google.com/spreadsheets/d/1CQrSIhcH6ssz4LblKH2KjE5tRzwdaWn79ujZgU71EMQ/edit#gid=0";
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };
  
  const navigateToPlaylists = () => {
    const url = 'https://docs.google.com/spreadsheets/d/1CQrSIhcH6ssz4LblKH2KjE5tRzwdaWn79ujZgU71EMQ/edit#gid=1678151934';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };
  
  const navigateToSeenFilms = () => {
    const url = 'https://letterboxd.com/k_strass/list/film-class-with-will-neff-twitchtv-willneff/';
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };
  
  return (
    <ScrollView style={[ appStyle.container,{ backgroundColor:"black"}]}>
    
      
         <YoutubeVodsComponent />


        
        <TouchableOpacity 
          style={[ appStyle.btnWarning, appStyle.mx2, appStyle.mb3 ]}
          activeOpacity={1}
          onPress={navigateToSeenFilms}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Wednesday Film Night Watched Films
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[ appStyle.btnInfo, appStyle.mx2, appStyle.mb3 ]}
          activeOpacity={1}
          onPress={navigateToPlaylists}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Friday Music Playlists
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[ appStyle.btnDanger, appStyle.mx2, appStyle.mb3]}
          activeOpacity={1}
          onPress={navigateToVodsVodsVods}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.item,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Unofficial Vods Links
          </Text>
        </TouchableOpacity>
        
        
        
    </ScrollView>
  );
}

  

export default ProjectsScreen;