<template>
  <main class="home">
    <section class="inicio">
      <h1>NUMILANDIA</h1>

      <h2>Aprender es una aventura para el aprendizaje de cada uno</h2>

      <p>
        Prepárate para descubrir un mundo lleno de números, diversión y juegos.
        ¡Jugando, todo es + fácil!
      </p>

      <div class="formulario">
        <label for="nombre">¿Cómo te llamas?</label>

        <input
          id="nombre"
          v-model="nombre"
          type="text"
          placeholder="Escribe aquí tu nombre"
          maxlength="20"
        />

        <button @click="comenzarJuego"> A JUGAR </button>
      </div>
    </section>

    <section class="imagen">
      <img src="/imagenes/fondo.png" alt="El mundo mágico de Numilandia" />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const nombre = ref("");
const router = useRouter();

function comenzarJuego() {
  if (nombre.value.trim() === "") {
    alert("Tienes que escribir tu nombre para poder comenzar a jugar");
    return;
  }

  router.push("/niveles");
}
</script>
<style scoped>
/* =====================================
   PANTALLA PRINCIPAL
===================================== */

.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 60px 8%;

  background: linear-gradient(
    135deg,
    #fff1f8,
    #e8f5ff,
    #f2eaff
  );

  font-family: Arial, sans-serif;
  overflow: hidden;
}

/* =====================================
   PARTE IZQUIERDA
===================================== */

.inicio {
  flex: 1;
  max-width: 550px;
}

/* Título principal */

.inicio h1 {
  font-size: 65px;
  font-weight: 900;
  color: #8b5cf6;
  margin-bottom: 20px;
  letter-spacing: 3px;
  text-shadow: 3px 3px 0 #e9d5ff;
}

/* Subtítulo */

.inicio h2 {
  font-size: 32px;
  color: #374151;
  margin-bottom: 20px;
  line-height: 1.3;
}

/* Descripción */

.inicio p {
  font-size: 19px;
  color: #606779;
  line-height: 1.7;
  margin-bottom: 35px;
}

/* =====================================
   FORMULARIO
===================================== */

.formulario {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

/* Etiqueta */

.formulario label {
  font-size: 20px;
  font-weight: bold;
  color: #4b5563;
}

/* Campo de nombre */

.formulario input {
  width: 100%;
  max-width: 350px;
  padding: 16px 20px;

  border: 3px solid #d8b4fe;
  border-radius: 18px;

  background-color: white;
  color: #374151;
  font-size: 17px;

  outline: none;
  transition: all 0.3s ease;
}

/* Texto del placeholder */

.formulario input::placeholder {
  color: #aaa1b8;
}

/* Efecto al seleccionar el input */

.formulario input:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 12px #c4b5fd;
  transform: scale(1.02);
}

/* =====================================
   BOTÓN
===================================== */

.formulario button {
  margin-top: 12px;
  padding: 17px 45px;

  border: none;
  border-radius: 20px;

  background: linear-gradient(
    135deg,
    #a78bfa,
    #ec4899
  );

  color: white;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1px;

  cursor: pointer;

  box-shadow: 0 6px 0 #9d4edd;
  transition: all 0.3s ease;
}

/* Efecto al pasar el ratón */

.formulario button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 18px #c4b5fd;
}

/* Efecto al pulsar */

.formulario button:active {
  transform: translateY(2px);
  box-shadow: 0 3px 0 #9d4edd;
}

/* =====================================
   PARTE DERECHA - IMAGEN
===================================== */

.imagen {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen img {
  width: 100%;
  max-width: 570px;
  height: auto;
  object-fit: contain;

  animation: flotar 3s ease-in-out infinite;
}

/* =====================================
   ANIMACIÓN DE LA IMAGEN
===================================== */

@keyframes flotar {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

/* =====================================
   DISEÑO RESPONSIVE
===================================== */

@media (max-width: 768px) {
  .home {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    gap: 35px;
  }

  .inicio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inicio h1 {
    font-size: 45px;
  }

  .inicio h2 {
    font-size: 25px;
  }

  .inicio p {
    font-size: 17px;
  }

  .formulario {
    align-items: center;
    width: 100%;
  }

  .imagen img {
    max-width: 350px;
  }
}
</style>