<template>
    <q-dialog>
        <g-card title="Novo cliente" style="width: 800px; height: 600px;">
            <q-form ref="form" @submit.prevent="create">
                <div class="row q-gutter-md">
                    <q-input
                        v-model="dados.nome"
                        dense
                        class="col"
                        label="Nome"
                        outlined
                        :rules="[val => !!val || 'Nome é obrigatório']"
                        hide-bottom-space
                    />
                    <q-input
                        v-model="dados.cpf"
                        dense
                        class="col"
                        mask="###########"
                        label="CPF"
                        outlined
                        hide-bottom-space
                        :rules="[val => !!val || 'CPF é obrigatório']"
                    />
                    <g-date
                        v-model="dados.data_nascimento"
                        label="Data de nascimento"
                        class="col"
                        outlined
                        dense
                    />
                </div>
                <div class="q-gutter-md q-mt-sm">
                    <q-input v-model="dados.telefone"
                        dense
                        mask="###########"
                        label="Telefone"
                        outlined
                    />
                </div>
                <div class="q-gutter-md q-mt-sm">
                    <q-input
                        dense
                        outlined
                        mask="########"
                        label="CEP"
                        v-model="dados.cep"
                    />
                    <q-input
                        dense
                        outlined
                        label="Cidade"
                        v-model="dados.cidade"
                    />
                    <q-input
                        dense
                        outlined
                        label="Bairro"
                        v-model="dados.bairro"
                    />
                    <q-input
                        dense
                        outlined
                        label="Endereço"
                        v-model="dados.endereco"
                    />
                    <q-input
                        dense
                        outlined
                        label="Número"
                        v-model="dados.numero"
                    />
                    <q-input
                        dense
                        outlined
                        label="Complemento"
                        v-model="dados.complemento"
                    />
                </div>
                    <g-button
                        class="q-mt-md"
                        label="Salvar"
                        type="submit"
                    />
            </q-form>
        </g-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { CreateCliente } from "../cliente";
import {api} from "boot/axios";
import {ref} from "vue";
import {useQuasar} from "quasar";

const $q = useQuasar();
const dados = ref<CreateCliente>({
    nome: "",
    cpf: "",
    data_nascimento: "",
    telefone: "",
    cep: "",
    cidade: "",
    bairro: "",
    endereco: "",
    numero: null, 
    complemento: "",
    ativo: true
});

const create = () => {
    api.post("/clientes", dados.value)
        .then((res) => {
            if(res.status !== 200){
                $q.notify({
                    type: "negative",
                    message: "Erro ao criar clientes!"
                });
            }
            else{
                $q.notify({
                    type: "positive",
                    message: "Cliente criado com sucesso!"
                });
            }
        })
}
</script>
