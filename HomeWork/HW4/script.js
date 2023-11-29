// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.

// Для решения этой задачи, можно применить алгоритм слияния двух отсортированных массивов. В этом случае, время выполнения будет O(m + n), где m и n - размеры двух массивов.

function findKthElementInSortedArrays(arr1, arr2, k) {
    const mergedArray = [];

    let i = 0; // Индекс для массива arr1
    let j = 0; // Индекс для массива arr2

    // Объединяем оба массива, пока не достигнем k-го элемента
    while (i < arr1.length && j < arr2.length && mergedArray.length < k) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    // Добавляем оставшиеся элементы из arr1, если есть
    while (i < arr1.length && mergedArray.length < k) {
        mergedArray.push(arr1[i]);
        i++;
      }

    // Добавляем оставшиеся элементы из arr2, если есть
    while (j < arr2.length && mergedArray.length < k) {
        mergedArray.push(arr2[j]);
        j++;
      }
    // Возвращаем k-й элемент
    return mergedArray[k - 1];
}

// Пример использования
const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

const result = findKthElementInSortedArrays(arr1, arr2, k);
console.log(result); // Вывод: 256
