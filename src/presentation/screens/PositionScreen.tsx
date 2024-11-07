import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2bc4d9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5b56d6',
    borderWidth: 10,
    borderColor: 'white',
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
  },
});

export default PositionScreen;
