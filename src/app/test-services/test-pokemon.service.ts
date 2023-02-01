import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { TestPokemon } from '../test-models/test-pokemon.model';

const apiGuitars = "https://react-assignment-mikael-production.up.railway.app/guitars";

@Injectable({
    providedIn: 'root'
})
export class TestPokemonService {

    private _pokemon: TestPokemon[] = [];
    private _error: string = "";
    private _loading: boolean = false;

    get pokemon(): TestPokemon[] {
        return this._pokemon; //Returns a readonly value which users can't change
    }

    get error(): string {
        return this._error;
    }

    get loading(): boolean {
        return this._loading;
    }

    constructor(private readonly http: HttpClient) {

    }

    public findPokemon(): void {
        this._loading = true;
        this.http.get<TestPokemon[]>(apiGuitars)
        .pipe(
            finalize(() => {
                this._loading = false;
            })
        )
            .subscribe({
                next: (pokemon: TestPokemon[]) => {
                    this._pokemon = pokemon;
                },
                error: (error: HttpErrorResponse) => {
                    this._error = error.message;
                }
            })
    }
}