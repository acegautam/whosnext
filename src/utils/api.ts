import axios from 'axios';
import { baseApiUrl } from '../config/apiConfig';

export const fetchTeam = async (team: string) => {
  const { data } = await axios.get(`${baseApiUrl}/fetchTeam?team=${team}`);
  return data;
};

export const fetchParticipants = async () => {
  const { data } = await axios.get(`${baseApiUrl}/getParticipants`);
  return data;
};

export const fetchPresented = async () => {
  const { data } = await axios.get(`${baseApiUrl}/getPresented`);
  return data;
};

export const updatePresented = async (refId: string, team: string, presented: string[]) => {
  const { data } = await axios.post(`${baseApiUrl}/updatePresented`, { refId, team, presented });
  return data;
};

export const resetTeam = async (refId: string, team: string) => {
  const { data } = await axios.post(`${baseApiUrl}/resetTeam`, { refId, team });
  return data;
};
