<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useExecutionStore } from '../store/execution'
import { computed } from 'vue'

const { steps } = storeToRefs(useExecutionStore())

const callStack = computed(() =>
  steps.value.filter((step) => step.type === 'callStack')
)
const microtasks = computed(() =>
  steps.value.filter((step) => step.type === 'microtask')
)
const macrotasks = computed(() =>
  steps.value.filter((step) => step.type === 'macrotask')
)
</script>

<template>
  <div class="visualizer">
    <div class="section">
      <h3>📚 Call Stack</h3>
      <div class="stack-box">
        <div v-for="(item, index) in callStack" :key="index" class="stack-item">
          {{ item.label }}
        </div>
      </div>
    </div>

    <div class="section">
      <h3>🧩 Microtask Queue</h3>
      <div class="queue-box">
        <div v-for="(item, index) in microtasks" :key="index" class="queue-item">
          {{ item.label }}
        </div>
      </div>
    </div>

    <div class="section">
      <h3>⏱ Macrotask Queue</h3>
      <div class="queue-box">
        <div v-for="(item, index) in macrotasks" :key="index" class="queue-item">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <style scoped>
  .visualizer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .section {
    background: #f3f4f6;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 0 10px #e5e7eb;
  }
  
  .stack-box,
  .queue-box {
    margin-top: 10px;
    min-height: 120px;
    background: white;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  .stack-item,
  .queue-item {
    background: #e0e7ff;
    padding: 6px 10px;
    margin-bottom: 6px;
    border-radius: 6px;
    text-align: center;
    font-weight: 500;
  }
  </style>
  