import apiClient from './apiClient';
import { AuthResponse, LoginRequest } from '../types/auth';

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/login', data);
  return response.data;
};
