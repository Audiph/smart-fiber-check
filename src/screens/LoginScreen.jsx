import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import Icons from '@expo/vector-icons/MaterialIcons';
import PhoneHold from '../components/PhoneHold';
import { LOGIN_SCREEN } from '../utils/constants';
import PrimaryButton from '../components/PrimaryButton';

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.colors.card }]}
    >
      <View style={styles.back_content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.modem_contents}>
        <PhoneHold width={400} height={400} />
      </View>
      <View style={styles.contents} />
      <View style={styles.div_contents}>
        <Text style={styles.title}>{LOGIN_SCREEN.title}</Text>
        <Text style={styles.description}>{LOGIN_SCREEN.description}</Text>
        <View style={styles.button_content}>
          <View style={styles.fields}>
            <TextInput
              placeholder="Email"
              style={[
                styles.email,
                {
                  color: theme.colors.text,
                  backgroundColor: theme.colors.background,
                },
              ]}
            />
            <Icons
              name="email"
              size={24}
              color={theme.colors.text}
              style={styles.input_icon}
            />
          </View>
          <View style={styles.fields}>
            <TextInput
              placeholder="Password"
              style={[
                styles.email,
                {
                  color: theme.colors.text,
                  backgroundColor: theme.colors.background,
                },
              ]}
            />
            <Icons
              name="lock"
              size={24}
              color={theme.colors.text}
              style={styles.input_icon}
            />
          </View>
          <PrimaryButton
            label="Next"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  back_content: {
    paddingHorizontal: 24,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
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
    gap: 16,
    marginTop: 32,
  },

  fields: {
    position: 'relative',
    width: '100%',
  },

  email: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 48,
    paddingRight: 12,
    height: 48,
    borderRadius: 100,
    width: '100%',
  },

  input_icon: {
    position: 'absolute',
    left: 12,
    top: 12,
    opacity: 0.5,
  },
});
