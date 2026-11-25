<template>
  <main class="niveles">
    <section class="cabecera">
      <h1>ELIGE TU AVENTURA</h1>

      <p>
        Prepárate para explorar Numilandia y convertirte en un gran aventurero
        de las matemáticas.
      </p>
    </section>

    <section class="contenedor-niveles">
      <article class="tarjeta nivel-bosque">
        <div class="personaje">🦊</div>

        <h2>Pequeños exploradores</h2>

        <span class="edad">3 - 5 años</span>

        <p>
          Explora el bosque mágico, aprende los números, cuenta animales y
          descubre las formas.
        </p>

        <button @click="seleccionarNivel(1)">¡Explorar!</button>
      </article>

      <article class="tarjeta nivel-pueblo">
        <div class="personaje">🐻</div>

        <h2>Aventureros matemáticos</h2>

        <span class="edad">6 - 8 años</span>

        <p>
          Visita el pueblo y supera retos de sumas, restas, multiplicaciones y
          divisiones.
        </p>

        <button @click="seleccionarNivel(2)">¡Aventurarme!</button>
      </article>

      <article class="tarjeta nivel-castillo">
        <div class="personaje">🦉</div>

        <h2>Genios matemáticos</h2>

        <span class="edad">9 - 10 años</span>

        <p>
          Entra en el castillo y resuelve desafíos de fracciones, decimales y
          problemas.
        </p>

        <button @click="seleccionarNivel(3)">¡Al castillo!</button>
      </article>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function seleccionarNivel(nivel) {
  console.log("Nivel seleccionado:", nivel);

  // Más adelante enviaremos el nivel seleccionado
  // a la pantalla del juego.
}
</script>

<style scoped>
/* =====================================
   PANTALLA DE NIVELES
===================================== */

.niveles {
  min-height: 100vh;
  padding: 50px 6%;
  background: linear-gradient(
    135deg,
    #fff1f8,
    #e8f5ff,
    #f2eaff
  );
  font-family: Arial, sans-serif;
}

/* =====================================
   CABECERA
===================================== */

.cabecera {
  text-align: center;
  margin-bottom: 50px;
}

.cabecera h1 {
  color: #8b5cf6;
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 15px;
  text-shadow: 2px 2px 0 #e9d5ff;
}

.cabecera p {
  color: #606779;
  font-size: 18px;
  line-height: 1.6;
}

/* =====================================
   CONTENEDOR DE TARJETAS
===================================== */

.contenedor-niveles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* =====================================
   TARJETAS
===================================== */

.tarjeta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 35px 25px;
  border-radius: 30px;

  background-color: white;
  border: 3px solid transparent;

  box-shadow: 0 8px 20px rgba(80, 60, 120, 0.12);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efecto al pasar el ratón */

.tarjeta:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(80, 60, 120, 0.2);
}

/* Personajes */

.personaje {
  font-size: 75px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.tarjeta:hover .personaje {
  transform: scale(1.15) rotate(-5deg);
}

/* Títulos */

.tarjeta h2 {
  color: #374151;
  font-size: 23px;
  margin-bottom: 12px;
}

/* Edad */

.edad {
  padding: 8px 18px;
  border-radius: 20px;
  background-color: #f3e8ff;
  color: #8b5cf6;
  font-weight: bold;
  margin-bottom: 18px;
}

/* Descripción */

.tarjeta p {
  color: #606779;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 25px;
}

/* =====================================
   COLORES DE LOS NIVELES
===================================== */

.nivel-bosque {
  border-color: #86efac;
}

.nivel-pueblo {
  border-color: #93c5fd;
}

.nivel-castillo {
  border-color: #c4b5fd;
}

/* =====================================
   BOTONES
===================================== */

.tarjeta button {
  margin-top: auto;
  padding: 14px 28px;

  border: none;
  border-radius: 18px;

  color: white;
  font-size: 17px;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.3s ease;
}

.nivel-bosque button {
  background-color: #22c55e;
}

.nivel-pueblo button {
  background-color: #3b82f6;
}

.nivel-castillo button {
  background-color: #8b5cf6;
}

.tarjeta button:hover {
  transform: scale(1.07);
  filter: brightness(1.1);
}

/* =====================================
   DISEÑO RESPONSIVE
===================================== */

@media (max-width: 900px) {
  .contenedor-niveles {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .niveles {
    padding: 35px 20px;
  }

  .cabecera h1 {
    font-size: 30px;
  }

  .cabecera p {
    font-size: 16px;
  }

  .contenedor-niveles {
    grid-template-columns: 1fr;
  }
}
</style>