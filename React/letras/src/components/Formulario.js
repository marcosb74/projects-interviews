import React, { useState } from "react";
const Formulario = ({ setBusquedaLetra }) => {
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  //funcion a cada input para leer el contenido
  const { artista, cancion } = busqueda;
  const handleChange = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // despues de verificar que este todo bien, paso al componente principal.
    setBusquedaLetra(busqueda);
  };
  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Todos los campos son obligatorios!
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend className="text-center">
                Buscador de Letras de canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Ingrese el nombre del artista"
                      onChange={handleChange}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Ingrese el nombre de la cancion"
                      onChange={handleChange}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
