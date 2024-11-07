import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import HelloWorldScren from './src/presentation/screens/HelloWorldScren';
import CounterScreens from './src/presentation/screens/CounterScreens';
import CounterM3Screens from './src/presentation/screens/CounterM3Screens';
import BoxObjectModelScreen from './src/presentation/screens/BoxObjectModelScreen';
import DimensionScreen from './src/presentation/screens/DimensionScreen';
import PositionScreen from './src/presentation/screens/PositionScreen';
import TestScreen from './src/presentation/screens/TestScreen';

const App = () => {
  return (
    <>
      <PaperProvider>
        <SafeAreaView style={{flex: 1}}>
          {/* <CounterM3Screens /> */}
          {/* <CounterScreens /> */}
          {/* <HelloWorldScren name="Luis Agustin Linares Novellino" /> */}
          {/* <BoxObjectModelScreen /> */}
          {/* <DimensionScreen /> */}
          {/* <PositionScreen /> */}
          <TestScreen />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default App;
