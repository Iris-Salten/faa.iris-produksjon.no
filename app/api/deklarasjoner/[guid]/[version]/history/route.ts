import axios from 'axios';
import { NextResponse } from 'next/server';

interface Props {
  params: Promise<{ guid: string; version: string }>;
}

export async function GET(req: Request, { params }: Props) {
  const { guid, version } = await params;

  const history: DeklarasjonDto = await axios
    .get(
      process.env.API_BASE_URL +
        '/Deklarasjoner/' +
        guid +
        '/statushistorikk?versjon=' +
        version,
      {
        headers: {
          Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
        },
      },
    )
    .then((response) => response.data);

  return NextResponse.json(history);
}
