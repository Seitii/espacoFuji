<template>
  <q-layout>
    <q-header :class="{ 'bg-dark text-white': $q.dark.isActive, 'bg-white text-black': !$q.dark.isActive }" elevated>
      <q-toolbar>
        <q-toolbar-title>🎉 Espaço Fuji</q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn label="Inicio" to="/"/>
          <q-btn label="Galeria" to="/galeria/"/>
          <q-btn label="Preços" to="/precos/"/>
          <q-btn label="Contato" to="/contato/"/>
          <!-- <q-btn 
            flat round :text-color="!$q.dark.isActive ? 'black' : 'white'"
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            @click="toggleTheme"
          >
            <q-tooltip>{{ $q.dark.isActive ? "Alterar para modo claro" : "Alterar para modo escuro" }}</q-tooltip>
          </q-btn> -->
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
import navButtons from 'src/router/navButtons.js'

const leftDrawerOpen = ref(false)
const router = useRouter()
const $q = useQuasar()

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const toggleTheme = () => {
  $q.dark.toggle();
  $q.localStorage.set("dark", $q.dark.isActive);
}

function goTo(url) {
  router.push(url)
}
</script>
