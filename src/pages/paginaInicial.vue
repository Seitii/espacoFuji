<template>
    <div class="q-pa-md">
        <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
        >
            <q-carousel-slide
                v-for="(item, index) in slides"
                :key="index"
                :name="index"
                :img-src="item.img"
            >
                <div class="text-h6">{{ item.title }}</div>
                <div class="text-subtitle2">{{ item.caption }}</div>
            </q-carousel-slide>
        </q-carousel>
        <div>
            <div class="text-center q-mb-xl">
                <h2 class="text-h4">Nosso Espaço</h2>
            </div>
            <Espacos/>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import Espacos from "src/components/global/Espacos.vue";

const slide = ref(0);
const autoplay = ref(true);
const slides = ref([
    {
        img: 'https://cdn.quasar.dev/img/mountains.jpg',
        title: 'Montanhas',
        caption: 'Uma bela vista das montanhas.'
    },
    {
        img: 'https://cdn.quasar.dev/img/forest.jpg',
        title: 'Floresta',
        caption: 'A tranquilidade da floresta.'
    },
    {
        img: 'https://cdn.quasar.dev/img/sunrise.jpg',
        title: 'Nascer do Sol',
        caption: 'O nascer do sol é sempre inspirador.'
    }
]);

defineExpose({
    Espacos
})
</script>