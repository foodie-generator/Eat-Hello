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
    try{
        let result = await axios.post(url, zipcode)
        console.log('this is post request result', result)
        return result.data;
    }
    catch(err){
        console.log(err)
    }
  }
}


  export default GoogleService;