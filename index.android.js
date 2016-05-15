import React from 'react';
import { AppRegistry, Navigator, BackAndroid } from 'react-native';

import { mainStyles as styles } from './components/styles';
import { Zones } from './components/Zones';
import { Zone } from './components/Zone';
import { Room } from './components/Room';

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

class AlfredApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  routeMapper(route, navigator) {
    _navigator = navigator;
    switch (route.name) {
      case 'zones':
        return (
          <Zones
            navigator={navigator}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                name: `Scene${nextIndex}`,
                index: nextIndex
              });
            }}
            onBack={() => {
              if (route.index > 0) navigator.pop();
            }}
          />
        );
      case 'zone':
        return (
          <Zone
            zone={route.zone}
            navigator={navigator}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                name: `Scene ${nextIndex}`,
                index: nextIndex,
                zone: route.zone
              });
            }}
            onBack={() => {
              if (route.index > 0) navigator.pop();
            }}
          />
        );
      case 'room':
        return (
          <Room
            room={route.room}
            navigator={navigator}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                name: `Scene ${nextIndex}`,
                index: nextIndex,
                zone: route.zone
              });
            }}
            onBack={() => {
              if (route.index > 0) navigator.pop();
            }}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          index: 0,
          name: 'zones'
        }}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.routeMapper}
      />
    );
  }
}

AppRegistry.registerComponent('AlfredApp', () => AlfredApp);
