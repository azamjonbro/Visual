import * as esprima from 'esprima'

export function useParser() {
  const parseCodeToAST = (code: string) => {
    try {
      const ast = esprima.parseScript(code, { loc: true })
      return ast
    } catch (err) {
      console.error('Parsing error:', err)
      return null
    }
  }

  return {
    parseCodeToAST
  }
}
