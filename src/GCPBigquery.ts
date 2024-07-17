import axios from 'axios';

export default class GCPBigquery {
  public static async query(projectId: string, accessToken: string, query: string) {
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