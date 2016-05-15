import { PropTypes} from 'react';
import { Navigator } from 'react-native';

import { BaseItemList } from './BaseItemList';

const name = 'BaseItemList';
const propTypes = {
  url: PropTypes.string
};
const defaultProps = {
  url: 'http://192.168.1.173:8080/rest/items/Zones?type=json'
};

export class Zones extends BaseItemList {
  getUrl() {
    return this.props.url;
  }

  itemPress(zone) {
    this.props.navigator.push({
      name: 'zone',
      zone,
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  }
}

Zones.displayName = name;
Zones.propTypes = propTypes;
Zones.defaultProps = defaultProps;
