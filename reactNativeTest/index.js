/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppPro from './AppPro.tsx';

AppRegistry.registerComponent(appName, () => AppPro);
// AppRegistry.registerComponent(appName, () => App);
