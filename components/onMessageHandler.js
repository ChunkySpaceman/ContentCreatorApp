import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const onNotifeeMessageReceived = async (message) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  notifee.displayNotification({
    id: message.messageId,
    title: message.notification.title,
    body: message.notification.body,
    data: message.data,
    android: {
      channelId: channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
};