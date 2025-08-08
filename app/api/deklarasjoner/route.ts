import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await axios
    .get(process.env.API_BASE_URL + `/Deklarasjoner`, {
      headers: {
        Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
      },
    })
    .then((response) => response.data);

  return NextResponse.json(response);
}
