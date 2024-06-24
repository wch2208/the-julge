import { axiosInstance } from './axiosInstance';

interface GetAlertData {
  user_id: string;
  token?: string | null;
  offset?: number;
  limit?: number;
  alert_id?: string;
}

const alertAPI = {
  getAlerts: ({
    user_id,
    token = localStorage.getItem('token'),
    offset,
    limit,
  }: GetAlertData) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const params = {
      offset,
      limit,
    };
    return axiosInstance.get(`/users/${user_id}/alerts`, { params, headers });
  },
  putAlerts: ({
    user_id,
    token = localStorage.getItem('token'),
    alert_id,
  }: GetAlertData) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const requestBody = {};
    return axiosInstance.put(
      `/users/${user_id}/alerts/${alert_id}`,
      requestBody,
      {
        headers,
      }
    );
  },
};

export default alertAPI;
