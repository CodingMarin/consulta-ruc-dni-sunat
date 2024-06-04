import axios from "axios";
import { Person } from "./models";
import { DniParser } from "./parser";

export class Dni {
  private parser: DniParser;

  constructor(parser: DniParser) {
    this.parser = parser;
  }

  public async get(dni: string): Promise<Person | null> {
    const params = {
      tipDocu: "1",
      numDocu: dni,
      tipPers: "1",
    };

    try {
      const response = await axios.post(
        "https://ww1.sunat.gob.pe/ol-ti-itatencionf5030/registro/solicitante",
        JSON.stringify(params),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      if (!result || !result.nombreSoli) {
        return null;
      }

      return this.parser.parse(dni, result);
    } catch (error) {
      console.error("Error obteniendo información del DNI:", error);
      throw error;
    }
  }
}
