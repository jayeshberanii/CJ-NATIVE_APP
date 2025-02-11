import axios from 'axios';
import { xml2js } from 'react-native-xml2js';

export const getAdvertiser = async () => {
  try {
    const response = await axios.get(
      'https://advertiser-lookup.api.cj.com/v2/advertiser-lookup?keywords&requestor-cid=7400639',
      {
        headers: {
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_CJ_AUTH_TOKEN}`,
        },
      }
    );

    // Parse the XML response into a JavaScript object
    const parsedData = await parseXML(response.data);
    return parsedData;
  } catch (error) {
    console.error('Error fetching advertiser data:', error);
    throw error; // Rethrow or handle the error as needed
  }
};

// Helper function to parse the XML data
const parseXML = (xmlData: string) => {
  return new Promise<any>((resolve, reject) => {
    xml2js(xmlData, { compact: true, spaces: 4 }, (err, result) => {
      if (err) {
        reject('Error parsing XML');
      } else {
        resolve(result);
      }
    });
  });
};
