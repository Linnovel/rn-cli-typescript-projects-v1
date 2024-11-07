import {StyleSheet, View} from 'react-native';

const TestScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.blueBox]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b4250',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
  },
  orangeBox: {
    backgroundColor: 'orange',
    position: 'relative',
    top: 50,
  },
  blueBox: {
    backgroundColor: 'blue',
  },
});

export default TestScreen;
