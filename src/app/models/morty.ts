export class Morty {
  constructor (
    private id: number,
    private mortyName: string,
    private mortyEmail: string) {}
}

export class Domicile {
  domicileId: number;
  domicileStreet: string;
  domicileCity: string;
  domicileState: string;
  domicileZip: string;
}
