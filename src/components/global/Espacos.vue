<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="slide"
      class="q-mb-md"
      active-color="primary"
      indicator-color="primary"
      inline-label
    >
      <q-tab
        v-for="(grupo, gIndex) in galerias"
        :key="gIndex"
        :name="gIndex"
        :label="grupo.titulo"
      />
    </q-tabs>

    <q-carousel
      v-model="slide"
      swipeable
      animated
      control-color="amber"
      transition-prev="slide-right"
      transition-next="slide-left"
      padding
      arrows
      height="auto"
    >
      <q-carousel-slide
        v-for="(grupo, gIndex) in galerias"
        :key="gIndex"
        :name="gIndex"
      >
        <div class="row q-col-gutter-lg q-mb-xl">
          <div
            v-for="(foto, fIndex) in grupo.fotos"
            :key="fIndex"
            class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          >
            <q-card flat bordered class="bg-grey-2">
              <q-img :src="foto" />
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(0);

const galerias = ref([
  {
    titulo: "Banheiros",
    fotos: [
      new URL('src/assets/banheiros/banheiro1.jpg', import.meta.url),
      new URL('src/assets/banheiros/banheiro2.jpg', import.meta.url),
      new URL('src/assets/banheiros/banheiro3.jpg', import.meta.url)
    ]
  },
  {
    titulo: "Cozinha",
    fotos: [
      new URL('src/assets/cozinha/cozinha1.jpg', import.meta.url),
      new URL('src/assets/cozinha/cozinha2.jpg', import.meta.url),
      new URL('src/assets/cozinha/cozinha3.jpg', import.meta.url),
      new URL('src/assets/cozinha/cozinha4.jpg', import.meta.url)
    ]
  },
  {
    titulo: "Salão",
    fotos: [
      new URL('src/assets/salao/salao1.jpg', import.meta.url),
      new URL('src/assets/salao/salao2.jpg', import.meta.url),
      new URL('src/assets/salao/salao3.jpg', import.meta.url),
      new URL('src/assets/salao/salao4.jpg', import.meta.url),
      new URL('src/assets/salao/salao5.jpg', import.meta.url)
    ]
  },
  {
    titulo: "Sala Privada",
    fotos: [
      new URL('src/assets/salaPrivada/salaPrivada1.jpg', import.meta.url),
      new URL('src/assets/salaPrivada/salaPrivada2.jpg', import.meta.url)
    ]
  }
]);
</script>
