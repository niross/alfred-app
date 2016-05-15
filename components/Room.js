import React from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';
import ProgressBar from 'ProgressBarAndroid';  // eslint-disable-line import/no-unresolved

import { roomStyles as styles } from './styles';
import { ScrollPage } from './ScrollPage';
import { Light } from './Light';

const displayName = 'Room';
const propTypes = {
  room: React.PropTypes.object.isRequired
};
const defaultProps = {};

export class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${this.props.room.link}?type=json`)
      .then((response) => response.json())
      .then((responseData) => {
        let items = responseData.members;
        if (!_.isArray(items)) items = [items];

        this.setState({
          loading: false,
          items
        });
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

  renderLight() {
    /*
     * If the room has a light node render it
     */
    const node = _.find(this.state.items, (item) => new RegExp('.*?Light$').exec(item.name));
    if (node) {
      return (
        <Light node={node} />
      );
    }
    return null;
  }

  render() {
    if (this.state.loading) {
      return this.renderSplashScreen();
    }

    return (
      <ScrollPage title={this.props.room.label}>
        {this.renderLight()}
      </ScrollPage>
    );
  }

}

Room.displayName = displayName;
Room.propTypes = propTypes;
Room.defaultProps = defaultProps;

