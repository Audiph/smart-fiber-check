import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LastIntroScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LastIntroScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LastIntroScreen