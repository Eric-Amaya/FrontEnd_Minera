import React from 'react';
import Logo from './logo_mensual';
import Volver from './volver';

const PaginaReporte = () => {

    const Rajo = "X";
    const Fase = "Y";

  return (
    <div className='mt-24 ml-8'>
      <Volver></Volver>
      <div className="container mx-auto p-4 -mt-16">
        <div className="flex justify-start font-bold">
          <h1 className="text-4xl mr-4">Reporte</h1>
          <p className="text-4xl mr-4">Rajo {Rajo} </p>
          <p className="text-4xl mr-4">Fase {Fase}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Diaria</h2>
              <p>Valor Real: X</p>
              <div className='flex justify-between'>
                  <p>Valor Planificado: Y</p>
                  <Logo ruta = {"diario"}></Logo>
              </div>
              <p>KPI: Z</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Semanal ISO</h2>
              <p>Valor Real: X</p>
              <div className='flex justify-between'>
                <p>Valor Planificado: Y</p>
                <Logo ruta = {"semanal_iso"}></Logo>
              </div>
              <></>  
              <p>KPI: Z</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Semanal Movil</h2>
              <p>Valor Real: X</p>
              <div className='flex justify-between'>
                <p>Valor Planificado: Y</p>
                <Logo ruta = {"semanal_movil"}></Logo>
              </div>  
              <p>KPI: Z</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Mensual</h2>
              <p>Valor Real: X</p>
              <div className='flex justify-between'>
                <p>Valor Planificado: Y</p>
                <Logo ruta = {"mensual"}></Logo>
              </div>
              <p>KPI: Z</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold">Movimientos</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Extracción de mineral</h3>
              <p>Valor: X</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Remanejo</h3>
              <p>Valor: X</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Extracción de lastre</h3>
              <p>Valor: X</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Movimiento total</h3>
              <p>Valor: X</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Total extracción</h3>
              <p>Valor: X</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Mineral chancado</h3>
              <p>Valor: X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaReporte;
