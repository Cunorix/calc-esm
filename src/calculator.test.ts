import { Calculate, Operation } from "./calculator"

describe("Add", () => {
  it("should return 5", () => {
    expect(Calculate(Operation.ADD)(3)(2)).toBe(5)
  })
})