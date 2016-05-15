/**
 * Wraps children in a non-scrolling view.
 */
import React, { PropTypes, View } from 'react-native';

import { staticPageStyles as styles } from './styles';
import { Title } from './Title';

const propTypes = {
  noSpacer: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};
const defaultProps = {
  noSpacer: false
};


export const StaticPage = ({ noSpacer, title, children }) =>
  <View style={styles.container}>
    {title ? <Title text={title} /> : null}
    <View style={styles.wrapper}>
      {children}
      {noSpacer ? null : <View style={styles.spacer} />}
    </View>
  </View>;

StaticPage.propTypes = propTypes;
StaticPage.defaultProps = defaultProps;
