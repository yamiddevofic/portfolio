import {Client, Databases} from 'appwrite'

export const PROJECT_ID= '663d3a5c00062ac11fb2'
export const DATABASE_ID = '180606'
export const COLLECTION_ID_USUARIOS = '1'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('663d3a5c00062ac11fb2')

export const databases = new Databases(client);

export default client;