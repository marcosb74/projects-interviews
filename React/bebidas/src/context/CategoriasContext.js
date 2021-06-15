import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

// Creo el Context

export const CategoriasContext = createContext();

// el provider es de donde salen los datos y funciones

const CategoriasProvider = (props) => {
  // creo el state del Context

  const [categorias, setCategorias] = useState([]);

  //ejecuto el llamado a la api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categorias = await axios.get(url);

      setCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
export default CategoriasProvider;
