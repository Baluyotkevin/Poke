// @ts-nocheck
import React, { useEffect } from "react";
import Wrapper from "../Sections/Wrapper";
import { debounce } from "../Utils/Debounce";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/Reducers/getInitialPokemonData";
import { getPokemonData } from "../app/Reducers/getPokemonData";
import Loader from "../Components/Loader";
import { setLoading } from "../app/Slices/AppSlice";

import PokemonCardGrid from "../Components/PokemonCardGrid";

function Search() {

  const handleChange = debounce((value: string) => getPokemon(value), 300);
  const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);

  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  useEffect(() => {
    if (randomPokemons) {
      dispatch(setLoading(false));
    }
  }, [randomPokemons, dispatch]);

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemon.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons));
    } else {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  };



  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search">
          <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            className="pokemon-searchbar"
            placeholder="Search Pokemon"
          />
          <PokemonCardGrid pokemons={randomPokemons} />
        </div>
      )}
    </>
  );
}

export default Wrapper(Search);