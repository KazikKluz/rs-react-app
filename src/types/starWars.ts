// starwars interfaces

export interface StarWarsPerson {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

export interface StarWarsResponse {
  count: number;
  results: StarWarsPerson[];
}
