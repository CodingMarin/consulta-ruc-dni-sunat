import { Person } from "./models";
import { ApiResponseData } from "./types";

export class DniParser {
  public parse(dni: string, data: ApiResponseData): Person | null {
    const person = new Person(
      dni,
      data.nombreSoli,
      data.apePatSoli,
      data.apeMatSoli,
      this.getVerifyCode(dni).toString()
    );

    return person;
  }

  private getVerifyCode(dni: string): number {
    const hash = [3, 2, 7, 6, 5, 4, 3, 2];
    let suma = 5;

    for (let i = 0; i < dni.length; ++i) {
      suma += parseInt(dni[i]) * hash[i];
    }

    const entero = Math.floor(suma / 11);
    const digito = 11 - (suma - entero * 11);

    return digito > 9 ? digito - 10 : digito;
  }
}
