import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

const PrimaryButton = ({ onPress, label, style, labelStyle }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, { backgroundColor: theme.colors.primary }]}
    >
      <Text style={[styles.button_text, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button_text: {
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
  },
});
