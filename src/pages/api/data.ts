import getConfig from 'next/config';
import * as food from '../../../_mock_data/food.json'

const { publicRuntimeConfig } = getConfig();

class ApiService {
  apiURL = publicRuntimeConfig.apiUrl;
  imgURL = publicRuntimeConfig.imgUrl;
  postHeaders = {'Content-Type': 'application/json'};

  constructor() {}

  // Getting mock data
  getFood = async () => {
    const response = await food;
    return response;
  }

  getChows = async (token: string) => {
    const response = await fetch(
        this.apiURL + 'chows?populate*',
        {
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + token}
        }
    )
    return response;
  }

  getImages = async () => {
    const response = await fetch(this.imgURL + 'thumbnail_carrots_3_60f5a864c1.jpeg');
    return response;
  }

  userRegistration = async (data: any) => {
    const response = await fetch(
        this.apiURL + 'auth/local/register',
        {
            method: 'POST',
            headers: this.postHeaders,
            body: data
        }
    )
    return response;
  }

  userLogin = async (data: any) => {
    const response = await fetch(
        this.apiURL + 'auth/local/login',
        {
            method: 'POST',
            headers: this.postHeaders,
            body: data
        }
    )
    return response;
  }
}

export default new ApiService;