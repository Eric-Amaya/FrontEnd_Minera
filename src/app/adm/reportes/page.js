"use client";
import Navbar from '@/app/adm/components/Navbar_adm';
import { useState , useEffect} from 'react';
import Table from './components/Tabla';

export default function Reportes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP a la API para obtener los datos
    fetch("http://localhost:3001/csv/busqueda-reportes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Actualizar el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:3001/csv/busqueda-reportes?filter_parameter=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa.');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Actualizar el estado con los datos de la API
      })
      .catch((error) => {
        console.error('Error al realizar la búsqueda:', error);
      });
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
    <title>Reportes - Minerales Raros S.A.</title>
    <Navbar></Navbar>
    <header className='fixed w-full top-24 z-20'>
      <div className="bg-gray-400 p-4">
        <div className="flex justify-start mx-2 ">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 border border-gray-300 rounded mr-2"
          />
          <button onClick={handleSearch} className="bg-white hover:bg-gray-300 text-gray-900 px-4 py-2 rounded ml-2">
            Buscar
          </button>
          <div className="relative inline-block">
            <button onClick={handleFilterToggle} className="bg-white hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-24">
              Filtrar por
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                <button onClick={() => handleFilterByFase('Fase')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full h-full">
                  Fase
                </button>
                <button onClick={() => handleFilterByRajo('Rajo')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full h-full">
                  Rajo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>  
    <Table data={data}/>
    </>
  );
}
