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

  let korreksjon_kolli;
  let korreksjon;
  if (deklarasjon?.versjon !== 1) {
    korreksjon = await axios
      .get(
        process.env.API_BASE_URL + '/deklarasjoner/' + guid + '?versjon=' + 1,
        {
          headers: {
            Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
          },
        },
      )
      .then((response) => response.data);

    korreksjon_kolli = await axios
      .get(
        process.env.API_BASE_URL +
          `/Transport/${korreksjon?.transport?.id}/kolli`,
        {
          headers: {
            Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
          },
        },
      )
      .then((response) => response.data);
  }

  return NextResponse.json({
    ...deklarasjon,
    kolli,
    korreksjon: korreksjon ? { ...korreksjon, kolli: korreksjon_kolli } : null,
  });
}
