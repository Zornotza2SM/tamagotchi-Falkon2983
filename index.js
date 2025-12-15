// --- MODELO ---
let hambre = 5;
let felicidad = 10;

// --- VISTA ---
// Primero calculamos si está vivo o muerto
  


function vista() {
    // 1. Generamos el HTML
      let estaMuerto = (hambre >= 10 || felicidad <= 0);

    // Creamos una variable para la cara
    // Si estaMuerto es true -> calavera. Si es false -> alien.
    let cara = estaMuerto ? "💀" : "👾";
    let urlCorazon = felicidad < 4 
        ? "https://lottie.host/a81e5cdc-9cdf-448f-813e-6f2138855299/2QBE9wCrMw.json" // Corazón roto
        : "https://lottie.host/eb973dc3-e0d2-47dc-bec2-b4cb210cd18a/VvkIyXSOGl.json"; // Corazón latiendo
    // OPCIONAL: Mensaje de fin de juego
    let mensaje = estaMuerto ? "<div class='game-over'>GAME OVER</div>" : "";

    document.getElementById("app").innerHTML = `
        <div class="pet-screen">
            <h1>PIXEL PET</h1>
            <div class="pet-face">
                ${cara}
            </div>
            ${mensaje}
            <div class="stats">
        <div style="display:flex; align-items:center; flex-direction:column">
            <lottie-player src="https://lottie.host/d9a1a2c0-e1bf-4dac-a25f-2d34c7cc6b79/knPi8T75UO.json"  background="transparent"  speed="1"  style="width: 50px; height: 50px;" loop autoplay></lottie-player>
            <span>Hambre: ${hambre}</span>
        </div>

        <div style="display:flex; align-items:center; flex-direction:column">
            <lottie-player src="${urlCorazon}"  background="transparent"  speed="1"  style="width: 50px; height: 50px;" loop autoplay></lottie-player>
            <span>Felicidad: ${felicidad}</span>
        </div>
    </div>

            <div class="controls">
                <button class="boton" id="btn-comer">Dar Comida</button>
                <button class="boton" id="btn-jugar">Jugar</button>
            </div>
        </div>
    `;
    // --- ACTUALIZACIÓN (Eventos) ---
    
    document.getElementById("btn-comer").onclick = () => {
        // Lógica: Si el hambre es mayor que 0, restamos 1.
        if (!estaMuerto && hambre > 0) {
            hambre--; 
        }
        vista(); // IMPORTANTE: Volvemos a pintar
    }

    document.getElementById("btn-jugar").onclick = () => {
        // Lógica: Si felicidad es menor que 10, sumamos 1.
        if (!estaMuerto && felicidad < 10) {
            felicidad++; // Completa esto
        }
        vista(); // Recargamos la vista
    }
}
// Llamamos a la vista por primera vez para que aparezca algo
vista();


// --- LOOP DEL TIEMPO ---

function pasoDelTiempo() {
    // Cada 2 segundos (2000ms), la mascota empeora
    setTimeout(() => {
        
        // 1. Empeoramos las estadísticas
        hambre++;      // Le entra hambre
        felicidad--;   // Se pone triste

        // 2. Limitamos los valores (para que no sean infinitos)
        if (hambre > 10) hambre = 10;
        if (felicidad < 0) felicidad = 0;

        // 3. Actualizamos la pantalla
        vista();

        // 4. Volvemos a llamar al temporizador (Bucle infinito)
        pasoDelTiempo();

    }, 2000);
}

// INICIAR EL TIEMPO
pasoDelTiempo();



            