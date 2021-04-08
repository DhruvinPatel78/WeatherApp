import PushNotification from 'react-native-push-notification';
import { isIOS } from '../helper/helper';

class NotificationService {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token: any) {
        console.log('TOKEN:', token);
      },

      onNotification: function (notification: any) {
        console.log('NOTIFICATION:', notification);
      },

      onAction: function (notification: any) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },

      onRegistrationError: function (err: any) {
        console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
      requestPermissions: isIOS,
    });
  };

  createChannel = (channel: string) => {
    PushNotification.createChannel(
      {
        channelId: channel, // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created: any) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  createNotification = (channel: string, title: string, message: string) => {
    PushNotification.localNotification({
      channelId: channel,
      title,
      message,
    });
  };
}

export const notificationService = new NotificationService();
