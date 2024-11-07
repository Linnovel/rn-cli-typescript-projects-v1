import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';

import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <>
      <View>
        <View style={style.container}>
          <View
            style={{
              ...style.purpleBox,
              width: width * 0.6,
            }}
          />
        </View>
        <Text style={{fontSize: 50}}>
          W = {width}, Height = {height}
        </Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'orange',
  },
  purpleBox: {
    backgroundColor: '#5856dc',
    height: '50%',
    width: '50%',
  },
});

export default DimensionScreen;
