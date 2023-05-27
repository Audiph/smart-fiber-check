import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import Icons from '@expo/vector-icons/MaterialIcons';
import PhoneHold from '../components/PhoneHold';
import { LOGIN_SCREEN } from '../utils/constants';
import PrimaryButton from '../components/PrimaryButton';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log('Logged in with: ', user.email);
    //     navigation.navigate('HomeScreen');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Alert.alert(error.code);
    //   });
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.keyboard_view}>
      <SafeAreaView
        style={[
          styles.screen,
          { backgroundColor: theme.colors.card, minHeight: dimensions.height },
        ]}
      >
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={styles.back_content}
        >
          <TouchableOpacity
            onPress={() => navigation.replace('LastIntroScreen')}
          >
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.phone_contents}
        >
          <PhoneHold width={400} height={400} />
        </Animated.View>
        <View style={styles.div_contents}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={styles.title}
          >
            {LOGIN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={styles.description}
          >
            {LOGIN_SCREEN.description}
          </Animated.Text>
          <View style={styles.button_content}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={styles.fields}
            >
              <TextInput
                placeholder="Email"
                style={[
                  styles.email,
                  {
                    color: theme.colors.text,
                    backgroundColor: theme.colors.background,
                  },
                ]}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Icons
                name="email"
                size={24}
                color={theme.colors.text}
                style={styles.input_icon}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={styles.fields}
            >
              <TextInput
                placeholder="Password"
                style={[
                  styles.email,
                  {
                    color: theme.colors.text,
                    backgroundColor: theme.colors.background,
                  },
                ]}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={styles.input_icon}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton label="Login" onPress={handleLogin} />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  keyboard_view: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },

  back_content: {
    paddingHorizontal: 24,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
  },

  phone_contents: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  div_contents: {
    padding: 24,
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
