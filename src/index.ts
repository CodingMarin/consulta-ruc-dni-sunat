import { DniParser } from "./parser";
import { Dni } from "./dni";
import { Person } from "./models";

export function createConsultaDNI(): Dni {
  const parser = new DniParser();
  return new Dni(parser);
}

export async function consultaDNI(dni: string): Promise<Person | null> {
  const dniService = createConsultaDNI();
  return dniService.get(dni);
}
