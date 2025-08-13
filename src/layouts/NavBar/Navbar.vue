<template>
  <q-layout>
    <q-header :class="{ 'bg-dark text-white': $q.dark.isActive, 'bg-white text-black': !$q.dark.isActive }" elevated>
      <q-toolbar>
        <q-toolbar-title>🎉 Espaço Fuji</q-toolbar-title>
        <div class="q-gutter-sm">
          <g-button label="Inicio" to="/"/>
          <g-button label="Galeria" to="/galeria/"/>
          <g-button label="Preços" to="/precos/"/>
          <g-button label="Contato" to="/contato/"/>
          <q-btn 
            flat round :text-color="!$q.dark.isActive ? 'black' : 'white'"
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            @click="toggleTheme"
          >
            <q-tooltip>{{ $q.dark.isActive ? "Alterar para modo claro" : "Alterar para modo escuro" }}</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const router = useRouter()
const $q = useQuasar()

const toggleTheme = () => {
  $q.dark.toggle();
  $q.localStorage.set("dark", $q.dark.isActive);
}

function goTo(url) {
  router.push(url)
}
</script>
