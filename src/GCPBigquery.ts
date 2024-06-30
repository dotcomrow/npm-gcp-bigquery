import axios from 'axios';

export default class GCPBigquery {
  public static async query(projectId: string, accessToken: string, query: string) {
    const scope = 'https://www.googleapis.com/auth/bigquery'; // replace with the desired scope
    
    const response = await axios.post(
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