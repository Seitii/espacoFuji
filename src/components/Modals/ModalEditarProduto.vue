<template>
    <q-dialog>
        <g-card
            title="Editar Produto"
        >
            <q-form ref="form" @submit.prevent="create">
                <q-img :src="lula"></q-img>
                <q-card-section>
                    <q-btn
                        fab
                        color="primary"
                        icon="edit"
                        class="absolute"
                        style="top: 0; right: 12px; transform: translateY(-50%);"
                    />
                </q-card-section>
                <q-separator/>

                <q-tabs v-model="tab">
                    <q-tab label="Informações" name="one" icon="info"/>
                </q-tabs>

                <q-separator/>

                <q-tab-panels
                    v-model="tab"
                    animated
                >
                    <q-tab-panel name="one">
                        <div class="row q-gutter-md">
                            <div class="column q-gutter-md">
                                Pizza P
                                <g-input
                                    label="Nome"
                                    v-model="dados.nome"
                                />
                                <g-input
                                    label="Preço"
                                    v-model="dados.preco"
                                />
                            </div>
                            <div class="column q-gutter-md">
                                Pizza M
                                <g-input
                                    v-model="dados.nome"
                                    label="Nome"
                                />
                                <g-input
                                    v-model="dados.preco"
                                    label="Preço"
                                />
                            </div>
                            <div class="column q-gutter-md">
                                Pizza G
                                <g-input
                                    v-model="dados.nome"
                                    label="Nome"
                                />
                                <g-input
                                    v-model="dados.preco"
                                    label="Preço"
                                />
                            </div>
                        </div>
                        
                    </q-tab-panel>
                </q-tab-panels>
            </q-form>
        </g-card>
    </q-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Produtos} from "./produtos"

const lula = ref("src/assets/lula.jfif");
const tab = ref("one");
const dados = ref<Produtos>({
    nome: "",
    preco: null,
    status: true
})

const create = () => {
    console.log("Criar produto");
}
</script>