"use client";
import Navbar from '@/app/adm/components/Navbar_adm';
import { useState } from 'react';
import PaginaReporte from './components/reporte_dis';


export default function Reportes() {
  
    return (
      <>
      <title>Reporte - Minerales Raros S.A.</title>
      <Navbar></Navbar>
      <PaginaReporte></PaginaReporte>
      </>
    );
}