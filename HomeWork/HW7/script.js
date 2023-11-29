class SpecialStack {
  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }
  // Добавление элемента в стек
  push(value) {
    this.mainStack.push(value);
    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }
  // Удаление элемента из стека
  pop() {
    if (this.mainStack.length === 0) {
      throw new Error("стек пуст");
    }
    const top = this.mainStack.pop();
    if (top === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return this.minStack[this.minStack.length - 1];
  }
  // Проверка на пустоту стека
  isEmpty() {
    return this.mainStack.length === 0;
  }
}
//Пример использования
const stack = new SpecialStack();
stack.push(16);
stack.push(15);
stack.push(29);
stack.push(19);
stack.push(18);

console.log(stack.getMin()); //Выведет 15
stack.pop();
stack.pop();

console.log(stack.getMin()); //Выведет 18
