import { Pressable, Text, StyleSheet } from 'react-native';

export default function ButtonPrimary({ title, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.btn, pressed && { opacity: 0.7 }, style
    ]}>
      <Text style={styles.txt}>{title}</Text>
    </Pressable>
  );
}



const styles = StyleSheet.create({
    btn: {
    backgroundColor: '#2F80ED',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1, 
  },
  txt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});