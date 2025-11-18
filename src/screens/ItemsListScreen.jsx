import { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { mockItems } from '../data/mockItems';
import ItemCard from '../components/items/ItemCard';
import ButtonPrimary from '../components/ui/ButtonPrimary';

export default function ItemsListScreen({ navigation }) {
  const [items, setItems] = useState(mockItems);
  const [query, setQuery] = useState('');

  const filtered = items.filter(i =>
    [i.name, i.description].join(' ').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <TextInput
	        placeholder="검색…"
          placeholderTextColor="#777"
          value={query}
          onChangeText={setQuery}
          style={styles.search}
        />
        <ButtonPrimary title="추가" onPress={() => navigation.navigate('Create', { add: (it) => setItems(prev => [...prev, it]) })} />
      </View>

      <FlatList
	      data={filtered}
        keyExtractor={(it) => String(it.id)}
        renderItem={({ item }) => (
          <ItemCard
	          item={item}
            onPress={() => navigation.navigate('Detail', {
              id: item.id,
              get: () => items.find(x => x.id === item.id),
              remove: () => setItems(prev => prev.filter(x => x.id !== item.id)),
              update: (patch) => setItems(prev => prev.map(x => x.id === item.id ? { ...x, ...patch } : x)),
            })}
          />
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
});