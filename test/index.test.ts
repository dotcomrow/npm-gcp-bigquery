import GCloudBigquery from '../src/index';
import * as fs from 'fs';

const projectId = 'database-30f7f3c2abdbda4f'; 
const keyFilePath = '/Users/admin/Downloads/database-30f7f3c2abdbda4f-80b680adee27.json'; // replace with the path to your service account key file
const keyFileContent = fs.readFileSync(keyFilePath, 'utf8');

console.log("asdf1")
console.log(GCloudBigquery.query(projectId, keyFileContent, 'SELECT * FROM `database-30f7f3c2abdbda4f.user_preferences`'))
