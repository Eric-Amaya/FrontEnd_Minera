import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP a la API para obtener los datos
    fetch("http://localhost:3001/csv/load")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div className="mt-40 overflow-x-auto">
      <div className="w-full">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Carguio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Camión
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Flota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Material
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Origen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Zona
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Destino
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Tonelaje
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Ciclos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Rajo
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-1 py-4 whitespace-nowrap truncate">
                  {row.Fecha}
                </td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Carguio}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Camión}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Flota}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Material}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Origen}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Zona}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Destino}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Tonelaje}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Ciclos}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.Rajo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
