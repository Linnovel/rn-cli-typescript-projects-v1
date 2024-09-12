import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';

type FabProps = {
  label: string;
  onPress?: () => void;
};

const FabButton = ({label, onPress}: FabProps) => (
  <FAB label={label} style={globalStyles.fab} onPress={onPress} />
);

export default FabButton;
