<template>
  <div class="row q-col-gutter-lg">
    <div
      v-for="(item, index) in slides"
      :key="index"
      class="col-xs-12 col-sm-6 col-md-4"
    >
      <q-card
        class="bg-grey-4"
        flat
        bordered
        hoverable
      >
        <q-img :src="item.img"  />
            <q-card-section class="flex flex-center column text-center" >
                <div class="text-h6">{{ item.title }}</div>
            </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
    {
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        title: "Salão Principal",
    },
    {
        img: "https://cdn.quasar.dev/img/forest.jpg",
        title: "Área Externa",
    },
    {
        img: "https://cdn.quasar.dev/img/sunrise.jpg",
        title: "Cozinha Equipada",
    },
    {
        img: "https://cdn.quasar.dev/img/sunrise.jpg",
        title: "Espaço Kids",
    },
    {
        img: "https://cdn.quasar.dev/img/sunrise.jpg",
        title: "Pista de Dança",
    },
    {
        img: "https://cdn.quasar.dev/img/sunrise.jpg",
        title: "Área de Karaokê",
    }
]);
</script>
