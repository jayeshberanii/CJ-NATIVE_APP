import apiClient from './apiClient';
import { User } from '../types/user';

export const getUserProfile = async (): Promise<User> => {
  const response = await apiClient.get<User>('/user/profile');
  return response.data;
};
