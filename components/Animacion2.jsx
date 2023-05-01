import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(0.01));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450, // valor inicial o el valor que va llegar
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.caja,
        {
          width: animacion,
          height: animacion,
        },
      ]}
    ></Animated.View>
  );
};
const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion2;
