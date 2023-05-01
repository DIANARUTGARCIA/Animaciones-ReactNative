import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

const Animacion5 = () => {
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback>
        <View style={styles.btn}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 40,
  },
  texto: {},
  btn:{},
});
export default Animacion5;
