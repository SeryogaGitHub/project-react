import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c27e9853-bf33-47af-a174-d9966ebba9b0'
  }
});

export const userAPI = {
  setFollow (userId) {
    return instance.post(`follow/${userId}`, {})
                   .then(response => {
                     return response.data;
                   });
  },
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                   .then(response => {
                     return response.data;
                   });
  },
  setUnfollow (userId) {
    return instance.delete(`follow/${userId}`)
                   .then(response => {
                     return response.data;
                   });
  }
};

export const profileAPI = {
  getProfile(userId){
    return instance.get(`/profile/${userId}`);
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status){
    return instance.put(`profile/status/`, {status: status});
  },
  saveProfile(profile){
    return instance.put(`profile`, profile);
  }
};

export const authAPI = {
  getMe(){
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false){
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  logout(){
    return instance.delete(`auth/login`);
  }
};
