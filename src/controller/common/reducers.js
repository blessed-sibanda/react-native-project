import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;
const rem = windowWidth / 375; // Design was in width of 375px

// Pre-define $rem to calculate lightStyles and dark
EStyleSheet.build({
  $rem: rem,
});
