import {Text, View} from 'react-native';
import {useState} from 'react';
import {globalStyles} from '../componentes/theme/global.styles';
import FabButton from '../componentes/shared/FabButton';
import {FAB} from 'react-native-paper';

const CounterM3Screens = () => {
  const [count, setCount] = useState(10);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{10}</Text>
      <FAB
        label="+1"
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 1)}
      />
    </View>
  );
};

export default CounterM3Screens;
