<template>
    <div class="q-pa-md">
        <q-form ref="form" @submit.prevent="create">
            <div>
                Filtros
            </div>
            <div class="row q-gutter-md">
                <q-checkbox  
                    true-value="S"
                    false-value="N"
                    v-model="somenteEndereco"
                    label="Filtar por endereço"
                />
                <q-input
                    v-model="filtros.telefone"
                    dense
                    label="Telefone"
                    outlined
                />
                <q-input
                    v-model="filtros.nome"
                    dense
                    label="Nome"
                    outlined
                />
                <q-input
                    v-if="somenteEndereco == 'S'"
                    v-model="filtros.endereco"
                    dense
                    label="Endereço"
                    outlined    
                />
                <g-button
                    @click="vendaSemBalcao"
                    icon="people"
                    label="Venda de Balcão sem cliente"
                />
            </div>
            <q-separator/>
            <ListaClientes v-if="somenteEndereco == 'S'" class="q-mt-sm"/>
            <ListaVendas v-if="somenteEndereco == 'N'" class="q-mt-sm"/>
        </q-form>
    </div>
</template>

<script setup lang="ts">
import {FiltrosClientes} from "../components/cliente";
import ListaClientes from "../components/ListaClientes.vue";
import ListaVendas from "../components/ListaVendas.vue";
import {ref} from "vue";
const somenteEndereco = ref("N");

const filtros = ref<FiltrosClientes>({
  nome: "",
  telefone: "",
  periodo: "",
  dataInicial: "",
  dataFinal: "",
  cidade: "",
  bairro: "",
  saldo: "",
  endereco: ""
});


const create = () => {
    console.log("Criar cliente com filtros:", filtros.value);
}

const vendaSemBalcao = () => {
    console.log('Venda de balcão sem cliente');
}

defineExpose({
    ListaClientes,
    ListaVendas
});
</script>