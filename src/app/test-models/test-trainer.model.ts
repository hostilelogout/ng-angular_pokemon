import { TestPokemon } from "./test-pokemon.model";

export interface TestTrainer {
    id: number;
    username: string;
    caughtPokemon: TestPokemon[];
}