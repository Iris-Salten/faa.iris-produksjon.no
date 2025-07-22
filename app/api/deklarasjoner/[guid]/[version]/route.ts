import axios from 'axios';
import { NextResponse } from 'next/server';

interface Params {
  params: Promise<{ guid: string; version: string }>;
}

export async function GET(req: Request, { params }: Params) {
  const { guid, version } = await params;

  const deklarasjon: DeklarasjonDto = await axios
    .get(
      process.env.API_BASE_URL +
        '/deklarasjoner/' +
        guid +
        '?versjon=' +
        version,
      {
        headers: {
          Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
        },
      },
    )
    .then((response) => response.data);

  const kolli = await axios
    .get(
      process.env.API_BASE_URL +
        `/Transport/${deklarasjon?.transport?.id}/kolli`,
      {
        headers: {
          Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
        },
      },
    )
    .then((response) => response.data);

  return NextResponse.json({ ...deklarasjon, kolli });
}
