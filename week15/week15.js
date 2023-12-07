//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let number = 2;
while (number <= 20) {
    console.log(number);
    number += 2;
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i*5);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
let result = 0;
for (let i = 0; i < array.length; i++) {
    result += array[i];
}
console.log(result);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i] + " - прекрасное животное");
}

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str) {
    console.log(symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let number of array) {
    console.log(number);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
let sentencesOne = sentences[0].split(", ")
let sentencesTwo = sentences[1].split(" ")

for (let word of sentencesOne) {
    console.log(word);
}

for (let word of sentencesTwo) {
    console.log(word);
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let resultTwo = 0;
for (let number of array) {
    resultTwo += number;
}
console.log(resultTwo);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let word of list) {
    console.log(word.length);
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let letter of greeting.toLowerCase()) {
    if (vowels.includes(letter)) {
        vowelCount++
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
console.log(words.join(' '));


//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const wordsChange = word.toUpperCase();
    words[i] = wordsChange
}
console.log(words); 

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let numberWhile = 1;
while (numberWhile <= 10) {
    console.log(numberWhile);
    numberWhile += 1;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let numberWhileMinus = 10;
while (numberWhileMinus > 0) {
    console.log(numberWhileMinus);
    numberWhileMinus -= 1;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let m = 0;
while (m < allNumbers.length) {
    if (allNumbers[m] < 0) {
    console.log("Не все элементы положительные");
    break;
    }
    m++;
}

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let i = 0;
do {
    console.log(random[i]);
    i++;
} while (random[i] > 0);


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let numberWhy = 0;
do {
    if (numberWhy % 3 !== 0) {
        console.log(numberWhy);
    }
    numberWhy++;
} while (numberWhy <= 100);


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sumOne = 0;
while (sumOne <= 100) {
    let i = +prompt("Введите числа, пока сумма не станет больше 100", 0);
    if (sumOne > 100) break;
        sumOne += i;
}

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const h4FromBody = document.querySelectorAll('h4')
h4FromBody.forEach(function(elem) {
    elem.style = "color: blue";
});


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
for (let i = 0; i < 6; i++) {
    randomString += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
}
console.log(randomString);