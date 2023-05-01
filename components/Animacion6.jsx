//En la de sequens se realiza una animacion seguida de la otra
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const Animacion6 = () => {
  const [animacion] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacion2, {
          toValue: -30,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(animacion, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animacion, {
          toValue: 30,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animacion, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animacion, {
          toValue: -30,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const estiloAnimacion = {
    transform: [{translateY: animacion}, {translateX: animacion2}],
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 15,
    height: 15,
    backgroundColor: 'blue',
  },
});

export default Animacion6;
