import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  const size = searchParams.get('size') || '50';
  const search = searchParams.get('search');

  const url = new URL('api/Deklarasjoner', process.env.API_BASE_URL);

  if (page) url.searchParams.set('PageNumber', page);
  if (size) url.searchParams.set('PageSize', size);
  if (search && search.length > 0) url.searchParams.set('FreeText', search);

  const response = await axios
    .get(url.href, {
      headers: {
        Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
      },
    })
    .then((response) => response.data);

  return NextResponse.json(response);
}
