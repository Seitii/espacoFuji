<template>
    <q-dialog>
        <g-card title="Cadastrar categoria">
            <q-form ref="form">
                <div class="column q-gutter-md q-mt-sm">
                    <g-input
                        v-model="dados.nome"
                        label="Nome da Categoria"
                    />
                    <g-input
                        v-model="dados.imprimir"
                        label="Onde imprimir"
                    />
                    <g-input
                        v-model="dados.imposto"
                        label="Tipo de imposto"
                    />
                </div>
                <div>
                    <g-btn
                        label="Criar Categoria"
                        type="submit"
                        class="q-mt-md"
                    />
                </div>
            </q-form>
        </g-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { Categorias } from "../categoria";
import {api} from "boot/axios";
import {ref} from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const dados = ref<Categorias>({
    nome: ""
});

const create = () => {
    api.post("/categorias", dados.value)
        .then((res) => {
            if(res.status == 200){
                $q.notify({
                    type: "positive",
                    message: "Categoria criada com sucesso!"
                })
            }
            else{
                $q.notify({
                    type: "negative",
                    message: "Erro ao criar categoraia!"
                });
            }
        })
}
</script>