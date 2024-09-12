import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import HelloWorldScren from './src/presentation/screens/HelloWorldScren';
import CounterScreens from './src/presentation/screens/CounterScreens';
import CounterM3Screens from './src/presentation/screens/CounterM3Screens';

const App = () => {
  return (
    <>
      <PaperProvider>
        <SafeAreaView style={{flex: 1}}>
          <CounterM3Screens />
          {/* <HelloWorldScren name="Luis Agustin Linares Novellino" /> */}
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default App;
