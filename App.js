import { useState } from 'react'
import { StyleSheet, View, Button, FlatList, Image } from 'react-native';
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
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
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
  goalsContainer: {
    flex: 5,
  }, 
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  image: {
    width: 100, 
    height: 100, 
    margin: 20,
  },
});
