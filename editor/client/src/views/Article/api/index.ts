import axios from 'axios';

export function queryMenuTree(params?: any) {
  return axios.get('/api/menutree', params).then((r) => r.data);
}
