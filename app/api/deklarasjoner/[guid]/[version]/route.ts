import { Deklarasjoner } from '@/app/classes/Deklarasjoner';
import { NextResponse } from 'next/server';

interface Params {
  params: Promise<{ guid: string; version: string }>;
}

export async function GET(req: Request, { params }: Params) {
  const { guid, version } = await params;

  const deklarasjon = await Deklarasjoner.getByUid(guid, version);
  const kolli = await Deklarasjoner.getShipmentByGuid(
    deklarasjon?.transport?.id,
  );

  return NextResponse.json({ ...deklarasjon, kolli });
}
