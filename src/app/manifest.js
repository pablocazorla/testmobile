export default function manifest() {
  return {
    name: "TestMobile App",
    short_name: "TestMobile ShortApp",
    description: "Prueba de una descripcion",
    start_url: "/",
    display: "standalone",
    background_color: "#0063ff",
    theme_color: "#FFFF00",
    icons: [
      {
        src: "/favicon/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75",
      },
      {
        src: "/favicon/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0",
      },
      {
        src: "/favicon/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5",
      },
      {
        src: "/favicon/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0",
      },
      {
        src: "/favicon/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0",
      },
      {
        src: "/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0",
      },
    ],
  };
}
