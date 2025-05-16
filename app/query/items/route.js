import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
    const mongoURI = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}@${process.env.mongo_cluster}.ggbwnfv.mongodb.net/dune_imperium?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(mongoURI);
    const db = client.db("dune_imperium");
    const data = await db.collection("imperiumrowcards")
                        .find({})
                        .toArray();
                        
    return NextResponse.json({
        ...data
    });
}