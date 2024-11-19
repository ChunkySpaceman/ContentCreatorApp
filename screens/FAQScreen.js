import React, {useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, FlatList, ScrollView, Image, Linking } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col4, Col3, Col2, Col6 } from '../styles/Column';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


import appStyle from '../styles/appStyle';

function FAQScreen({navigation}){   
  const [faqMessages, setfaqMessages] = useState([]);


  const fetchMessages = async () => {
    console.log("fetchDiscordMessages");
    try {
      const response = await axios.get(`https://chunkyspaceman.com/FAQ`);
      
      const data = response.data;
      setfaqMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchMessages()
      .catch(error => console.error('Error:', error));
  }, []);

  const renderMessage = ({ item }) => (

    <View style={[appStyle.m2, appStyle.py2, appStyle.px4, appStyle.borderRounded, appStyle.bgDark]}>    
    <Text style={[appStyle.textWhite, appStyle.h4, appStyle.py3]}>
      {item.question}
    </Text>
    <Text style={[appStyle.textDanger, appStyle.h4, appStyle.py3]}>
      {item.answer}
    </Text>
  </View>
  );
  
  
  return (
    <View style={[appStyle.container, { backgroundColor: 'black' }]}>

   <FlatList
      data={faqMessages}
      keyExtractor={(item) => item.id}
      renderItem={renderMessage}
    />
      
    </View>

  );
};

export default FAQScreen;