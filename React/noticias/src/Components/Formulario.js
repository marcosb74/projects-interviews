import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";
const Formulario = ({ setCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  // utilizo el custom hook

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  // submit al form, pasa la categoria a app.js
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m9 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large  purple lighten-1 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
};
export default Formulario;
