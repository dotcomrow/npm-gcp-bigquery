import GCPBigquery from '../src/GCPBigquery.js';
import { GCPAccessToken } from 'npm-gcp-token';
import * as fs from 'fs';

const projectId = 'database-30f7f3c2abdbda4f'; 
const keyFilePath = '/Users/admin/Downloads/org-service-accounts-401323-26711d6db68c.json'; // replace with the path to your service account key file
const keyFileContent = fs.readFileSync(keyFilePath, 'utf8');

var gcpAccessToken = new GCPAccessToken(keyFileContent);
var token = await gcpAccessToken.getAccessToken("https://www.googleapis.com/auth/bigquery");
console.log(GCPBigquery.query(projectId, token.access_token, 'SELECT * FROM `database-30f7f3c2abdbda4f.user_preferences`'))
