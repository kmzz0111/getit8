import { View, StyleSheet } from 'react-native';
import ItemForm from '../components/items/ItemForm';

export default function ItemEditScreen({ route, navigation }) {
  const { initial, apply } = route.params;

  return (
    <View style={styles.page}>
      <ItemForm
	      initial={initial}
        onSubmit={(form) => { apply?.(form); navigation.goBack(); }}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
});