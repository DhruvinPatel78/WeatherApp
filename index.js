/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';
import { Provider } from 'react-redux';
import store from './src/store';
import 'react-native-gesture-handler';
import { notificationService } from "./src/common/util/NotificationService";

XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

notificationService.configure();

const PROVIDER = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => PROVIDER);
