import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Animated,View} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // valor inicial o el valor que va llegar
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return (
    <View>
      <Animated.View style={[styles.texto, estiloAnimacion]}>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  texto: {
    backgroundColor:'blue',
    width:100,
    height:100,
  },
});

export default Animacion4;
