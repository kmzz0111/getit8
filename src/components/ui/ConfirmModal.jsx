import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';

export default function ConfirmModal({ visible, title = '확인', message, onCancel, onConfirm }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          {!!message && <Text style={styles.msg}>{message}</Text>}
          <View style={styles.row}>
            <Pressable style={[styles.btn, styles.cancel]} onPress={onCancel}>
              <Text>취소</Text>
            </Pressable>
            <Pressable style={[styles.btn, styles.danger]} onPress={onConfirm}>
              <Text style={{ color: '#fff' }}>삭제</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  msg: {
    fontSize: 16,
    color: '#333',
    marginVertical: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12, 
    marginTop: 8,
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  cancel: {
    backgroundColor: '#eee',
  },
  danger: {
    backgroundColor: '#E5484D',
  },
});