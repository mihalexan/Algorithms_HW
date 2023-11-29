// №1 
// Quick sort пишем еще раз “с чистого листа”
// Выбираем опорный элемент из массива. Как правило, это средний элемент.
// Делим массив на 2 подмассива. Элементы, которые меньше опорного, и элементы, которые больше   опорного.
// Рекурсивно применяем сортировку к обоим подмассивам.
// В результате массивы будут делиться до тех пор, пока не останется один элемент, который потом отсортируется.
// №2*
// Реализовать Quick sort используя итерационный подход.

function quickSortInterative(arr) {
    // Создаем стек для хранения информации о подмассивах
    const stack = [[0, arr.length -1]];

    while (stack.length) {
        // Извлекаем информацию о текущем подмассиве из стека
        const [low, high] = stack.pop();

        // Если подмассив состоит из одного элемента или пустой, сортировка не требуется
        if (low >= high) {
            continue;
          }
        // Выбираем опорный элемент (в данной реализации используем средний элемент)
        const pivotIndex = partition(arr, low, high);
        // Помещаем в стек информацию о подмассивах, которые нужно отсортировать
        stack.push([low, pivotIndex - 1]);  // Левый подмассив до опорного элемента
        stack.push([pivotIndex + 1, high]);  // Правый подмассив после опорного элемента
    }
    return arr;
}
function partition(arr, low, high) {
    // Выбираем опорный элемент (в данной реализации используем средний элемент)
    const pivotIndex = Math.floor((low + high) / 2);
    const pivotValue = arr[pivotIndex];
  
    // Перемещаем опорный элемент в конец
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
  
    // Индекс для элементов, меньших опорного
    let smallerIndex = low;
  
    // Проходим по массиву и перемещаем элементы, меньшие опорного, влево от него
    for (let i = low; i < high; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[smallerIndex]] = [arr[smallerIndex], arr[i]];
        smallerIndex++;
      }
    }
    // Перемещаем опорный элемент на своё место
    [arr[smallerIndex], arr[high]] = [arr[high], arr[smallerIndex]];

    // Возвращаем индекс опорного элемента
    return smallerIndex;
}

// Пример использования
const arr = [9, -3, 5, 2, 6, 8, 1, 3];
const sortedArr = quickSortInterative(arr);
console.log(sortedArr); // Вывод: [-3, 1, 2, 3, 5, 6, 8, 9]