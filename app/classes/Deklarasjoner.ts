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
    console.log(
      process.env.API_BASE_URL +
        '/deklarasjoner/' +
        uid +
        '?versjon=' +
        version,
    );
    return await axios
      .get(process.env.API_BASE_URL + '/deklarasjoner/' + uid, {
        headers: {
          Cookie: `Avdekl.Cookie=${process.env.API_AUTH_KEY}`,
        },
      })
      .then((response) => response.data);
  }
}
