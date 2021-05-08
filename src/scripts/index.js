import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from "../DATA.json";

console.log('Hello Coders! :)');
// console.log(data);

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});





// console.log(data.restaurants);

//loop show data
data.restaurants.forEach(addRestaurantCard);

function addRestaurantCard(item, index) {
    document.getElementById("restaurants").innerHTML +=
    `<article class="restaurant-item">
        <img class="restaurant-item__thumbnail"
            src="${item['pictureId']}"
            alt="${item['name']}">
        <div class="restaurant-item__content">
            <p class="restaurant-item__date">Rating: ${item['rating']}
            </p>
            <h1 class="restaurant-item__title">${item['name']}</h1>
            <p class="restaurant-item__description text">${item['description']}</p>
            <p class="restaurant-item__footer">${item['city']}</p>
        </div>
    </article>`
    //   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
    // console.log(item['name']);
}