import axios from 'axios';
import configUserAPI from '../config/configUserAPI.js';

const instance = axios.create({
  baseURL: configUserAPI.baseURL,
  headers: {'Content-Type': 'application/json'},
});

export {instance as userAPI};
