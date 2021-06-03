import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/menu.css';
// import data from '../DATA.json';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu-button'),
  drawer: document.querySelector('#top-menu-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// console.log('Hello Coders! :)');

// // const hero = document.querySelector('.hero');
// // const main = document.querySelector('main');
// const drawer = document.querySelector('#top-menu-drawer');
// const menuBtn = document.querySelector('#menu-button');
// menuBtn.addEventListener('click', function (event) {
//   drawer.classList.toggle('active');
//   menuBtn.classList.toggle('menu-closed');
//   event.stopPropagation();
// });

// //loop show data
// data.restaurants.forEach(addRestaurantCard);

// function addRestaurantCard(item, index) {
//   document.getElementById("restaurants").innerHTML +=
//     `<article class="restaurant-item" tabindex="0">
//         <div class="list-card-image">
//             <div class="rating position-absolute">
//                 <span class="badge badge-rating">Rating: ${item['rating']} </span>
//             </div>
//             <div class="member-plan position-absolute">
//                 <span class="badge badge-city">${item['city']}</span>
//             </div>
//             <img class="restaurant-item__thumbnail"
//                 src="${item['pictureId']}"
//                 alt="${item['name']}">
//         </div>
//         <div class="restaurant-item__content">
//             <h1 class="restaurant-item__title">${item['name']}</h1>
//             <p class="restaurant-item__description text">${item['description']}</p>

//         </div>
//     </article>`;
// }
