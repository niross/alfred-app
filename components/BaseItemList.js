/**
 * Base class for listing openhab zone or room items.
 */
import React from 'react';
import { View, ListView, Text, TouchableOpacity } from 'react-native';
import ProgressBar from 'ProgressBarAndroid'; // eslint-disable-line import/no-unresolved
import _ from 'lodash';

import Openhab from '../constants/Openhab';
import { baseItemStyles as styles } from './styles';

const propTypes = {};
const defaultProps = {};

export class BaseItemList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  parseData(responseData) {
    let members = responseData.members;

    // Openhab returns either an object or a list of objects.
    if (!_.isArray(members)) members = [members];

    // Only show items in our config file
    const items = _.filter(members, (item) => _.has(Openhab.items, item.name));

    // Add mapped object properties to the valid item
    _.each(items, (item) => {
      _.assign(item, _.get(Openhab.items, item.name));
    });

    // Return a sorted list of items
    return _.sortBy(items, 'order');
  }

  fetchData() {
    fetch(this.getUrl())
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loading: false,
          dataSource: this.state.dataSource.cloneWithRows(this.parseData(responseData))
        });
      })
      .done();
  }

  itemPress() {
    /*
     * Should be implemented by the child
     */
  }

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.itemPress(item)}>
        <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
          <View style={styles.containerContent}>
            <View style={styles.textWrap}>
              <Text style={styles.containerText}>{item.label}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
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

  render() {
    if (this.state.loading) {
      return this.renderSplashScreen();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem.bind(this)}
        style={styles.listView}
      />
    );
  }

}

BaseItemList.propTypes = propTypes;
BaseItemList.defaultProps = defaultProps;
