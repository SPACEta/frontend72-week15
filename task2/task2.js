//1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
let grades = new Array(12).fill(1);

let gradesNew = grades.map(function () {
    grades = (Math.floor(Math.random() * 100) + 1);
    return grades;
});
console.log(gradesNew);

//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
const sum = gradesNew.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
}, 0)
const gradesAverage = () => {
    const gradesLength = gradesNew.length;
    return sum / gradesLength;
};
console.log(Math.round(gradesAverage ()));

//3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
let gradesMax = Math.max(...gradesNew);
console.log(gradesMax);

//4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
let gradesMin = Math.min(...gradesNew);
console.log(gradesMin);

//5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades = gradesNew.filter(function(number) {
    return number >= 60;
});
console.log(positiveGrades.length);

//6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrades = gradesNew.filter(function(number) {
    return number <= 60;
});
console.log(negativeGrades.length);

/*7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    - Если оценка ниже 20, преобразуйте её в "E"
Выведите все найденные значения на экран.*/

const gradesScore = gradesNew.map(function (item) {
    if (item >= 80) {
        return "A";
    } else if (item >= 60 && item < 80) {
        return "B";
    } else if (item >= 40 && item < 60) {
        return "C";
    } else if (item >= 20 && item < 40) {
        return "D";
    } else {
        return "E";
    }
});

console.log(gradesScore);
