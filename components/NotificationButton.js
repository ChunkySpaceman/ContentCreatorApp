import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';

const scheduleLocalNotification = () => {
  PushNotification.localNotification({
    title: 'My Notification',
    message: 'This is a local notification!',
    channelId: 'my-channel-id', // Required for Android
  });
};

const NotificationButton = () => {
  return (
    <TouchableOpacity onPress={scheduleLocalNotification}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Send Notification</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default NotificationButton;