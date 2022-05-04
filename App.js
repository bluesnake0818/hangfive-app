import { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import ChatListItem from './components/ChatListItem';
import Profile from './components/Profile';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [profiles, setProfiles] = useState([
    { key: 'akko', username: 'akko', profileImg: 'profile1', zodiacImg: 'rat', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#6661F1' },
    { key: 'angela', username: 'angela', profileImg: 'profile2', zodiacImg: 'ox', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#FFB700' },
    { key: 'tommy', username: 'tommy', profileImg: 'profile3', zodiacImg: 'tiger', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' , color: '#6661F1'},
    { key: 'bobby', username: 'bobby', profileImg: 'profile4', zodiacImg: 'rabbit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#FFB700' },
    { key: 'mary', username: 'mary', profileImg: 'profile5', zodiacImg: 'dragon', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#6661F1' },
    { key: 'king kong', username: 'king kong', profileImg: 'profile6', zodiacImg: 'snake', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#FFB700' },
    { key: 'nyankko', username: 'nyankko', profileImg: 'profile7', zodiacImg: 'horse', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#6661F1' },
    { key: 'wooki', username: 'wookki', profileImg: 'profile8', zodiacImg: 'goat', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#FFB700' },
    { key: 'thor', username: 'thor', profileImg: 'profile9', zodiacImg: 'monkey', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#6661F1' },
    { key: 'hulk', username: 'hulk', profileImg: 'profile10', zodiacImg: 'rooster', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#FFB700' },
    { key: 'spidie', username: 'spidie', profileImg: 'profile11', zodiacImg: 'dog', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#6661F1' },
    { key: 'apron', username: 'apron', profileImg: 'profile12', zodiacImg: 'pig', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', color: '#FFB700' },
  ])

  function startAddGoalHandler () {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()},
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler (id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id)
    })
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chat</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.subtitle}>Your daily Dragon friend picks</Text>
          <FlatList 
            data={profiles} 
            horizontal={true}
            renderItem={(itemData) => {
              return (
                <View style={styles.profileCardContainer}>
                  <Profile 
                    profile={itemData.item}
                    key={itemData.item.key}
                  />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.chatContainer}>
          <Text style={styles.subtitle}>Friends</Text>
          <FlatList 
            data={profiles} 
            renderItem={(itemData) => {
              return (
                <ChatListItem
                  profile={itemData.item} 
                  id={itemData.item.key} 
                />
              )
            }}
          />
          {/* <ChatListItem 
            username='frankie12'
            // profileImg='../assets/images/profile3.png'
            // zodiacImg='../assets/images/snake.png'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <ChatListItem 
            username='sara12'
            // profileImg={require('../assets/images/profile4.png')}
            // zodiacImg={require('../assets/images/tiger.png')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <ChatListItem 
            username='mango12'
            // profileImg='../assets/images/profile6.png'
            // zodiacImg='../assets/images/dragon.png'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <ChatListItem 
            username='toy312'
            // profileImg='../assets/images/profile7.png'
            // zodiacImg='../assets/images/snake.png'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          /> */}
          {/* <ChatListItem 
            username='frankie12'
            profileImg='../assets/images/profile3.png'
            zodiacImg='../assets/images/snake.png'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <ChatListItem 
            username='sara12'
            profileImg={require('../assets/images/profile4.png')}
            zodiacImg={require('../assets/images/tiger.png')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <ChatListItem 
            username='mango12'
            profileImg='../assets/images/profile6.png'
            zodiacImg='../assets/images/dragon.png'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          />
          <ChatListItem 
            username='toy312'
            profileImg='../assets/images/profile7.png'
            zodiacImg='../assets/images/snake.png'
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          /> */}
        </View>
      </View>
    </>
  );
}

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
