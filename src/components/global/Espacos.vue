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
      arrows
      height="auto"
    >
      <q-carousel-slide
        v-for="(grupo, gIndex) in galerias"
        :key="gIndex"
        :name="gIndex"
      >
        <div class="row q-col-gutter-lg">
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
      '/images/banheiros/banheiro1.jpg',
      '/images/banheiros/banheiro2.jpg',
      '/images/banheiros/banheiro3.jpg'
    ]
  },
  {
    titulo: "Cozinha",
    fotos: [
      '/images/cozinha/cozinha1.jpg',
      '/images/cozinha/cozinha2.jpg',
      '/images/cozinha/cozinha3.jpg',
      '/images/cozinha/cozinha4.jpg',
    ]
  },
  {
    titulo: "Salão",
    fotos: [
      '/images/salao/salao1.jpg',
      '/images/salao/salao2.jpg',
      '/images/salao/salao3.jpg',
      '/images/salao/salao4.jpg',
      '/images/salao/salao5.jpg',
    ]
  },
  {
    titulo: "Sala Privada",
    fotos: [
      '/images/salaPrivada/salaPrivada1.jpg',
      '/images/salaPrivada/salaPrivada2.jpg',
    ]
  }
]);
</script>
