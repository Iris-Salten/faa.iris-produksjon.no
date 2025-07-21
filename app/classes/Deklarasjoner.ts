import axios from 'axios';

export class Deklarasjoner {
  public static async getAll(): Promise<DeklarasjonerResultDto> {
    return await axios
      .get(process.env.API_BASE_URL + '/deklarasjoner', {
        headers: {
          Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
        },
      })
      .then((response) => response.data);
  }

  public static async getByUid(
    uid: string,
    version: string,
  ): Promise<DeklarasjonDto> {
    return await axios
      .get(
        process.env.API_BASE_URL +
          '/deklarasjoner/' +
          uid +
          '?versjon=' +
          version,
        {
          headers: {
            Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
          },
        },
      )
      .then((response) => response.data);
  }

  public static async getShipmentByGuid(
    transportId: number,
  ): Promise<TransportKolliDto> {
    return await axios
      .get(process.env.API_BASE_URL + `/Transport/${transportId}/kolli`, {
        headers: {
          Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
        },
      })
      .then((response) => response.data);
  }
}
