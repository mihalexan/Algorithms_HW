document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("analyze").addEventListener("click", function () {
    const text = document.getElementById("textinput").value.toLowerCase();
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"; // Русский алфавит

    const letterFrequency = {}; // Объект для хранения частоты букв

    // Инициализация счетчиков букв
    for (const letter of text) {
      if (alphabet.includes(char)) {
        letterFrequency[char]++;
      }
    }
    // Вывод результата на страницу
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h2>Частотный словарь букв:</h2>";
    for (const letter of alphabet) {
      resultElement.innerHTML + -`${letter}: ${letterFrequency[letter]}<br>`;
    }
  });
});
