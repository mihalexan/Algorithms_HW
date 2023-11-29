function hanoiInterative(n, source, auxiliary, target) {
  const stack = [{ n, source, auxiliary, target }];

  while (stack.length > 0) {
    const { n, source, auxiliary, target } = stack.pop();

    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
    } else {
      stack.push({ n: n - 1, source, auxiliary, target });
      stack.push({ n: 1, source, auxiliary, target });
      stack.push({ n: n - 1, source: auxiliary, auxiliary: target, target });
    }
  }
}
// Пример использования итеративного решения
hanoiInterative(3, "Left", "Middle", "Right");

function hanoiRecursive(n, source, auxiliary, target) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
    return;
  }

  hanoiRecursive(n - 1, source, target, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${target}`);
  hanoiRecursive(n - 1, auxiliary, source, target);
}

// Пример использования рекурсивного решения
hanoiRecursive(3, "Left", "Middle", "Right");
