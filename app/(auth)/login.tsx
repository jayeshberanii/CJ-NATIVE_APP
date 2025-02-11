import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { login } from '@/src/api/authApi';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await login({ email, password });
      Alert.alert('Login Success', `Welcome ${userData?.user?.name}`);
      router.replace('/profile'); // Navigate to profile screen
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
