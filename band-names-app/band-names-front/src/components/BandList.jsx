import { useEffect, useState } from "react";

export const BandList = ({ data }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const cambionNombre = (event, id) => {
    const { nombre } = event.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = nombre;
        }
        return band;
      })
    );
  };

  const onFocuslost = (id, nombre) => {
    console.log(id, nombre);
  };

  const CreateRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary">+1</button>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={band.name}
            onChange={(event) => cambionNombre(event, band.id)}
            onBlur={() => onFocuslost(band.id, band, name)}
          />
        </td>
        <td>
          <h3>15</h3>
        </td>
        <td>
          <button className="btn btn-danger">Borrar</button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3>Bandas actuales</h3>

      <table className="table table-stripped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>

        <tbody>{CreateRows()}</tbody>
      </table>
    </>
  );
};
