import { StyleSheet, Text, View, Image } from 'react-native';

function ChatListItem(props) {
  return (
    <View style={styles.chatList}>
      <View style={styles.chatListItem}>
        <View style={styles.friendImageContainer}>
          <Image style={styles.friendImage} source={require('../assets/images/profile3.png')}/> 
        </View>
        <View style={styles.chatTextSection}>
          <View style={styles.chatNameSection}>
            <Image style={styles.zodiacImage} source={require('../assets/images/snake.png')}/>
            <Text style={styles.friendName}>{props.profile.username}</Text>
          </View>
          <Text>{props.profile.text}</Text>
        </View>
      </View>
    </View>

    // profileImg='../assets/images/profile3.png'
            // zodiacImg='../assets/images/snake.png'
  )
}

export default ChatListItem



const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 16, 
    color: '#666666',
  },
  profileContainer: {
    flex: 5,
  },
  chatContainer: {
    flex: 5,
  },
  profile: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6661F1',
    width: 232,
    height: 254,
    borderRadius: 12,
    marginVertical: 10,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  profileImage: {
    width: 90, 
    height: 90, 
    margin: 20,
  },
  username: {
    color: '#ffffff',
    fontSize: 18,
  },
  zodiacContainer: {
    flexDirection: 'row',
    paddingVertical: 10, 
    paddingHorizontal: 5, 
    width: 110, 
    height: 'auto',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(191, 197, 219, 0.3)',
    borderRadius: 12,
    marginVertical: 10,
  },
  zodiacImage: {
    width: 24, 
    height: 24, 
  },
  zodiacLabel: {
    fontSize: 16,
    color: '#ffffff'
  }, 
  button: {
    width: '100%', 
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: 10,
    alignItems: 'center',
  }, 
  buttonText: {
    color: '#6661F1', 
  },
  chatListItem: {
    flexDirection: 'row',
    // height: 100,
    // borderColor: '#000000', 
    // borderWidth: 1,
    paddingVertical: 5,
    justifyContent: 'center'
  },
  friendImageContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  friendImage: {
    width: 56, 
    height: 56, 
  },
  chatTextSection: {
    flex: 5, 
    justifyContent: 'center',
    padding: 10,
  },
  chatNameSection: {
    flexDirection: 'row'
  }, 
  friendName: {
    marginLeft: 2,
  }
});
