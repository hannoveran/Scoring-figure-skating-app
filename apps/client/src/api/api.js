import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getCompetitions = () => api.get('/competitions');
export const createCompetition = (data) => api.post('/competitions', data);
export const updateCompetition = (id, data) =>
  api.put(`/competitions/${id}`, data);
export const deleteCompetition = (id) => api.delete(`/competitions/${id}`);

export default api;
