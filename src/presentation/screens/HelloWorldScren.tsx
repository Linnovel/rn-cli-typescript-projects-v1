import {StyleSheet, Text, View} from 'react-native';

const HelloWorldScren = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
    fontWeight: 'bold',
  },
});

export default HelloWorldScren;
