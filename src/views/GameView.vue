<template>
  <main class="juego">
    <header class="cabecera-juego">
      <div>
        <h1>¡Aventura matemática!</h1>
        <p>Ayuda al zorrito a completar su aventura.</p>
      </div>

      <div class="informacion">
        <span>⭐ 0 puntos</span>
        <span>Actividad 1 de 5</span>
      </div>
    </header>

    <section class="personaje">
      <div class="imagen-personaje">🦊</div>

      <div class="dialogo">
        <h2>¡Hola, explorador!</h2>
        <p>
          ¡Bienvenido al bosque mágico! Necesito tu ayuda para encontrar los
          números escondidos.
        </p>
      </div>
    </section>

    <section class="historia">
      <h2>🌳 Nuestra primera aventura</h2>

      <p>
        Esta mañana, el zorrito salió a pasear por el bosque. Por el camino
        encontró:
      </p>

      <div class="pistas">
        <div class="pista">
          <h3>¿Cuántas manzanas hay?</h3>

          <div class="dibujos">🍎 🍎 🍎</div>
        </div>

        <div class="pista">
          <h3>¿Cuántas mariposas hay?</h3>

          <div class="dibujos">🦋 🦋 🦋 🦋 🦋</div>
        </div>
      </div>

      <p class="texto-historia">
        El zorrito encontró

        <span
          class="hueco"
          :class="comprobarHueco(0)"
          @dragover.prevent
          @drop.prevent="soltarNumero($event, 0)"
        >
          {{ respuestas[0] || "?" }}
        </span>

        manzanas y

        <span
          class="hueco"
          :class="comprobarHueco(1)"
          @dragover.prevent
          @drop.prevent="soltarNumero($event, 1)"
        >
          {{ respuestas[1] || "?" }}
        </span>

        mariposas.
      </p>

      <p class="instruccion">
        ¡Cuenta los dibujos y arrastra los números a los espacios!
      </p>
    </section>

    <section class="opciones">
      <h3>Elige los números correctos:</h3>

      <div class="lista-opciones">
        <button
          v-for="numero in opciones"
          :key="numero"
          draggable="true"
          @dragstart="arrastrarNumero($event, numero)"
          :disabled="comprobado"
        >
          {{ numero }}
        </button>
      </div>
    </section>

    <section class="acciones">
      <button class="limpiar" @click="limpiarRespuestas">Limpiar</button>

      <button class="comprobar" @click="comprobarRespuestas">Comprobar</button>
    </section>
    <p
      v-if="mensaje"
      class="mensaje"
      :class="{
        exito: comprobado && respuestas[0] === 3 && respuestas[1] === 5,
      }"
    >
      {{ mensaje }}
    </p>
  </main>
</template>
<script setup>
import { ref } from "vue";

const respuestas = ref(["", ""]);
const opciones = [2, 3, 5, 4];
const respuestasCorrectas = [3, 5];
const comprobado = ref(false);
const mensaje = ref("");

function arrastrarNumero(event, numero) {
  event.dataTransfer.setData("numero", numero);
}

function soltarNumero(event, posicion) {
  if (comprobado.value) {
    return;
  }

  const numero = Number(event.dataTransfer.getData("numero"));

  if (!opciones.includes(numero)) {
    return;
  }
  respuestas.value[posicion] = numero;
}

function limpiarRespuestas() {
  respuestas.value = ["", ""];
  comprobado.value = false;
  mensaje.value = "";
}

function comprobarRespuestas() {
  if (respuestas.value.includes("")) {
    mensaje.value = "¡Completa todos los espacios antes de continuar!";
    return;
  }

  if (
    respuestas.value[0] === respuestasCorrectas[0] &&
    respuestas.value[1] === respuestasCorrectas[1]
  ) {
    mensaje.value = "¡Muy bien! ¡Has completado la aventura!";
  } else {
    mensaje.value =
      "¡Uy! Alguna respuesta no es correcta. ¡Inténtalo de nuevo!";
  }

  comprobado.value = true;
}

function comprobarHueco(posicion) {
  if (!comprobado.value || respuestas.value[posicion] === "") {
    return "";
  }

  if (respuestas.value[posicion] === respuestasCorrectas[posicion]) {
    return "correcto";
  }

  return "incorrecto";
}
</script>

<style scoped>
/* FONDO GENERAL */
.juego {
  min-height: 100vh;
  padding: 30px;
  background: linear-gradient(135deg, #ecfccb, #dcfce7, #dbeafe);
  font-family: Arial, sans-serif;
  color: #334155;
}

/* CABECERA */
.cabecera-juego {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto 30px;
}

.cabecera-juego h1 {
  color: #166534;
  font-size: 32px;
  margin-bottom: 8px;
}

.cabecera-juego p {
  margin: 0;
  color: #64748b;
}

.informacion {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.informacion span {
  background: white;
  padding: 12px 18px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 0 4px 10px #00000010;
}

/* PERSONAJE */
.personaje {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  max-width: 800px;
  margin: 0 auto 30px;
}

.imagen-personaje {
  font-size: 85px;
  animation: flotar 2s infinite ease-in-out;
}

.dialogo {
  background: white;
  padding: 20px 25px;
  border-radius: 20px;
  box-shadow: 0 5px 15px #00000010;
}

.dialogo h2 {
  color: #15803d;
  margin-top: 0;
}

.dialogo p {
  margin-bottom: 0;
  line-height: 1.5;
}

/* HISTORIA */
.historia {
  max-width: 850px;
  margin: 0 auto 25px;
  padding: 30px;
  background: white;
  border-radius: 25px;
  box-shadow: 0 8px 20px #00000010;
  text-align: center;
}

.historia h2 {
  color: #166534;
  margin-top: 0;
}

.historia > p {
  line-height: 1.6;
}

/* PISTAS */
.pistas {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin: 25px 0;
}

.pista {
  background: #f0fdf4;
  border: 2px solid #bbf7d0;
  border-radius: 18px;
  padding: 20px;
  min-width: 220px;
  text-align: center;
}

.pista h3 {
  color: #166534;
  font-size: 17px;
}

.dibujos {
  font-size: 35px;
  margin-top: 15px;
  letter-spacing: 5px;
}

/* TEXTO DE LA HISTORIA */
.texto-historia {
  font-size: 20px;
  line-height: 2;
}

.hueco {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 45px;
  min-height: 45px;
  padding: 5px;
  background: #fef3c7;
  border: 2px dashed #eab308;
  border-radius: 12px;
  color: #92400e;
  font-weight: bold;
  transition: 0.3s;
}

/* HUECO CORRECTO */
.hueco.correcto {
  background: #bbf7d0;
  border: 2px solid #16a34a;
  color: #166534;
}

/* HUECO INCORRECTO */
.hueco.incorrecto {
  background: #fecaca;
  border: 2px solid #dc2626;
  color: #991b1b;
}

.instruccion {
  color: #64748b;
  font-weight: bold;
}

/* OPCIONES */
.opciones {
  max-width: 850px;
  margin: 0 auto 25px;
  padding: 25px;
  background: white;
  border-radius: 20px;
  text-align: center;
}

.opciones h3 {
  color: #166534;
  margin-top: 0;
}

.lista-opciones {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.lista-opciones button {
  width: 65px;
  height: 65px;
  border: none;
  border-radius: 18px;
  background: #bfdbfe;
  color: #1e40af;
  font-size: 25px;
  font-weight: bold;
  cursor: grab;
  user-select: none;
  transition: 0.3s;
}

.lista-opciones button:hover:not(:disabled) {
  background: #93c5fd;
  transform: scale(1.1);
}

.lista-opciones button:active {
  cursor: grabbing;
}

.lista-opciones button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* BOTONES DE ACCIÓN */
.acciones {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.acciones button {
  padding: 14px 30px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.limpiar {
  background: #e2e8f0;
  color: #334155;
}

.limpiar:hover {
  background: #cbd5e1;
}

.comprobar {
  background: #22c55e;
  color: white;
}

.comprobar:hover {
  background: #16a34a;
  transform: scale(1.05);
}

/* MENSAJE */
.mensaje {
  max-width: 850px;
  margin: 20px auto;
  padding: 15px;
  background: white;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #dc2626;
}

.mensaje.exito {
  color: #166534;
}

/* ANIMACIÓN */
@keyframes flotar {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* DISEÑO RESPONSIVE */
@media (max-width: 650px) {
  .juego {
    padding: 15px;
  }

  .cabecera-juego {
    flex-direction: column;
    text-align: center;
  }

  .cabecera-juego h1 {
    font-size: 26px;
  }

  .personaje {
    flex-direction: column;
    text-align: center;
  }

  .historia {
    padding: 20px;
  }

  .pista {
    width: 100%;
  }
}
</style>
