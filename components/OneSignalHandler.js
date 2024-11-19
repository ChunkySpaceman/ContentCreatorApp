// OneSignalHandler.js
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {name, OneSignalID} from '../app.json';
import { LogLevel, OneSignal } from 'react-native-onesignal';




function OneSignalHandler(){

/*
  useEffect(() => {
    // OneSignal initialization
    OneSignal.initialization(OneSignalID);

    // Add event listener for device registration
    OneSignal.addEventListener('ids', onIdsReceived);
    
    // Clean up event listener on component unmount
    return () => {
      OneSignal.removeEventListener('ids', onIdsReceived);
    };
  }, [onIdsReceived]);

  return null; // No need to render anything in this component
  */
  

  return null; // This component doesn't render anything
};

export default OneSignalHandler;