import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>hola</Text> */}
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    borderWidth: 10,
  },
  purpleBox: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default BoxObjectModelScreen;
