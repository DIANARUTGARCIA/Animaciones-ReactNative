import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const Animaciones = () => {
  const [animacion] = useState(new Animated.Value(0.01));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // valor inicial o el valor que va llegar
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={{opacity: animacion}}>
      <Text style={styles.texto}>Animación 1</Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
});

export default Animaciones;
