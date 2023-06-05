/* eslint-disable no-const-assign */
import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box(props) {
  // return <View style={[styles.box, props.rounded ? styles.rounded : null]} />;
  // 아래와 같이 &&으로 삼항연산자를 짧게 표현할 수 있다.
  return (
    <View
      style={[
        styles.box,
        props.rounded && styles.rounded,
        sizes[props.size],
        {backgroundColor: props.color},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};
export default Box;
