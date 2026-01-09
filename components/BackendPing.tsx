"use client";

import { useEffect } from "react";

export default function BackendPing() {
  useEffect(() => {
    // Solo ejecutar en el cliente para evitar problemas de hidratación
    if (typeof window === "undefined") return;

    // URL del backend desde variable de entorno o valor por defecto
    const baseUrl = 
      process.env.NEXT_PUBLIC_BACKEND_URL || 
      "https://backend-atletismo-supabase.onrender.com";
    
    // Al iniciar la página, se envía automáticamente una solicitud al backend
    // solo para activar/despertar el servicio (no se procesa la respuesta)
    // Se intenta con endpoint común de Spring Boot para evitar 404
    const healthEndpoint = `${baseUrl}/actuator/health`;
    
    fetch(healthEndpoint, {
      method: "GET",
      mode: "no-cors", // Permite peticiones cross-origin sin problemas de CORS
      cache: "no-store",
    }).catch(() => {
      // Ignorar errores - solo importa que se envíe la petición para activar el servicio
      // Si este endpoint no existe, el servicio igual se activará con la petición
    });
  }, []);

  // Este componente no renderiza nada visualmente
  return null;
}
