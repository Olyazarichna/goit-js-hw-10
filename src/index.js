import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
    listEl: document.querySelector('.country-list'),
    divEl: document.querySelector('.country-info'),
}

const URL = "https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages";
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов


function fetchCountries(name) {
   return fetch(URL).then(response => {
       if(!response.ok) {
           throw new Error(response.status);
       }
       console.log(response.json());
       return response.json();
   }).then(name => {
       console.log(name); 
   }).catch(error => error.message);
};


fetchCountries();



function rendeList() {
   
    return` 
    <li class="country">
    <img src="{{flags.svg}}">
    <p class = country-name>{{name.official}}</p>
    </li>`

}
renderDiv();

function renderDiv(){
    return `
    <img src="{{flags.svg}}">
    <p>{{name.official}}</p>
    <p>{{population}}</p>
    <p>{{capital}}</p>
    <p>{{languages}}</p>
    `
}