import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const STORIES = [
  { img: require('./src/images.jpg'), user: 'bob' },
  { img: require('./src/images1.jpg'), user: 'alice' },
  { img: require('./src/images2.jpg'), user: 'jasmine' },
  { img: require('./src/images3.jpg'), user: 'edward' },
  { img: require('./src/images4.jpg'), user: 'diana' },
];

const POSTS = [
  { img: require('./src/images.jpg'), user: 'bob', caption: 'Sunset vibes' },
  { img: require('./src/images1.jpg'), user: 'alice', caption: 'Mountain hike' },
  { img: require('./src/images2.jpg'), user: 'jasmine', caption: 'City lights' },
  { img: require('./src/images3.jpg'), user: 'edward', caption: 'Beach day' },
  { img: require('./src/images4.jpg'), user: 'diana', caption: 'Forest walk' },
];

function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="camera-outline" size={28} />
      <Text style={styles.logo}>Instagram</Text>
      <Ionicons name="paper-plane-outline" size={28} />
    </View>
  );
}

function StoryList() {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesScroll}
      >
        {STORIES.map((s, i) => (
          <View key={i} style={styles.storyItem}>
            <View style={styles.storyBorder}>
              <Image source={s.img} style={styles.storyImage} />
            </View>
            <Text style={styles.storyUser}>{s.user}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function PostList({ onOpenAlert }: { onOpenAlert: () => void }) {
  return (
    <ScrollView style={styles.feedContainer} contentContainerStyle={styles.feedScroll}>
      {POSTS.map((p, i) => (
        <View key={i} style={styles.postItem}>
          <View style={styles.postHeader}>
            <View style={styles.storyBorderSmall}>
              <Image source={p.img} style={styles.postAvatarSmall} />
            </View>
            <Text style={styles.postUser}>{p.user}</Text>
            <Ionicons name="ellipsis-horizontal" size={20} />
          </View>
          <Image source={p.img} style={styles.postImage} />
          <View style={styles.postActions}>
            <View style={styles.leftActions}>
              <Ionicons name="heart-outline" size={24} />
              <Ionicons name="chatbubble-outline" size={24} style={styles.actionIcon} />
              <Ionicons name="paper-plane-outline" size={24} style={styles.actionIcon} />
            </View>
            <Ionicons name="bookmark-outline" size={24} />
          </View>
          <Text style={styles.postCaption}>
            <Text style={styles.postUserBold}>{p.user} </Text>{p.caption}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

function AlertButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.buttonContainer} pointerEvents="box-none">
      <TouchableOpacity style={styles.alertButton} onPress={onPress}>
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

function AlertModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalClose} onPress={onClose}>
            <Text style={styles.modalCloseText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Alert!</Text>
          <Text style={styles.modalText}>Alert Button Pressed</Text>
        </View>
      </View>
    </Modal>
  );
}

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const openAlert = () => setModalVisible(true);
  const closeAlert = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <StoryList />
      <PostList onOpenAlert={openAlert} />
      <AlertButton onPress={openAlert} />
      <AlertModal visible={modalVisible} onClose={closeAlert} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  logo: { 
    fontSize: 22 
  },

  storiesContainer: { 
    height: 100 
  },

  storiesScroll: { 
    alignItems: 'center', 
    paddingHorizontal: 8 
  },

  storyItem: { 
    alignItems: 'center', 
    marginHorizontal: 6 
  },

  storyBorder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#c13584',
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyImage: { 
    width: 64, 
    height: 64, 
    borderRadius: 32 
  },

  storyUser: { 
    marginTop: 4, 
    fontSize: 12, 
    color: '#333' 
  },

  feedContainer: { 
    flex: 1 
  },

  feedScroll: { 
    paddingBottom: 120 
  },
  postItem: { 
    marginBottom: 20 
  },

  postHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10 
  },

  storyBorderSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#c13584',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  postAvatarSmall: { 
    width: 32, 
    height: 32, 
    borderRadius: 16 
  },
  
  postUser: { 
    fontSize: 14, 
    fontWeight: '600', 
    flex: 1 },

  postImage: { 
    width: '100%', 
    height: 300, 
    backgroundColor: '#eee' 
  },

  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  leftActions: { 
    flexDirection: 'row' 
  },

  actionIcon: { 
    marginLeft: 16 
  },

  postCaption: { 
    paddingHorizontal: 10, 
    fontSize: 14, 
    color: '#333' 
  },

  postUserBold: { 
    fontWeight: '600' 
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 110,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },
  alertButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  alertButtonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },

  modalClose: { 
    position: 'absolute', 
    top: 8, 
    right: 8 
  },

  modalCloseText: { 
    fontSize: 18, 
    fontWeight: '600' 
  },

  modalTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    marginBottom: 15 
  },

  modalText: { 
    fontSize: 16 
  },
});
