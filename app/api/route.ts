import { NextResponse, NextRequest } from "next/server";

export async function GET (request: Request) {
    return NextResponse.json({msg: 'ok.'});
}
export async function POST (request: Request, response: Response) {

    const responseData = await  request.json();
    console.log(responseData);
    return NextResponse.json(
        {message: "response from the server",
        ...responseData
        });
}