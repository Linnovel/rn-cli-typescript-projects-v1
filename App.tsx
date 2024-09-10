import {SafeAreaView} from 'react-native';
import HelloWorldScren from './src/presentation/screens/HelloWorldScren';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <HelloWorldScren />
      </SafeAreaView>
    </>
  );
};

export default App;
