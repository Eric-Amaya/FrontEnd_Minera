// En el componente Table
import React from 'react';

const Table = ({ data }) => {
  // Obtener las claves (nombres de las columnas) del primer objeto en el arreglo 'data'
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const handleRowClick = (rowIndex) => {
    console.log(rowIndex)
  };

  return (
    <div className='mt-40 overflow-x-auto'>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleRowClick(rowIndex)}
              style={{ cursor: 'pointer' }}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
