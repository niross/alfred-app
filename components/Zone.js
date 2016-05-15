import { PropTypes } from 'react';
import { Navigator } from 'react-native';

import { BaseItemList } from './BaseItemList';

const displayName = 'Zone';
const defaultProps = {
  zone: PropTypes.object.isRequired
};

export class Zone extends BaseItemList {
  getUrl() {
    return `${this.props.zone.link}?type=json`;
  }

  itemPress(room) {
    this.props.navigator.push({
      name: 'room',
      room,
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  }
}

Zone.displayName = displayName;
Zone.defaultProps = defaultProps;
