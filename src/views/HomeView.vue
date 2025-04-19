<script setup lang="ts">
  import { ref } from 'vue'
  
  import CodeEditor from '../components/CodeEditor.vue'
  import Controls from '../components/Controls.vue'
  import ExecutionVisualizer from '../components/ExecutionVisualizer.vue'
  import { useParser } from '../composables/useParser'

  import { useExecutionFlow } from '@/composables/useExecutionFlow'
import { useExecutionStore } from '@/store/execution'

const code = ref(`function greet() {
  console.log("Hello, world!");
}
greet();`)

const { parseCodeToAST } = useParser()
const { analyzeAST } = useExecutionFlow()
const store = useExecutionStore()

const handleRun = () => {
  const ast = parseCodeToAST(code.value)
  if (!ast) return

  const steps = analyzeAST(ast)
  store.setSteps(steps)
}
  </script>
  <template>
    <div class="home">
      <h1>JS Execution Visualizer</h1>
      <CodeEditor v-model="code" />
      <Controls @run="handleRun" />
      <ExecutionVisualizer :code="code" />
    </div>
  </template>
  <style scoped>
  .home {
    max-width: 900px;
    margin: auto;
  }
  </style>
  