// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

// Import your views/screens
import NewsScreen from '../screens/NewsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SocialsScreen from '../screens/SocialsScreen';
import VodsScreen from '../screens/VodsScreen';
import StoresScreen from '../screens/StoresScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreditsScreen from '../screens/CreditsScreen';
import FAQScreen from '../screens/FAQScreen';
import WhoScreen from '../screens/WhoScreen';
import InfoScreen from '../screens/InfoScreen';
import FilmNightScreen from '../screens/FilmNightScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';


const primaryColor = "red";
const secondaryColor = "gray";

const ProjectsStack = createNativeStackNavigator();

function ProjectsStackScreen(){
  return (
    <ProjectsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
      }}
    >
      <ProjectsStack.Screen name="Projects" component={ProjectsScreen} />
      <ProjectsStack.Screen name="FilmNight" component={FilmNightScreen} />
      <ProjectsStack.Screen name="Playlists" component={PlaylistsScreen} />
    </ProjectsStack.Navigator>
  );
}




const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen(){
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="FAQ" component={FAQScreen} />
      <SettingsStack.Screen name="Credits" component={CreditsScreen} />
      <SettingsStack.Screen name="Who" component={WhoScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="News"
        screenOptions={{
          tabBarStyle: { 
            height: 80,
            paddingTop: 15,
            backgroundColor: 'black',
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
      >
        <Tab.Screen 
          name="Updates and News" //header
          component={NewsScreen} 
          options={{
            headerShown: false,
            tabBarLabel: '',//News',
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 
                name="house" 
                size={50}
                color={focused ? primaryColor : secondaryColor}
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="YT Projects" 
          component={ProjectsStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',//Projects',
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 
                name="youtube" 
                size={50}
                color={focused ? primaryColor : secondaryColor}
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Socials" 
          component={SocialsScreen} 
          options={{
            tabBarLabel: '',//Socials',
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 
                name="instagram" 
                size={50}
                color={focused ? primaryColor : secondaryColor}
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Twitch Clips" 
          component={VodsScreen} 
          options={{
            tabBarLabel: '',//Clips',
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 
                name="twitch" 
                size={50}
                color={focused ? primaryColor : secondaryColor}
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Stores" 
          component={StoresScreen} 
          options={{
            tabBarLabel: '',//Stores',
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 
                name="bottle-droplet" 
                size={50}
                color={focused ? primaryColor : secondaryColor}
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ),
          }}
        />

        <Tab.Screen 
          name="SettingsStack" 
          component={SettingsStackScreen} 
          options={{
            headerShown: false,
            tabBarLabel: '',//Settings',
            tabBarActiveTintColor: primaryColor,
            tabBarInactiveTintColor: secondaryColor,
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 
                name="gears" 
                size={50}
                color={focused ? primaryColor : secondaryColor}
                style={{ 
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}

export default AppNavigator;

