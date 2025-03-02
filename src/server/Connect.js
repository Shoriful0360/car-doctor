import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = process.env.MongoUri
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionNameObj={
  serviceCollection:'service'
}
export default function dbConnect(collection){
    
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    return client.db('car-doctor').collection(collection)
}