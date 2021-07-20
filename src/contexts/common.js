import React, { createContext, useState } from "react";

const ContextCommon = createContext({});

const ProviderCommon = ({ children }) => {
  const [pokemonResult, setPokemonResult] = useState("");
  const [pokemonsList, setPokemonsList] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <ContextCommon.Provider
      value={{
        pokemonResult,
        setPokemonResult,
        currentImg,
        pokemonsList,
        setPokemonsList,
        setCurrentImg,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ContextCommon.Provider>
  );
};

export { ContextCommon, ProviderCommon };
