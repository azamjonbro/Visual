import { defineStore } from 'pinia'
import type { ExecutionStep } from '../composables/useExecutionFlow'

export const useExecutionStore = defineStore('execution', {
  state: () => ({
    steps: [] as ExecutionStep[]
  }),
  actions: {
    setSteps(newSteps: ExecutionStep[]) {
      this.steps = newSteps
    }
  }
})
