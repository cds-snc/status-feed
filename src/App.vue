<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">{{ $t("Status") }}</RouterLink>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink
                to="/about"
                class="nav-link active"
                aria-current="page"
                >{{ $t("About") }}</RouterLink
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="Filter"
              :placeholder="$t('Filter')"
              aria-label="Filter"
            />
            <button class="btn btn-outline-success" type="submit">
              {{ $t("Filter") }}
            </button>
            <button
              class="btn btn-outline-success"
              type="button"
              @click="
                $i18n.locale === 'en'
                  ? ($i18n.locale = 'fr')
                  : ($i18n.locale = 'en')
              "
            >
              {{ $t("LangBtn") }}
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <main class="bd-main order-1">
    <div class="container-xl">
      <RouterView />
    </div>
  </main>
</template>
