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

  static async postGoogleZipcode(url, zipcode) {
    try {
      let result = await axios.post(url, zipcode);
      // console.log('this is zip service');
      //result.data is json foam
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async postRestaurant(url, menu) {
    let result;
    try {
      result = await axios.post(url, menu);
      // .then((data) => console.log(data));
      // console.log('this is post restaurant menu request', result);
      //result.data is json foam
      return result.data;
    } catch (err) {
      console.log(`service post err`, err);
    }
  }
}

export default GoogleService;
