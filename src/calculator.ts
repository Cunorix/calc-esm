export enum Operation {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE,
}

export const Calculate = (op: Operation) => (a: number) => (b: number) => ({
  [Operation.ADD]: a + b,
  [Operation.SUBTRACT]: a - b,
  [Operation.MULTIPLY]: a * b,
  [Operation.DIVIDE]: a / b,
})[op]

export default Calculate