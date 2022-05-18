import './css/styles.css';
import Notiflix from 'notiflix';

import countryCard from './templates/country-card.hbs';
import countryList from './templates/country-list.hbs';

import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;

const refs = {
  listEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
};
 
 fetchCountries(2)
  .then(renderCountryCard)
  .catch(error => error.message);


  


function renderCountryCard(name) {
  const markUp = countryCard(name);
  refs.divEl.innerHTML = markUp;
}
