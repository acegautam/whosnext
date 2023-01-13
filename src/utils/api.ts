import axios from 'axios';
import { baseApiUrl } from '../config/apiConfig';

export const fetchParticipants = async () => {
  let { data } = await axios.get(`${baseApiUrl}/getParticipants`);
  return data;
}