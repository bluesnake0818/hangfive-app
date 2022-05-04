import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput( props ) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/rabbit_head_3D.png')} />
        <TextInput style={styles.textInput} 
          placeholder='Your zodiac!' 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#FF6969'/>
          </View>
          <View style={styles.button}>
            <Button title="Add Zodiac" onPress={addGoalHandler} color='#FFC83D'/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6661F1',
  },
  image: {
    width: 100, 
    height: 100, 
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%', 
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%', 
    marginHorizontal: 8,
  }
})