import {userAPI} from '../servers/userAPI.js';

class OperateAPI {
  async PostUser(username, password) {
    try {
      let postData = {user: {username: username, password: password}};
      let response = await userAPI.post('/users', postData);
      return 'Register successfully';
    } catch (error) {
      return 'Error';
    }
  }
}

export default OperateAPI;
