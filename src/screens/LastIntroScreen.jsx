import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LAST_INTRO_SCREEN } from '../utils/constants';
import Modem from '../components/Modem';
import { useTheme } from '@react-navigation/native';
import ScreenIndicators from '../components/ScreenIndicators';
import PrimaryButton from '../components/PrimaryButton';

const LastIntroScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.colors.card }]}
    >
      <View style={styles.modem_contents}>
        <Modem width={300} height={300} />
      </View>
      <View style={styles.contents} />
      <View style={styles.div_contents}>
        <Text style={styles.title}>{LAST_INTRO_SCREEN.title}</Text>
        <Text style={styles.description}>{LAST_INTRO_SCREEN.description}</Text>
        <ScreenIndicators count={2} activeIndex={0} />
        <View style={styles.button_content}>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.navigate('LastIntroScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LastIntroScreen;

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
