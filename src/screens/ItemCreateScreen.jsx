import { View, StyleSheet } from 'react-native';
import ItemForm from '../components/items/ItemForm';

export default function ItemCreateScreen({ route, navigation }) {
  const add = route.params?.add;

  return (
    <View style={styles.page}>
      <ItemForm
		      onSubmit={(form) => {
          const newItem = { id: Date.now(), ...form };
          add?.(newItem);
          navigation.goBack();
        }}
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