import { useContext } from "react";
import axios from "axios";

import { ContextCommon } from "../contexts/common";

export default function useRequest() {
  const { setPokemonResult } = useContext(ContextCommon);

  async function getPokemonInformations(pokemonValue, requestType) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonValue}`;
      const res = await axios.get(url);

      if (requestType === "uniqueResult") {
        setPokemonResult(res.data);
      } else {
        return res.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  return { getPokemonInformations };
}
