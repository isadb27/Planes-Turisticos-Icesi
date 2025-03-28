import React, { useState, useEffect } from "react";
import { CardGrid } from "./CardGrid"; 

function App() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch("/data.json") 
      .then((response) => response.json())
      .then((data) => setDestinos(data))
      .catch((error) => console.error("Error cargando datos:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Destinos de Viaje</h1>
      
      
      <div className="grid grid-cols-3 gap-4">
        {destinos.map((destino) => (
          <div key={destino.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={destino.imagen}
              alt={destino.destino}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{destino.destino}</h2>
            <p className="text-gray-600">{destino.descripcion}</p>
            <p className="text-sm text-gray-500">Duración: {destino.duracion} días</p>
            <p className="text-lg font-semibold text-blue-600">${destino.costo}</p>
            <p className="text-sm">Calificación: ⭐ {destino.calificacion}</p>
            <p className="text-sm">Alojamiento: {destino.alojamiento}</p>
            <p className="text-sm">Guía incluido: {destino.guia_incluido ? "Sí" : "No"}</p>
            <button
              className={`mt-2 px-4 py-2 rounded ${
                destino.reservado ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
              } text-white`}
              disabled={destino.reservado}
            >
              {destino.reservado ? "Reservado" : "Reservar"}
            </button>
          </div>
        ))}
      </div>

      
      <h2 className="text-2xl font-bold text-center mt-8">Ofertas Especiales</h2>
      <CardGrid />
    </div>
  );
}

export default App;
