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

        <div class="q-mt-xl">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Informações de Contato</div>
                </q-card-section>

                <q-card-section>
                    <q-list>
                        <q-item v-for="(item, index) in contato" :key="index">
                            <q-item-section avatar>
                                <q-icon :name="item.icon" />
                            </q-item-section>
                            <q-item-section>
                                <strong>{{ item.title }}</strong>
                                <div class="text-body2">{{ item.description }}</div>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </div>

        <div class="q-mt-xl">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Solicite um orçamento</div>
                </q-card-section>
                
                <q-card-section>
                    <q-form @submit.prevent="enviarMensagem" ref="form" class="column q-gutter-md">
                        <g-input
                            v-model="dados.nome"
                            label="Informe seu nome"
                        />
                        <g-input
                            v-model="dados.whatsApp"
                            label="Informe seu WhatsApp"
                        />
                        <g-date
                            v-model="dados.dataEvento"
                            outlined
                            label="Informe a data do evento"
                        />
                        <q-input
                            v-model="dados.descricao"
                            outlined
                            label="Descreva mais sobre o evento"
                            type="textarea"
                        />
                        <g-button
                            label="Enviar Mensagem"
                            color="primary"
                            type="submit"
                        />
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import Espacos from "src/components/global/Espacos.vue";

const dados = ref({
    nome: "", 
    whatsApp: "",
    dataEvento: "",
    descricao: ""
})
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

const contato = ref([
    {
        icon: "phone",
        title: "Telefone",
        description: "(61) 98638-9157",
    },
    {
        icon: "email",
        title: "Email",
        description: "hugoseite@icloud.com",
    },
    {
        icon: "location_on",
        title: "Endereço",
        description: "Rua XV de novembro, 956 - Marilia SP",
    },
]);

const enviarMensagem = () => {
    console.log("Mensagem enviada:", dados);
}

defineExpose({
    Espacos
})
</script>