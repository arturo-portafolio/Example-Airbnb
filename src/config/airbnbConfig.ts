// Configuración centralizada del Airbnb
// Edita estos valores para personalizar tu landing page

export const airbnbConfig = {
  telefono: "+52 55 1234 567800",
  telefonoWhatsApp: "52551234567800", // Sin espacios ni símbolos para wa.me
  nombreAlojamiento: "Loft Urbano con Vista Panorámica",
  ciudad: "Ciudad de México",
  descripcionCorta:
    "Disfruta de un loft moderno y acogedor con impresionantes vistas de la ciudad. Ubicación céntrica perfecta para explorar los mejores restaurantes, museos y vida nocturna. Tu escape urbano ideal.",
  amenities: [
    { icono: "Wifi", titulo: "WiFi de alta velocidad" },
    { icono: "Wind", titulo: "Aire acondicionado" },
    { icono: "ChefHat", titulo: "Cocina equipada" },
    { icono: "Tv", titulo: "Smart TV con streaming" },
    { icono: "Car", titulo: "Estacionamiento cercano" },
    { icono: "Sparkles", titulo: "Limpieza profesional" },
    { icono: "Coffee", titulo: "Cafetera premium" },
    { icono: "Building2", titulo: "Vista a la ciudad" },
  ],
  fotos: [] as string[], // Se llenarán con imágenes generadas
  testimonios: [
    {
      nombre: "María González",
      texto:
        "¡Increíble estancia! La vista al amanecer es espectacular y la ubicación inmejorable. Definitivamente regresaré.",
      avatar: "M",
    },
    {
      nombre: "Carlos Rodríguez",
      texto:
        "Muy limpio, cómodo y con todas las comodidades. El anfitrión fue muy atento. 100% recomendado.",
      avatar: "C",
    },
    {
      nombre: "Ana Martínez",
      texto:
        "Perfecto para una escapada romántica. El loft tiene un diseño hermoso y está cerca de todo.",
      avatar: "A",
    },
  ],
  textoUbicacion:
    "Ubicado en el corazón de la Condesa, a pasos de los mejores cafés, restaurantes y parques de la ciudad. Excelente conectividad con transporte público.",
  mensajeWhatsApp:
    "Hola, vi su Airbnb y quiero más información sobre disponibilidad.",
};
