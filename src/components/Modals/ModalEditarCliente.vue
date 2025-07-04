<template>
    <div class="row q-gutter-md">
        <q-input
            v-model="dados.nome"
            dense
            class="col"
            outlined
            label="Nome"
        />
        <q-input
            v-model="dados.cpf"
            dense
            class="col"
            outlined
            label="Cpf/Cnpj"
        />
    </div>
        <q-input
            v-model="dados.observacao"
            dense
            class="q-mt-md"
            outlined
            label="Observação interna"
        />
    <div class="row q-gutter-x-md q-mt-md">
        <g-date
            v-model="dados.data_nascimento"
            label="Data de nascimento"
            class="col"
            outlined
            dense
        />
        <q-input
            v-model="dados.email"
            dense
            class="col"
            outlined
            label="E-mail"
        />
    </div>

    <div class="row q-gutter-x-md q-mt-md">
        <q-list bordered class="rounded-borders col">
            <q-expansion-item
                expand-separator
                icon="phone"
                class="text-bold "
                label="Telefones"
            >
                <div v-for="telefone in dados.telefone" :key="telefone.id" class="row q-gutter-sm q-mt-sm q-ml-sm">
                    <q-input
                        v-model="telefone.telefone"
                        dense
                        outlined
                        label="Telefone"
                    />
                    <q-btn
                        color="negative"
                        icon="delete"
                        @click="removerTelefone(telefone.id)"
                    />
                </div>
                    <g-button
                    class="q-mt-sm"
                    label="Adicionar Telefone"
                    @click="adicionarTelefone"
                    icon="add"
                />
            </q-expansion-item>
        </q-list>

        <q-list bordered class="rounded-borders col">
            <q-expansion-item
                expand-separator
                icon="home"
                label="Endereços"
                class="text-bold"
            >
            <div v-for="endereco in dados.endereco" :key="endereco.id" class="row q-gutter-sm q-mt-sm q-ml-sm">
                <q-checkbox
                        v-model="endereco.principal"
                        dense
                        :true-value="true"
                        :false-value="false"
                    />
                <q-input
                    v-model="endereco.endereco"
                    dense
                    outlined
                    label="Endereço"
                />
                <q-btn
                    label="Editar"
                    @click="editarEndereco(endereco.id)"
                />
            </div>
                <q-btn
                    label="Adicionar Endereço"
                    @click="adicionarEndereco"
                    icon="add"
                />
            </q-expansion-item>
        </q-list>
    </div>

    <g-button
        class="q-mt-md"
        label="Salvar"
        @click="salvarDados"
    />
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Clientes} from "../cliente";

const props = defineProps<{
    cliente: Clientes;
}>();

const selected = ref<string | boolean>(false);
const dados = ref({...props.cliente});

const adicionarTelefone = () => {
    console.log("Adicionar Telefone");
}

const removerTelefone = (id: number) => {
    console.log("Remover telefone", id);
}

const adicionarEndereco = () => {
    dados.value.endereco.push({
        id: Date.now(),
        endereco: "",
        principal: false
    })
}

const editarEndereco = (id: number) => {
    console.log("Editar Endereço", id);
}

const salvarDados = () => {
    console.log("Salvar Dados", dados.value);
}
</script>