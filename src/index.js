import './css/styles.css';
import Notiflix from 'notiflix';
// import countryCard from './templates/country-card.hbs'
// import countryCard from '../templates/counrty-card.hbs'
    
const DEBOUNCE_DELAY = 300;

const refs = {
    listEl: document.querySelector('.country-list'),
    divEl: document.querySelector('.country-info'),
}

const URL = "https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages";


 fetch(URL).then(response => {
    //    if(!response.ok) {
    //        throw new Error(response.status);
    //    }
       return response.json();
   }).then(name => {
       console.log(name); 
       const markUp = countryCard(name);
       console.log(markUp);
       refs.divEl.innerHTML = markUp;
   }).catch(error => error.message);



// fetchCountries();



// function rendeList() {
   
//     return` 
//     <li class="country">
//     <img src="{{flags.svg}}">
//     <p class = country-name>{{name.official}}</p>
//     </li>`

// }
// renderDiv();
