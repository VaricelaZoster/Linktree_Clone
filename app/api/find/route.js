import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json(); // your query filter

    const client = await clientPromise;
    const db = client.db("Linktree");
    const collection = db.collection("users");

    const result = await collection.findOne(body); // ✅ returns one document

    return Response.json({
        success: true,
        error: false,
        found: result ? true : false,
        result,
    });
}
