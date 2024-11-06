import axios from 'axios';
import AuthModule from './Auth.Module';


type Payload = {
  url: string;
  method: string;
  data?: any;
  signal?: any;
  params?: any;
  headers?: any;
};

/**
 * Helper for calling axios services
 */
const axiosService = async ({
  url,
  method,
  data,
  signal,
  params,
  headers,
}: Payload): Promise<any> => {
  try {
    const response = await axios({
      method,
      url,
      params,
      cancelToken: signal,
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(AuthModule.getToken() && {
          Authorization: `Bearer ${AuthModule.getToken()}`,
        }),

        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error in axiosService:', error);
    throw error;
  }
};

export default axiosService;