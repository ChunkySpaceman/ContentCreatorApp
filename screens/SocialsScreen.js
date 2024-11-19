import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Linking, Dimensions } from 'react-native';
import Row from '../styles/Row';
import { Col8, Col4, Col3, Col2, Col6 } from '../styles/Column';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';


import appStyle from '../styles/appStyle';

function SocialsScreen({navigation}){   

const navigateToInstagram = () => {
  const url = 'https://www.instagram.com/thewillneff/'; // Replace with your desired URL
  Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};

const navigateToTwitter = () => {
  const url = 'https://twitter.com/TheWillNeff'; // Replace with your desired URL
  Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};

const navigateToReddit = () => {
  const url = 'https://www.reddit.com/r/willneff/'; // Replace with your desired URL
  Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};

const navigateToDiscord = () => {
  const url = 'https://discord.gg/neff'; // Replace with your desired URL
  Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};

const navigateToSpotify = () => {
  const url = "https://open.spotify.com/user/1218185942";
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};

const navigateToTikTok = () => {
  const url = "https://www.tiktok.com/@willyneff";
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};

const navigateToYoutube = () => {
  const url = "https://www.youtube.com/@WillNeff";
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
};


const CopyToClipboardButton  = async () => {
  const addressToCopy = "The UPS Store - #2961 8581 Santa Monica Blvd West Hollywood CA 90069 Mailbox Number 427";
  try {
    await Clipboard.setString(addressToCopy);
    Toast.show({
      text1: 'Address Copied!'
    });
  } catch (error) {
    console.error('Error copying to clipboard:', error);
  }
  
};

  return (
    <ScrollView style={ [appStyle.container]}>
      <Row style ={appStyle.mx2}>
        <TouchableOpacity 
          style={[ appStyle.btn, styles.item, styles.instagram]}
          activeOpacity={1}
          onPress={navigateToInstagram}
        >
        <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={[styles.gradient]
        }>
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            Instagram
          </Text>
          <FontAwesome6 
            name="instagram" 
            size={((Dimensions.get('window').width)/2) - 120 }
            color='#fff'
            style={{ 
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            TheWillNeff
          </Text>
        </LinearGradient>

        </TouchableOpacity>
        <TouchableOpacity 
          style={[ appStyle.btnDanger, styles.item, styles.twitter ]}
          activeOpacity={1}
          onPress={navigateToTwitter}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textWhite
          ]}>
            Twitter
          </Text>
          <FontAwesome6 
            name="twitter" 
            size={((Dimensions.get('window').width)/2) - 120 }
            color='#fff'
            style={{ 
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            TheWillNeff
          </Text>
        </TouchableOpacity>
      </Row>
      <Row style ={appStyle.mx2}>
        <TouchableOpacity 
          style={[ appStyle.btnDanger, styles.item, styles.reddit ]}
          activeOpacity={1}
          onPress={navigateToReddit}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textWhite
            ]}>Reddit</Text>
            <FontAwesome6 
              name="reddit-alien" 
            size={((Dimensions.get('window').width)/2) - 120 }
              color='#fff'
              style={{ 
                alignItems: 'center',
                justifyContent: 'center',
              }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            /r/WillNeff
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[ appStyle.btn, styles.item, styles.discord ]}
          activeOpacity={1}
          onPress={navigateToDiscord}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Discord
          </Text>
          <FontAwesome6 
                name="discord" 
            size={((Dimensions.get('window').width)/2) - 120 }
                color='#fff'
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            Discord.gg/neff
          </Text>
        </TouchableOpacity>
      </Row>
      <Row style ={appStyle.mx2}>
        <TouchableOpacity 
          style={[ appStyle.btn, styles.item, styles.spotify ]}
          activeOpacity={1}
          onPress={navigateToSpotify}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            Spotify
          </Text>
          <FontAwesome6 
                name="spotify" 
            size={((Dimensions.get('window').width)/2) - 120 }
                color='#fff'
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            William Neff
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[ appStyle.btn, styles.item, styles.pobox ]}
          activeOpacity={1}
          onPress={CopyToClipboardButton}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textWhite
            ]}>
            UPS
          </Text>
          <FontAwesome6 
                name="ups" 
            size={((Dimensions.get('window').width)/2) - 120 }
                color='#fff'
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            P.O.Box
          </Text>
        </TouchableOpacity>
      </Row>
      
      <Row style ={appStyle.mx2}>
        <TouchableOpacity 
          style={[ appStyle.btn, styles.item, styles.youtube ]}
          activeOpacity={1}
          onPress={navigateToYoutube}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textWhite
            ]}>Youtube</Text>
            <FontAwesome6 
              name="youtube" 
            size={((Dimensions.get('window').width)/2) - 120 }
              color='#ff0000'
              style={{ 
                alignItems: 'center',
                justifyContent: 'center',
              }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textWhite,
            { marginVertical: 0 }
          ]}>
            @WillNeff
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[ appStyle.btn, styles.item, styles.tiktok ]}
          activeOpacity={1}
          onPress={navigateToTikTok}
        >
          <Text 
            style={[
              appStyle.textCenter,
              appStyle.pb3,
              appStyle.h4,
              appStyle.textDark
            ]}>
            TikTok
          </Text>
          <FontAwesome6 
                name="tiktok" 
            size={((Dimensions.get('window').width)/2) - 120 }
                color='#000'
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
          />
          <Text style={[
            appStyle.textCenter,
            appStyle.pb3,
            appStyle.h4,
            appStyle.textDark,
            { marginVertical: 0 }
          ]}>
            @willyneff
          </Text>
        </TouchableOpacity>
      </Row>
      
      
      <Toast />
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    aspectRatio: 1, // This ensures a square aspect ratio for each item
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 0
  },
  gradient:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,
    padding:0,
    borderRadius: 5,
  },
  instagram:{
  },
  discord:{
    backgroundColor: '#5865F2',
  },
  
  twitter:{
    backgroundColor: '#00ACEE',
  },
  reddit:{
    backgroundColor: '#FF4500',
  },
  spotify:{
    backgroundColor: '#1DB954',
  },
  pobox:{
    backgroundColor: '#FFB500',
  },
  youtube:{
    backgroundColor: '#282828',
  },
  tiktok:{
    backgroundColor: '#FFFFFF',
  }
  
});


export default SocialsScreen;