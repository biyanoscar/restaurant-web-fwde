import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/menu.css';
import data from "../DATA.json";

console.log('Hello Coders! :)');


const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

const topMenu = document.querySelector('.top-menu');
const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', function (event) {
    topMenu.classList.toggle('active');
    menuBtn.classList.toggle('menu-closed');
    event.stopPropagation();
});



hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});




//loop show data
data.restaurants.forEach(addRestaurantCard);

function addRestaurantCard(item, index) {
    document.getElementById("restaurants").innerHTML +=
    `<article class="restaurant-item">
        <div class="list-card-image">
            <div class="rating position-absolute">
                <span class="badge badge-rating">Rating: ${item['rating']} </span>
            </div>
            <div class="member-plan position-absolute">
                <span class="badge badge-city">${item['city']}</span>
            </div>
            <img class="restaurant-item__thumbnail"
                src="${item['pictureId']}"
                alt="${item['name']}">
        </div>
        <div class="restaurant-item__content">
            <h1 class="restaurant-item__title">${item['name']}</h1>
            <p class="restaurant-item__description text">${item['description']}</p>
            
        </div>
    </article>`

}