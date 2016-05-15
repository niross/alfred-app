import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import SwitchAndroid from 'SwitchAndroid'; // eslint-disable-line import/no-unresolved
import ProgressBar from 'ProgressBarAndroid'; // eslint-disable-line import/no-unresolved

import _ from 'lodash';

import { lightStyles as styles } from './styles';

import Slider from 'react-native-slider';
import Openhab from '../constants/Openhab';

const propTypes = {
  node: PropTypes.object.isRequired
};
const defaultProps = {};

export class Light extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isDimmer: false,
      enabled: false,
      switchItem: null,
      dimmerItem: null,
      label: _.get(Openhab.items, this.props.node.name).label,
      dimmerTimeout: null
    };
  }

  sendItemCommand(url, state) {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain'
      },
      body: state
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();
  }

  renderSplashScreen() {
    return (
      <View style={styles.splash}>
        <View style={styles.splashInner}>
          <ProgressBar />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${this.props.node.link}?type=json`)
      .then((response) => response.json())
      .then((responseData) => {
        let members = responseData.members;
        if (!_.isArray(members)) members = [members];

        const switchItem = _.find(members, { type: 'SwitchItem' });
        const dimmerItem = _.find(members, { type: 'DimmerItem' });

        this.setState({
          enabled: switchItem.state === 'ON',
          switchItem,
          dimmerItem,
          loading: false
        });

        // Listen for light status changes
        const lightSocket = new WebSocket(
          `${this.state.switchItem.link.replace('http', 'ws')}?Accept=application/json`
        );

        lightSocket.onmessage = (e) => {
          this.setState({
            switchItem: JSON.parse(e.data)
          });
        };

        lightSocket.onerror = (e) => {
          console.warn(e.message);
        };

        // If a dimmer exists listen for changes on that too
        if (this.state.dimmerItem) {
          const dimmerSocket = new WebSocket(
            `${this.state.dimmerItem.link.replace('http', 'ws')}?Accept=application/json`
          );

          dimmerSocket.onmessage = (e) => {
            this.setState({
              dimmerItem: JSON.parse(e.data)
            });
          };

          dimmerSocket.onerror = (e) => {
            console.warn(e.message);
          };
        }
      })
      .done();
  }

  setBrightness(value) {
    this.sendItemCommand(this.state.dimmerItem.link, value.toString());
  }

  toggleSwitch() {
    this.sendItemCommand(
      this.state.switchItem.link,
      this.state.switchItem.state === 'ON' ? 'OFF' : 'ON'
    );
  }

  renderDimmer() {
    if (this.state.dimmerItem) {
      return (
        <View style={styles.dimmerContainer}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={parseInt(this.state.dimmerItem.state, 10)}
            onSlidingComplete={(value) => this.setBrightness(parseInt(value, 10))}
          />
        </View>
      );
    }
    return null;
  }

  render() {
    if (this.state.loading) {
      return this.renderSplashScreen();
    }

    return (
      <View style={styles.container}>
        <View style={styles.nodeTitleContainer}>
          <Text style={styles.nodeTitle}>{this.state.label}</Text>
        </View>
        <View style={styles.switchContainer}>
          <SwitchAndroid
            onValueChange={() => this.toggleSwitch()}
            value={this.state.switchItem.state === 'ON'}
          />
        </View>
        {this.renderDimmer()}
      </View>
    );
  }
}

Light.propTypes = propTypes;
Light.defaultProps = defaultProps;
