import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vue-http-9eec2/databases/(default)/documents";
const axiosRequest = axios.interceptors.request.use(
  config => {
    console.log('interceptors request', config);
    return config
  },
  error => {
    return Promise.reject(error);
  }
)
const axiosResponse = axios.interceptors.response.use(
  response => {
    console.log('interceptors response', response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)
console.log(axiosRequest);
axios.interceptors.request.eject(axiosRequest);
axios.interceptors.response.eject(axiosResponse);

new Vue({
  render: h => h(App),
}).$mount('#app')
