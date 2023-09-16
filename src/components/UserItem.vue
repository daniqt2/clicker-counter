<script setup lang="ts">
const { index, name, selected } = defineProps<{
  index: number;
  name: string;
  selected: boolean;
}>();
const emit = defineEmits<{
  (event: "click"): void;
}>();
</script>

<template>
  <div class="py-2 hover:bg-gray-100">
    <p
      class="cursor-pointer hover:text-sky-400"
      :class="{ 'text-sky-500 text-lg font-bold': selected }"
      @click="emit('click')"
    >
      <span class="font-bold text-xs">{{ index + 1 }}</span> - {{ name }}
    </p>
  </div>
</template>
