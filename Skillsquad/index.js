/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import navigation from './android/Navigation';

AppRegistry.registerComponent(appName, () => navigation);
