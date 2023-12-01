// Ініціалізація карти
var map = L.map('map').setView([40.7128, -74.0060], 10);

// Зміна фону (використовуючи інший tile layer)
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Додавання маркера
var marker = L.marker([40.7128, -74.0060]).addTo(map);
marker.bindPopup('Мітка на карті').openPopup();

// Додавання лінії маршруту
var routePoints = [
    [40.7128, -74.0060], // Початкова точка (наприклад, Нью-Йорк)
    [42.3601, -71.0589] // Кінцева точка (наприклад, Бостон)
];

var route = L.polyline(routePoints, {color: 'red'}).addTo(map);






