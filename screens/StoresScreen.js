import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Linking, Image, Modal, Button } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col6, Col4, Col3, Col2, Col12 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';

import appStyle from '../styles/appStyle';
const neffSauceImage = "https://i.imgur.com/tTJcuTz.png";
const neffMerchImage = "https://i.imgur.com/rVDQuiv.png";

function StoresScreen({navigation}){   
  const [modalVisible, setModalVisible] = useState(false);
  const buttonHeight = (Dimensions.get('window').height / 2) - 80;
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  
  //Neff Merch
  const navigateToNeffMerch = () => {
    const url = 'https://willneff.store/'; // Replace with your desired URL
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  //Neff Sauce
  const navigateToNeffSauce = () => {
    const url = 'https://neffsauce.com/'; // Replace with your desired URL
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  //Bees Store
  const navigateToBeeStore = () => {
    const url = 'https://www.mibeeco.com/'; // Replace with your desired URL
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  //Speedys Store
  const navigateToSpeedysStore = () => {
    const url = 'https://speedyshotsauce.com/'; // Replace with your desired URL
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  return (
    <View style={[appStyle.container]}>

        <TouchableOpacity 
          style={[ appStyle.btnDark, appStyle.m2, { flex:buttonHeight }]}
          activeOpacity={1}
          onPress={navigateToNeffSauce}
        >
          <Text style={[appStyle.textCenter,appStyle.py3,appStyle.h4,appStyle.textWhite]}>
          Speedys Hot Sauce Will Neff Edition (TBD)
          </Text>
          <Image 
            source={{ uri: neffSauceImage }} 
            style={{ width: '100%', height: '80%', resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[ appStyle.btnDark, appStyle.m2, { flex:buttonHeight }]}
          activeOpacity={1}
          onPress={openModal}
        >
          <Text style={[appStyle.textCenter,appStyle.py3,appStyle.h4,appStyle.textWhite]}>
            NeffMerch - Sold Out - Click for info
          </Text>
          <Image 
            source={{ uri: neffMerchImage }} 
            style={{ width: '100%', height: '80%', resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
  <View style={[appStyle.centeredContainer, { backgroundColor: 'black' }]}>
    <Text style={[ appStyle.h2, appStyle.textWhite, appStyle.textCenter, appStyle.m3 ]}>Anyone still having trouble with merch should use the ask a mod feature on Neffcord. They will help you as best they can.</Text>
    <Button title="I have Read This Message" onPress={closeModal} />
  </View>
        </Modal>
        
        <TouchableOpacity 
          style={[ appStyle.btnWarning, appStyle.m1 ]}
          activeOpacity={1}
          onPress={navigateToBeeStore}
        >
          <Text style={[appStyle.textCenter,appStyle.h4,appStyle.textWhite]}>
            Michigan Bee Co.
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[ appStyle.btnInfo, appStyle.m1]}
          activeOpacity={1}
          onPress={navigateToSpeedysStore}
        >
          <Text style={[appStyle.textCenter,appStyle.h4,appStyle.textWhite]}>
            Speedys Hot Sauce
          </Text>
        </TouchableOpacity>
    
    
    </View>

  );
};



export default StoresScreen;