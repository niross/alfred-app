/**
 * Wraps a list of nodes in a scroll view.
 */
import React, { PropTypes, ScrollView, View } from 'react-native';

import { scrollPageStyles as styles } from './styles';
import { Title } from './Title';

const propTypes = {
  noSpacer: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};
const defaultProps = {
  noSpacer: false
};

export const ScrollPage = ({ noSpacer, title, children }) =>
  <View style={styles.container}>
    {title ? <Title text={title} /> : null}
    <ScrollView
      style={styles.wrapper}
      automaticallyAdjustContentInsets={!title}
      keyboardShouldPersistTaps
      keyboardDismissMode="interactive"
    >
      {children}
      {noSpacer ? null : <View style={styles.spacer} />}
    </ScrollView>
  </View>;

ScrollPage.propTypes = propTypes;
ScrollPage.defaultProps = defaultProps;
