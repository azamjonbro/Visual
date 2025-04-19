<template>
    <div class="controls">
      <button @click="$emit('run')">▶️ Run</button>
      <button disabled>⏸ Pause</button>
      <button disabled>⏭ Step</button>
    </div>
  </template>
  
  <script setup lang="ts">
  // emits defined in template
  </script>
  
  <style scoped>
  .controls {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  button {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  
  button:hover {
    background: #4338ca;
  }
  
  button:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
  </style>
  