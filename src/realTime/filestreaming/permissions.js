import { PermissionsAndroid, Platform } from "react-native";
import RNFS from "react-native-fs";

async function ensurePermission() {
  if (Platform.OS === "android") {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission Required",
        message: "App needs access to your storage to save files",
        buttonPositive: "OK",
      }
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      throw new Error("Storage permission not granted");
    }
  }
}
export default ensurePermission
