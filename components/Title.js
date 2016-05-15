import React, { PropTypes, View, Text } from 'react-native';

import { titleStyles as styles } from './styles';

const propTypes = {
  text: PropTypes.string.isRequired
};
const defaultProps = {};

export const Title = ({ text }) =>
  <View style={styles.container}>
    <View style={styles.containerInner}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  </View>;

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
