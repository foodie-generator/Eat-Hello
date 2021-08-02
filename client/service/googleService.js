import axios from 'axios';
class GoogleService {
  static async getGoogleMap(url) {
    try {
      let result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }
}


  export default GoogleService;