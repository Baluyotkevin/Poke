import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState } from "../../Utils/Types";
import { getInitialPokemonData } from "../Reducers/getInitialPokemonData";
import { getPokemonData } from "../Reducers/getPokemonData";

const initialState: PokemonTypeInitialState = {
    allPokemon: undefined,
    randomPokemons: undefined
};

export const PokemonSlice = createSlice({
    name:"app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        });
        builder.addCase(getPokemonData.fulfilled,(state, action) => {
            state.randomPokemons = action.payload;
        });
    },
});

export const {} = PokemonSlice.actions;