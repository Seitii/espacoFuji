<template>
    <q-input
        v-model="inputValue"
        mask="##/##/####"
        @update:model-value="handleOnChange"
    >
        <template
            v-slot:prepend
        >
        <q-icon name="calendar_month" class="cursor-pointer">
            <q-popup-proxy
                transition-show="scale"
                transition-hide="scale"
            >
                <q-date
                    v-model="inputValue"
                    @update:model-value="handleOnChange"
                    mask="DD/MM/YYYY"
                >
                    <template v-slot:default>
                        <q-btn v-close-popup label="Fechar"/>
                    </template>
                </q-date>
            </q-popup-proxy>
        </q-icon>
        </template>
    </q-input>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, defineProps} from "vue";

const inputValue = ref<string | null>(null);

const emit = defineEmits(["update:model-value"]);

const handleOnChange = (value: string) => {
    inputValue.value = value;
    emit("update:model-value", value);
}

const props = defineProps({
    modelValue: {
        type: String
    },
    type: {
        type: String,
        default: 'text'
    }
});

onMounted(() => {
    if(props.modelValue) {
        inputValue.value = props.modelValue;
        handleOnChange(props.modelValue);
    }
})

defineOptions({
    name: "g-date"
});

</script>