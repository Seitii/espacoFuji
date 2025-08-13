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
                    <div class="text-h6">Calcule o valor da sua Festa</div>
                </q-card-section>

                <q-card-section>
                    <q-form ref="form" @submit.prevent="calcularPreco" class="column q-gutter-md">
                        <g-input
                            v-model="precos.dias"
                            mask="##"
                            label="Informe a quantidade de dias"
                        />
                        <q-select
                            v-model="precos.eventos"
                            :options="tipoEventos"
                            label="Selecione o tipo do evento"
                            outlined
                            map-options
                            multiple
                            clearable
                        >
                            <template v-slot:option="scope">
                                <q-item
                                    v-bind="scope.itemProps"
                                    v-on="scope.itemEvents"
                                >
                                    <q-item-section class="q-mr-sm">
                                        <q-item-label>
                                            {{ scope.opt.label }} - Preço R$: {{ scope.opt.price }}
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </template>

                            <template v-slot:selected-item="scope">
                                <q-chip
                                    removable
                                    @remove="scope.removeAtIndex(scope.index)"
                                >
                                    {{ scope.opt.label }} R${{ scope.opt.price }}
                                </q-chip>
                            </template>
                        </q-select>

                        <q-select
                            v-model="precos.servicos"
                            :options="tipoServicos"
                            label="Selecione os serviços"
                            outlined
                            multiple
                            clearable
                            map-options
                        >
                            <template v-slot:option="scope">
                                <q-item
                                    v-bind="scope.itemProps"
                                    v-on="scope.itemEvents"
                                >
                                    <q-item-section class="q-mr-sm">
                                        <q-item-label>
                                            {{ scope.opt.label }} - Preço R$: {{ scope.opt.price }}
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </template>

                            <template v-slot:selected-item="scope">
                                <q-chip
                                    removable
                                    @remove="scope.removeAtIndex(scope.index)"
                                >
                                    {{ scope.opt.label }} R${{ scope.opt.price }}
                                </q-chip>
                            </template>
                        </q-select>

                        <g-button
                            label="Adicionar"
                            @click="calcularPreco"
                        />
                    </q-form>
                </q-card-section>
                
                <q-card bordered>
                    <div class="text-h6 text-center">Valor total R$:{{ precos.total }}</div>
                </q-card>
            </q-card>
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
                            v-model="orcamento.nome"
                            label="Informe seu nome"
                        />
                        <g-input
                            mask="###########"
                            v-model="orcamento.whatsApp"
                            label="Informe seu WhatsApp"
                        />
                        <g-date
                            v-model="orcamento.dataEvento"
                            outlined
                            label="Informe a data do evento"
                        />
                        <q-input
                            v-model="orcamento.descricao"
                            outlined
                            label="Descreva mais sobre o evento"
                            type="textarea"
                        />
                        <g-button
                            label="Enviar Mensagem"
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

const orcamento = ref({
    nome: "", 
    whatsApp: "",
    dataEvento: "",
    descricao: ""
});

const precos = ref({
    dias: "",
    servicos: [],
    eventos: [],
    total: ""
});

const tipoEventos = ref([
    {label: "Aniversário", value: "1", price: 50},
    {label: "Casamento", value: "2", price: 200},
    {label: "Formatura", value: "3", price: 150},
    {label: "Confraternização", value: "4", price: 100},
]);

const tipoServicos = ref([
    {label: "Karaokê", value: "1", price: 150},
    {label: "DJ Profissional", value: "2", price: 300},
    {label: "Decoração Básica", value: "3", price: 200},
    {label: "Buffet por pessoa", value: "4", price: 25},
])

const slide = ref(0);
const autoplay = ref(true);
const slides = ref([
    {
        img: 'src/assets/cozinha/cozinha1.jpg',
        title: 'Cozinha',
        caption: 'Um espaço para preparar refeições.'
    },
    {
        img: 'src/assets/salao/salao1.jpg',
        title: 'Salão Principal',
        caption: 'Um espaço amplo e elegante para eventos.'
    },
    {
        img: 'src/assets/salao/salao4.jpg',
        title: 'Salão Principal',
        caption: 'Um espaço amplo e elegante para eventos.'
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
        description: "hugoseitiodajima@gmail.com",
    },
    {
        icon: "location_on",
        title: "Endereço",
        description: "Rua XV de novembro, 956 - Marilia SP",
    },
]);

const enviarMensagem = () => {
    const numeroDestino = "5561986389157";
    const mensagem = `
        Olá, meu nome é ${orcamento.value.nome} e gostaria de solicitar um orçamento.
        Meu WhatsApp é ${orcamento.value.whatsApp} e a data do evento é ${orcamento.value.dataEvento}.
        Valor total: R$ ${precos.value.total}
        Mais detalhes sobre o evento: ${orcamento.value.descricao}
    `;

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

const calcularPreco = () => {
    let total = 0;

    const dias = parseInt(precos.value.dias) || 0;

    total += dias * 500;

    precos.value.servicos.forEach(servico => {
        total += servico.price;
    });

    precos.value.eventos.forEach(evento => {
        total += evento.price;
    });

    precos.value.total = total;
}

defineExpose({
    Espacos
})
</script>