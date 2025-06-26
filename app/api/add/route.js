import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("Linktree");
    const collection = db.collection("users");
    const result = await collection.insertOne(body);
    return Response.json({success: true,error:false,message:"Added",
        result: result
    })
}