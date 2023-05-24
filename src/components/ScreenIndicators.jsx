import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

const ScreenIndicators = ({ count, activeIndex }) => {
  const theme = useTheme();

  return (
    <View style={styles.dots_content}>
      {new Array(count).fill('1').map((_, i) => (
        <View
          style={[
            styles.dots,
            {
              backgroundColor:
                i === activeIndex ? theme.colors.primary : theme.colors.border,
            },
          ]}
          key={i}
        />
      ))}
    </View>
  );
};

export default ScreenIndicators;

const styles = StyleSheet.create({
  dots_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 32,
  },

  dots: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});
