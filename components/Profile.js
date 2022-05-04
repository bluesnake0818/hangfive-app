import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { useState, useEffect } from 'react'
import { ProfileData } from './ProfileData'

function Profile(props) {
  const [profile, setProfile] = useState(ProfileData)
  const [profileObj, setProfileObj] = useState(
    {} 
  )

  useEffect(() => {
    {setProfileObj(profile.find(profileObj => profileObj.key === props.key))}
  },[profile])

  return (
    <View style={styles.profile}>
      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} source={require('../assets/images/profile.png')} />
      </View>
      <Text style={styles.username}>{props.profile.username}</Text>
      <View style={styles.zodiacContainer}>
        <Image style={styles.zodiacImage} source={require('../assets/images/snake.png')} />
        <Text style={styles.zodiacLabel}>{props. profile.zodiacImg}</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Chat</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
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
  profileCardContainer: {
    marginHorizontal: 10,
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
