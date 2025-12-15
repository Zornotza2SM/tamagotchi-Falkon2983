// --- MODELO ---
let hambre = 5;
let felicidad = 10;

// --- VISTA ---
function vista() {
    // 1. Generamos el HTML
    document.getElementById("app").innerHTML = `
        <div class="pet-screen">
            <h1>PIXEL PET</h1>
            
            <div class="pet-face">
                👾 
            </div>

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
        if (hambre > 0) {
            hambre--; 
        }
        vista(); // IMPORTANTE: Volvemos a pintar
    }

    document.getElementById("btn-jugar").onclick = () => {
        // Lógica: Si felicidad es menor que 10, sumamos 1.
        if (felicidad < 10) {
            felicidad++; // Completa esto
        }
        vista(); // Recargamos la vista
    }
}
// Llamamos a la vista por primera vez para que aparezca algo
vista();