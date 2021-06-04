import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoNoticias from "./Components/ListadoNoticias";
function App() {
  // defino la categoria y noticias
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=62f2469bfc094bcda3b0a46e96558b94`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />

        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
