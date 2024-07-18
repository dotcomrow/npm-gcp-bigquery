import axios from 'axios';

export default class GCPBigquery {
  public static async query(projectId: string, accessToken: string, query: string): Promise<any[]> {
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

    var response_data: any[] | PromiseLike<any[]> = [];
    if (response.data.totalRows > 0) {
      for (var item of response.data.rows) {
        var row: any = {};
        for (var i = 0; i < item.f.length; i++) {
          row[response.data.schema.fields[i].name] = item.f[i].v;
        }
        response_data.push(row);
      }
    } 
    return response_data;
  }
}