// screens/HomeScreen.js

import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 1️⃣ Header container */}
      <View style={styles.headerContainer}>
        {/* <Header title="Instagram" /> */}
      </View>

      {/* 2️⃣ Stories container */}
      <View style={styles.storiesContainer}>
        {/* <StoriesBar data={STORIES} /> */}
      </View>

      {/* 3️⃣ Feed container */}
      <View style={styles.feedContainer}>
        {/* <FlatList … renderItem={…}/> */}
      </View>

      {/* 4️⃣ Alert-button container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.alertButtonText}>Show Alert</Text>
        </TouchableOpacity>
      </View>

      {/* 🚨 Custom Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.modalText}>Alert Button Pressed</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  headerContainer: {
    // height: 60,
    // backgroundColor: '#eee',
  },
  storiesContainer: {
    // height: 100,
    // backgroundColor: '#fafafa',
  },
  feedContainer: { flex: 1, paddingBottom: 80 }, // leave space for button

  buttonContainer: {
    position: 'absolute',
    bottom: 80,   // moved up 30 points from bottom
    left: 0,
    right: 0,
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  alertButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 4,
  },
  modalCloseText: {
    fontSize: 18,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 16,
  },
});
