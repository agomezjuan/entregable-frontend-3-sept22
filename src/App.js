// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React, { useEffect } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [cantidad, setCantidad] = React.useState(0);
  const incrementarCantidad = () => setCantidad(cantidad + 1);
  return (
    <div className="App">
      <Cabecera cantidad={cantidad} />
      <Listado incrementarCantidad={incrementarCantidad} />
    </div>
  );
}

export default App;
