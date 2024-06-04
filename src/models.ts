export class Person {
  dni: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  codVerifica: string;

  constructor(
    dni: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    codVerifica: string
  ) {
    this.dni = dni;
    this.nombres = nombres;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.codVerifica = codVerifica;
  }
}
