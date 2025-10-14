import { getApp } from '@react-native-firebase/app';
import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import notifee , { AndroidStyle,AndroidCategory,AndroidImportance,AndroidVisibility,EventType} from '@notifee/react-native';
// index.js
const app = getApp();
const messaging = getMessaging(app);
 
setBackgroundMessageHandler(messaging, async remoteMessage => {
  await notifee.displayNotification({
      id: remoteMessage.data.id,
      title: remoteMessage.data.title,
      body: remoteMessage.data.body,
      android: {
        channelId:'default-new',
        smallIcon:'ic_notification',
         color: remoteMessage.data.iconColor || 'red',
        largeIcon:remoteMessage.data.largeIcon,
        style: {
        type: AndroidStyle.BIGPICTURE,
         picture:remoteMessage.data.image
              },

      category: AndroidCategory.MESSAGE, // improves system handling
       actions: [
        {
          title: 'Reply',
          pressAction: { id: 'reply' },
          input: { // 👈 enables text input inside notification
            allowFreeFormInput: true,
            placeholder: 'Type your reply...',
          },
        },
        {
          title: 'Mark as Read',
          pressAction: { id: 'mark-as-read' },
        },
            {
          title: 'saved',
          pressAction: { id: 'saved-pressed' },
        },
      ],
        
        
        }})

});

notifee.onBackgroundEvent(async ({ type, detail }) => {
  console.log('📩 Notifee background event:',type);

  switch (type) {
    case EventType.DISMISSED:
      console.log('User dismissed notification');
      break;
    case EventType.PRESS:
      console.log('User pressed notification');
      break;
    case EventType.ACTION_PRESS:
      console.log('User pressed notification');
         if (detail.pressAction.id ==='saved-pressed') {
         console.log('User  saved-pressed:');
        }
        if (detail.pressAction.id ==='reply') {
         console.log('User  reply -: ', detail.input );
        }
      break;
    case EventType.DELIVERED:
         console.log('Delevered notification');
      break
    default:
      break;
  }
});



