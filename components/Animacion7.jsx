import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const Animacion7 = () => {
  const [animacion] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animacion, {
        toValue: 300,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.spring(animacion2, {
        toValue: 10,
        useNativeDriver: false,
      }),
      Animated.spring(animacion2, {
        toValue: 1,
        useNativeDriver: false,
      }),
       Animated.timing(animacion, {
        toValue: 600,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  const estiloAnimacion = {
    transform: [{translateY: animacion}],
  };

  return (
    <View>
      <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
export default Animacion7;
