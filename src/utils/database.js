import { MongoClient } from 'mongodb';

let uri = process.env.DATABASE_URL;
let dbName = process.env.DATABASE_NAME;

if (!uri) {
    throw new Error(
        'Please define the DATABASE_URL environment variable inside .env.local'
    );
}

if (!dbName) {
    throw new Error(
        'Please define the DATABASE_NAME environment variable inside .env.local'
    );
}

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectToDatabase = async () => {
    try {
        if (!client.isConnected()) await client.connect();

        const db = client.db(dbName);
        return { db, client };
    } catch (err) {
        console.error(err.message);
    }
}

export default connectToDatabase;