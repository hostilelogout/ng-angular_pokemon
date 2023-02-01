/*export interface TestPokemon {
    id: number;
    name: string;
    imgUrl: string;
}*/

export interface TestPokemon {
    id: string;
    model: string;
    manufacturer: string;
    bodyType: string;
    materials: PokemonMaterials;
    strings: number;
    image: string;
}

export interface PokemonMaterials {
    neck: string;
    fretboard: string;
    body: string;
}