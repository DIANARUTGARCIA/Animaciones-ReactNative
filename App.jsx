import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import Animaciones from './components/Animaciones';
// import Animacion2 from './components/Animacion2';
import Animacion3 from './components/Animacion3';
import Animacion4 from './components/Animacion4';
import Animacio5 from './components/Animacion4';
import Animacion5 from './components/Animacion5';
import Animacion6 from './components/Animacion6';
import Animacion7 from './components/Animacion7';

function App() {
  return (
    <View style={styles.contenido}>
      {/* <Animaciones />
      <Animacion2/> */}
      {/* <Animacion3/>
      <Animacion4/> */}
      {/* <Animacion5/> */}
      {/* <Animacion6/> */}
      <Animacion7/>
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    marginTop:40,
  },
});

export default App;
