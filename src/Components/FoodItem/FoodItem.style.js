import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '100%',
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3.14,
    elevation: 3,
    marginRight: 10,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
});
