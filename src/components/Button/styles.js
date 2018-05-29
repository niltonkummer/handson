import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: colors.primary,
    borderRadius: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
  },

  'button-outline': {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  'button-small': {
    paddingHorizontal: 20,
  },
  'button-regular': {
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  'button-big': {
    paddingHorizontal: 60,
    paddingVertical: 35,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: sizes.small,
  },

  'text-outline': {
    color: colors.primary,
  },
  'text-small': {
    fontSize: sizes.small,    
  },
  'text-regular': {
    fontSize: sizes.regular,
  },
  'text-bigger': {
    fontSize: sizes.bigger,    
  }
  
});

export default styles;