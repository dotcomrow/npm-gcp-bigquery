import axios from 'axios';
import fetchAdapter from "@haverstack/axios-fetch-adapter";

class GCloudBigquery {
  public static async query(projectId: string, accessToken: string, query: string) {
    const scope = 'https://www.googleapis.com/auth/bigquery'; // replace with the desired scope
    
    const client = axios.create({
      adapter: fetchAdapter
    });
    const response = await client.post(
      `https://bigquery.googleapis.com/bigquery/v2/projects/${projectId}/queries`,
      {
        query,
        useLegacySql: false,
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  }
}
export default GCloudBigquery;