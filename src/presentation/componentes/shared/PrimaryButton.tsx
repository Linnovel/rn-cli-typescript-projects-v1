import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
};

const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}>
      <Text style={styles.textButton}> {label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    width: 124,
    height: 48,
    backgroundColor: '#5856D6',
    borderRadius: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#fffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PrimaryButton;
