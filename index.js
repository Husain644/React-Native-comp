/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/firebase_utility/Notification/firebase-massaging'
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "This method is deprecated",
  "React Native Firebase namespaced API",
]);

AppRegistry.registerComponent(appName, () => App);

