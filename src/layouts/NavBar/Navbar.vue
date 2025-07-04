<template>
  <q-layout>
<q-header :class="{ 'bg-dark text-white': $q.dark.isActive, 'bg-white text-black': !$q.dark.isActive }" elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title >Fuji Imports</q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn flat round icon="notifications"/>
          <q-btn flat round icon="person"/>
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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <template v-for="(item, index) in navButtons" :key="index">
          <q-expansion-item
            :icon="item.icon"
            :label="item.label"
            expand-separator
          >
            <q-item
              v-for="(sub, subIndex) in item.subMenus"
              :key="subIndex"
              clickable
              v-ripple
              @click="goTo(sub.url)"
            >
              <q-item-section avatar>
                <q-icon :name="sub.icon" />
              </q-item-section>
              <q-item-section>
                {{ sub.label }}
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>

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
