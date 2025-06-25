export async function POST(request) {
    const body = await request.json();
    console.log("Received data:", body);
    return Response.json({message:"hello"})
}