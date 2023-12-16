import { useState } from "react";

export const BandAdd = ({ crearBanda }) => {
  const [valor, setValor] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (valor.trim().length > 0) {
      crearBanda(valor);
      setValor("");
    }
  };

  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de banda"
          value={valor}
          onChange={(evt) => setValor(evt.target.value)}
        />
      </form>
    </>
  );
};
