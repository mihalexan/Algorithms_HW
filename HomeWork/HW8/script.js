// Функция для расчета максимальной выгоды от активностей
function calculateMaxBenefit() {
  const workingHours = 8; // Рабочий день в часах
  const activityValue = []; // Массив для хранения стоимости активностей по часам

  // Заполним массив начальными значениями
  for (let i = 0; i <= workingHours; i++) {
    activityValue[i] = 0;
  }

  // Рассмотрим заявки с 9:00 до 13:00
  for (let i = 1; i <= 4; i++) {
    activityValue[i] = 1;
  }

  // Рассмотрим заявки с 13:00 до 17:00
  for (let i = 5; i <= 8; i++) {
    activityValue[i] = 2;
  }

  // Рассмотрим пересекающиеся заявки
  for (let i = 1; i <= 3; i++) {
    for (let j = 5; j <= 7; j++) {
      activityValue[i + j] = Math.max(activityValue[i + j], 1);
    }
  }

  for (let i = 1; i <= 2; i++) {
    for (let j = 6; j <= 7; j++) {
      activityValue[i + j] = Math.max(activityValue[i + j], 2);
    }
  }

  // Найдем максимальную выгоду
  let maxBenefit = 0;
  for (let i = 0; i <= workingHours; i++) {
    maxBenefit += activityValue[i];
  }
  return maxBenefit;
}
// Вызовем функцию и выведем результат
const maxBenefit = calculateMaxBenefit();
console.log(`Максимальная выгода: ${maxBenefit}`);
