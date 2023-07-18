"use client";
<<<<<<< HEAD
import Navbar from "@/app/adm/components/Navbar_adm";
import { useState, useRef, useEffect } from "react";
import Table from "./components/Tabla";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfDay } from "date-fns";

export default function Produccion() {
  const [searchQuery, setSearchQuery] = useState("");
=======
import Navbar from '@/app/adm/components/Navbar_adm';
import { useState, useRef, useEffect } from 'react';
import Table from './components/Tabla';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfDay } from 'date-fns';

export default function Produccion() {
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const [selectedFase, setSelectedFase] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filterMenuRef = useRef(null);

  // Manejo del evento click fuera del filtro para cerrarlo
  useEffect(() => {
    const handleOutsideClick = (event) => {
<<<<<<< HEAD
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
=======
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
        setIsFilterOpen(false);
      }
    };

<<<<<<< HEAD
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
=======
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
    };
  }, []);

  const handleSearch = () => {
    // Lógica de búsqueda según searchQuery
    console.log(`Búsqueda: ${searchQuery}`);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
<<<<<<< HEAD
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:3001/csv/cargar", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el archivo.");
        }
        console.log("Archivo cargado exitosamente.");
      })
      .catch((error) => {
        console.error("Error al cargar el archivo:", error);
      });
=======
    // Lógica para subir el archivo
    console.log('Archivo cargado:', file);
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
  };

  const handleExport = () => {
    // Lógica para exportar el archivo
<<<<<<< HEAD
    console.log("Archivo exportado");
=======
    console.log('Archivo exportado');
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
  };

  const handleSaveChanges = () => {
    // Lógica para guardar los cambios
<<<<<<< HEAD
    console.log("Cambios guardados");
=======
    console.log('Cambios guardados');
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFaseChange = (event) => {
    setSelectedFase(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };
<<<<<<< HEAD
  const handleImportClick = () => {
    document.querySelector('input[type=file]').click();
  };
=======
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f

  return (
    <>
      <title>Producción - Minerales Raros S.A.</title>
      <Navbar></Navbar>
<<<<<<< HEAD
      <header className="fixed w-full top-24 z-20">
=======
      <header className='fixed w-full top-24 z-20'>
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
        <div className="bg-gray-400 p-4">
          <div className="flex justify-start mx-2">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-1 border border-gray-300 rounded mr-2"
            />
<<<<<<< HEAD
            <button
              onClick={handleSearch}
              className="bg-white hover:bg-gray-300 text-gray-900 px-4 py-2 rounded ml-2"
            >
              Buscar
            </button>
            <div ref={filterMenuRef} className="relative inline-block">
              <button
                onClick={handleFilterToggle}
                className="bg-white hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-24"
              >
=======
            <button onClick={handleSearch} className="bg-white hover:bg-gray-300 text-gray-900 px-4 py-2 rounded ml-2">
              Buscar
            </button>
            <div ref={filterMenuRef} className="relative inline-block">
              <button onClick={handleFilterToggle} className="bg-white hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-24">
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
                Filtrar por
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                  <div className="px-4 py-2">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-center w-full h-full cursor-pointer"
                      placeholderText="Seleccionar fecha"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
<<<<<<< HEAD
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full"
                    onClick={() => setSelectedFase(null)}
                  >
                    Fases
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full"
                    onClick={() => setSelectedMaterial(null)}
                  >
=======
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full" onClick={() => setSelectedFase(null)}>
                    Fases
                  </button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full" onClick={() => setSelectedMaterial(null)}>
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
                    Materiales
                  </button>
                </div>
              )}
            </div>
            <input type="file" onChange={handleFileUpload} className="hidden" />
<<<<<<< HEAD
            <button
              onClick={handleImportClick}
              className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded ml-40 mr-5"
            >
              Importar archivo
            </button>
            <button
              onClick={handleExport}
              className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded ml-2 mr-5"
            >
              Exportar archivo
            </button>
            <button
              onClick={handleSaveChanges}
              className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded ml-2"
            >
=======
            <button onClick={() => document.querySelector('input[type=file]').click()} className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded ml-40 mr-5">
              Importar archivo
            </button>
            <button onClick={handleExport} className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded ml-2 mr-5">
              Exportar archivo
            </button>
            <button onClick={handleSaveChanges} className="bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded ml-2">
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
              Guardar cambios
            </button>
          </div>
        </div>
      </header>
      <Table rows={30} columns={4} />
    </>
  );
}
<<<<<<< HEAD
=======


>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
