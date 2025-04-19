import { Program, CallExpression } from 'estree'

export interface ExecutionStep {
  type: 'callStack' | 'microtask' | 'macrotask' | 'log'
  label: string
}

export function useExecutionFlow() {
  const analyzeAST = (ast: Program): ExecutionStep[] => {
    const steps: ExecutionStep[] = []

    const walk = (node: any) => {
      if (!node) return

      switch (node.type) {
        case 'CallExpression': {
          const calleeName = node.callee?.name || ''

          if (calleeName === 'console') {
            steps.push({ type: 'log', label: 'console.log()' })
          } else if (calleeName === 'setTimeout') {
            steps.push({ type: 'macrotask', label: 'setTimeout()' })
          } else if (calleeName === 'Promise') {
            steps.push({ type: 'microtask', label: 'Promise.resolve()' })
          } else {
            steps.push({ type: 'callStack', label: `${calleeName}()` })
          }

          // recurse arguments
          node.arguments?.forEach(walk)
          break
        }

        case 'ExpressionStatement':
        case 'VariableDeclaration':
        case 'FunctionDeclaration':
        case 'BlockStatement':
        case 'Program': {
          Object.values(node.body || []).forEach(walk)
          break
        }
      }
    }

    walk(ast)
    return steps
  }

  return { analyzeAST }
}
