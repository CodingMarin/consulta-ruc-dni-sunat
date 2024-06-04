import { Person } from "../src/models";

declare module "@CodingMarin/consulta-ruc-dni-sunat" {
  /**
   * Consulta la información de una persona a partir del DNI.
   * @param dni El número de DNI de la persona.
   * @returns Una promesa que se resolverá con la información de la persona si la consulta tiene éxito, o con null si no se encuentra ninguna información para el DNI especificado.
   */
  export function consultarDNI(dni: string): Promise<Person | null>;
}
