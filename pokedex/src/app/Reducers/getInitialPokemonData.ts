import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../Utils/Constants";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async () => {
    try {
        const { data } = await axios.get(pokemonsRoute)
        return data.results
    } catch (err) {
        console.log(err);
    }
})