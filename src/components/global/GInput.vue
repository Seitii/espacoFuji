<template>
    <q-input
        v-model="inputValue"
        outlined
        :color="$q.dark.isActive ? 'white' : 'primary'"
        :text-color="$q.dark.isActive ? 'white' : 'black'"
        :type="computedType"
        @update:model-value="handleOnChange"
    >
    </q-input>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, onMounted, computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: [String, Number, null],
        default: ''
    },
});

const emit = defineEmits(['update:model-value']);
const inputValue = ref<string | number | null>(props.modelValue);

const handleOnChange = (value: string | number | null) => {
    inputValue.value = value;

    if(value !== props.modelValue) {
        emit("update:model-value", value);
    }
}

const computedType = computed<'text' | 'number'>(() => {
    return props.type === 'number' ? 'number' : 'text';
});

watch(() => props.modelValue, (newValue) => {
    if(newValue !== inputValue.value){
        inputValue.value = newValue;
    }
});

onMounted(() => {
    if(props.modelValue){
        // handleOnChange(props.modelValue);
        inputValue.value = props.modelValue;
    }
});

defineOptions({
    name: "g-input",
});
</script>