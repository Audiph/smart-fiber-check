import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIRST_INTRO_SCREEN } from '../utils/constants';
import Modem from '../components/Modem';
import { useTheme } from '@react-navigation/native';
import ScreenIndicators from '../components/ScreenIndicators';
import PrimaryButton from '../components/PrimaryButton';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const FirstIntroScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.colors.card }]}
    >
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={styles.modem_contents}
      >
        <Modem width={300} height={300} />
      </Animated.View>
      <View style={styles.contents} />
      <View style={styles.div_contents}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={styles.title}
        >
          {FIRST_INTRO_SCREEN.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={styles.description}
        >
          {FIRST_INTRO_SCREEN.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={2} activeIndex={0} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={styles.button_content}
        >
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace('LastIntroScreen')}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default FirstIntroScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  modem_contents: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  contents: {
    padding: 24,
  },

  div_contents: {
    padding: 16,
  },

  title: {
    fontSize: 40,
    fontWeight: 800,
  },

  description: {
    opacity: 0.5,
    marginTop: 16,
    fontSize: 16,
  },

  button_content: {
    alignItems: 'center',
  },
});
