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
                <div>🍗 Hambre: ${hambre}</div>
                <div>❤️ Felicidad: ${felicidad}</div>
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



            