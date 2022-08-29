import React, { useEffect } from "react";
import styled from "styled-components";

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

const Titulo = styled.h1`
  font-size: 1.5rem;
`;

export default function Cabecera({ cantidad }) {
  return (
    <header>
      <Titulo>Carrito de Compras</Titulo>
      <p>
        Cantidad de productos <span>{cantidad}</span>
      </p>
    </header>
  );
}
