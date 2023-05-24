import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const FirstIntroScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FirstIntroScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LastIntroScreen')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstIntroScreen;
