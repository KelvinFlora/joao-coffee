<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand text-light" href="#">
        <router-link class="nav-link2" to="/"
          ><img
            src="./icons/IconPsychology.png"
            alt="Logo"
            width="35"
            height="29"
            class="d-inline-block align-text-top"
          />
          Marciran Brisida
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Início</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sobre">Sobre</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/servicos">Serviços</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contato">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.navbar .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.nav-link2 {
  color: white !important;
  text-decoration: none;
}
</style>
