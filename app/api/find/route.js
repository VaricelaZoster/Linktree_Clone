import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    const filter = caseInsensitiveQuery(body);

    function caseInsensitiveQuery(query) {
    const transformed = {};
    for (const key in query) {
        const value = query[key];
        if (typeof value === "string") {
            transformed[key] = { $regex: `^${value}$`, $options: "i" };
        } else {
            transformed[key] = value;
        }
    }
    return transformed;
}


    const client = await clientPromise;
    const db = client.db("Linktree");
    const collection = db.collection("users");

    const result = await collection.findOne(filter);

    return Response.json({
        success: true,
        error: false,
        found: !!result,
        result,
    });
}
