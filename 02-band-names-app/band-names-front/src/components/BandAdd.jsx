import { useContext, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import { SocketContext } from "../context/SocketContext";

export const BandAdd = () => {
  const [valor, setValor] = useState("");
  const { socket } = useContext(SocketContext);

  const onSubmit = (event) => {
    event.preventDefault();

    if (valor.trim().length > 0) {
      console.log(valor)
      socket.emit("crear-banda", {nombre:valor});
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
