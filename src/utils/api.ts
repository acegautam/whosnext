import axios from 'axios';
import { baseApiUrl } from '../config/apiConfig';

export const fetchParticipants = async () => {
  const { data } = await axios.get(`${baseApiUrl}/getParticipants`);
  return data;
};

export const fetchPresented = async () => {
  const { data } = await axios.get(`${baseApiUrl}/getPresented`);
  return data;
};

export const updateChosenOne = async (name: string) => {
  const { data } = await axios.post(`${baseApiUrl}/updateChosen`, { name });
  return data;
};
