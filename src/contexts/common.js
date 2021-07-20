import React, { createContext, useState } from "react";

const ContextCommon = createContext({});

const ProviderCommon = ({ children }) => {
  const [pokemonResult, setPokemonResult] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <ContextCommon.Provider
      value={{
        pokemonResult,
        setPokemonResult,
        currentImg,
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
