import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native-paper';
import PrimaryButton from '../componentes/shared/PrimaryButton';

const CounterScreens = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <PrimaryButton
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 1)}
        label="incrementar"
      />
      <Button
        mode="contained"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 1)}>
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});

export default CounterScreens;
