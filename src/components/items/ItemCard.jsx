import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function ItemCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.wrap, pressed && { opacity: 0.8 }]}>
      <Image
        source={{ uri: 'https://picsum.photos/seed/' + item.id + '/120' }}
        style={styles.thumb}  
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.price}>{item.price.toLocaleString()}원</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row', 
    padding: 16, 
    borderBottomWidth: 2, 
    borderBottomColor: '#000000ff', 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    gap: 16, 
  },
  thumb: {
    width: 120, 
    height: 120, 
    borderRadius: 8, 
    backgroundColor: '#f0f0f0', 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold', 
    marginBottom: 4, 
  },
  desc: {
    fontSize: 14,
    color: '#555', 
    marginBottom: 8, 
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold', 
    color: '#000', 
    textAlign: 'right', 
  },
});