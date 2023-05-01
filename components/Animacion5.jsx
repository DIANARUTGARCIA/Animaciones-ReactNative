import React, {useState} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const presionarBtn = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: false,
    }).start();
  };
  const soltarB = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, //rebote de la animación, mas bajo mayor robote
      tension: 60,
      useNativeDriver: false,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarB()}
      >
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 24,
  },
  btn: {
    backgroundColor: '#00AEE2',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
export default Animacion5;
