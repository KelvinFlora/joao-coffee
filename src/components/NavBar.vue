<template>
  <nav class="navbar navbar-expand-lg bg-secondary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">
        <router-link class="nav-link2" to="/"
          ><img
            src="./icons/iconjc.png"
            alt="Logo"
            width="100"
            height="100"
            class="d-inline-block align-text-top"
          />
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
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/#servicos">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/#contato">Contato</a>
          </li>
          <!--
          <li class="nav-item">
            <router-link class="nav-link fw-bold" to="/cursos">Cursos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fw-bold" to="/empregos">Central de Empregos</router-link>
          </li>
        --></ul>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-secondary fixed">
    <div class="container">
      <a class="navbar-brand text-light" href="#">
        <router-link class="nav-link2" to="/"
          ><img
            src="./icons/iconjc.png"
            alt="Logo"
            width="100"
            height="100"
            class="d-inline-block align-text-top"
          />
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
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#servicos">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contato">Contato</a>
          </li>
          <!--
          <li class="nav-item">
            <router-link class="nav-link" to="/cursos">Cursos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empregos">Central de Empregos</router-link>
          </li>
          -->
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2879, 51, 51' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.nav-link {
  color: #0a5640 !important;
}
.nav-link2 {
  color: white !important;
  text-decoration: none;
}
</style>
