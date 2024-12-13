import { PermissionsAndroid } from "react-native";
export const requestReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Give Read Permissions',
          message:'For Read file and folder give Permissions',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
   
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           return true
      } else {
       return false;
      }
    } catch (err) {
      console.warn(err);
    }
  }

export const requestWritePermission = async () => {
    try {

      const granted = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Give Writer Permissions ',
          message:'For create file and folder givePermissions',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           return true
      } else {
       return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  export const ContactsPermission = async () => {
    try {
      const granted =await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           return true
      } else {
       return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };