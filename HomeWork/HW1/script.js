// Получение от пользователя 3 целочисленных переменных
function treeNumbersSum() {
  let num1 = parseInt(prompt("Введите первое число: "));
  let num2 = parseInt(prompt("Введите второе число: "));
  let num3 = parseInt(prompt("Введите третье число: "));

  // Объявление переменной для хранения суммы
  let sum = 0;

  // Сложение трех чисел
  sum = num1 + num2 + num3;

  // Вывод суммы на экран
  document.getElementById("result").textContent = "Сумма трех чисел: " + sum;
}

//function threeNumbersSum() {
//    let sum = 0;
//    let num1 = parseInt(prompt("Enter the 1st number: "));
//    console.log( ` ${num1}`);
//    let num2 = parseInt(prompt("Enter the 2nd number: "));
//    console.log(` ${num2}`) ;
//    let num3=parseInt (prompt ("Enter the third number:")) ;
//    console.log (`${num3}` );

//    sum = sum1 + sum2 +sum3;

//    console.log(`Sum of the 3 number is = ${sum}`);
//}
