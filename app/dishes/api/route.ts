import {NextResponse} from 'next/server';


export async function GET (request: Request) {
    const response = await fetch ('https://api.airtable.com/v0/appDZzbNbEqMc2JD2/dishes',{
        headers:{
            Authorization: 'Bearer pat0rinklilSkcwSZ.af4a61cc9186be6b64f546f4ede02101763aac731d21cf93d7f16dfef61729ae'
        },
        next:{
            revalidate:10,
        }
        
    });
    const data = await response.json();

    return NextResponse.json(data.records);
}
