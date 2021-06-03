import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCryptomoneda from "../hooks/useCryptomoneda";
import Error from "./Error";
import axios from "axios";
const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Formulario = ({ setCrypto, setMoneda }) => {
  //state del listado de cryptomonedas.
  const [listaCrypto, setLcrypto] = useState([]);
  const [error, setError] = useState(false);
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar Estadounidense" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "ARS", nombre: "Peso Argentino" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  // utilizo mi custom hook
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", MONEDAS);

  // utilizo useCryptomoneda
  const [cryptomoneda, SelectCrypto] = useCryptomoneda(
    "Elige tu cryptomoneda",
    listaCrypto
  );

  //ejecuto el llamado a la api.

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);

      setLcrypto(resultado.data.Data);
    };
    consultarAPI();
  }, []);
  // cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //valida si ambos campos estan llenos
    if (typeof moneda === "undefined" || typeof cryptomoneda === "undefined") {
      // anda pero no
      setError(true);
      return;
    }
    //pasar los datos al componente principal.
    setError(false);
    setMoneda(moneda);
    setCrypto(cryptomoneda);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMonedas />

      <SelectCrypto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
