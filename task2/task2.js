const cities = ['Париж', 'Мадрид', 'Рим', 'Рига'];

//Создайте пустой массив, который будет хранить температуры для каждого города//
let temps = [];

const list = document.getElementById('list');
const max = document.getElementById('max');
const min = document.getElementById('min');

// записать значения в массив//
for (let i = 0; i < cities.length; i++) {
    temps.push(prompt("Введите температуру для города " + cities[i], ''));
};



for (let j = 0; j < temps.length; j++) {
const newCity = document.createElement('li');
newCity.textContent = `Температура в городе ${cities[j]} ${temps[j]} °C`;
list.appendChild(newCity); 
};


(function findMinMax() {
    let maxValue = Math.max(...temps);
    let minValue = Math.min(...temps); 
    max.textContent = `Максимальная температура: ${maxValue} °C`;
    min.textContent = `Минимальная температура: ${minValue} °C`;
})();