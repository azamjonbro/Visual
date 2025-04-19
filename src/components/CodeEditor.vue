<template>
    <div class="code-editor">
      <label>✍️ Write your code here:</label>
      <textarea v-model="editableValue" rows="10" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  const props = defineProps<{
    modelValue: string
  }>()
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  
  const editableValue = computed({
    get: () => props.modelValue,
    set: (val: string) => emit('update:modelValue', val)
  })
  </script>
  
  <style scoped>
  .code-editor {
    margin-bottom: 1rem;
  }
  
  textarea {
    width: 100%;
    font-family: monospace;
    font-size: 14px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #f9f9f9;
    resize: vertical;
  }
  </style>
  