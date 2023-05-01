//Para animar texto
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Animated, View} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 45, // valor inicial o el valor que va llegar
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Animación 1
      </Animated.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
});

export default Animacion3;
