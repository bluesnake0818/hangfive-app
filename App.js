import { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

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
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image style={styles.profileImage} source={require('./assets/images/profile.png')} />
            </View>
            <Text style={styles.username}>Angela132</Text>
            <View style={styles.zodiacContainer}>
              <Image style={styles.zodiacImage} source={require('./assets/images/dragon.png')} />
              <Text style={styles.zodiacLabel}>Dragon</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Chat</Text>
            </View>
          </View>
        </View>
        <View style={styles.chatContainer}>
          <Text style={styles.subtitle}>Friends</Text>
          <View>
            <View>
              <Image /> 
              <View>
                <View>
                  <Image />
                  <Text></Text>
                </View>
                <Text></Text>
              </View>
            </View>
          </View>
        </View>
        {/* <Button 
          title='Add New Zodiac' 
          color="#6661F1" 
          onPress={startAddGoalHandler}/>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./assets/images/rabbit_head_3D.png')} />
        </View>
        <GoalInput visible={modalIsVisible} 
          addGoalHandler={addGoalHandler} 
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.key} 
                  deleteGoalHandler={deleteGoalHandler} 
                />
              )
            }}
            alwaysBounceVertical={false}
          />
        </View> */}
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
  // goalsContainer: {
  //   flex: 5,
  // }, 
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
    // width: 66,
    // height: 24, 
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
  }
});
